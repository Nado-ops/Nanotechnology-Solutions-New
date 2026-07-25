import { readFileSync, writeFileSync } from 'node:fs'
import { deflateSync, inflateSync } from 'node:zlib'

const sourcePath = new URL('../public/images/logo/nanotechnology-logo-header.png', import.meta.url)
const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

function decodePng(buffer) {
  if (!buffer.subarray(0, 8).equals(signature)) throw new Error('Invalid PNG signature')
  let offset = 8
  let width
  let height
  const idat = []

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset)
    const type = buffer.toString('ascii', offset + 4, offset + 8)
    const data = buffer.subarray(offset + 8, offset + 8 + length)
    if (type === 'IHDR') {
      width = data.readUInt32BE(0)
      height = data.readUInt32BE(4)
      if (data[8] !== 8 || data[9] !== 6 || data[12] !== 0) {
        throw new Error('Expected an 8-bit, non-interlaced RGBA PNG')
      }
    } else if (type === 'IDAT') {
      idat.push(data)
    } else if (type === 'IEND') {
      break
    }
    offset += length + 12
  }

  const packed = inflateSync(Buffer.concat(idat))
  const stride = width * 4
  const pixels = Buffer.alloc(stride * height)
  let inputOffset = 0

  for (let y = 0; y < height; y += 1) {
    const filter = packed[inputOffset++]
    const rowOffset = y * stride
    for (let x = 0; x < stride; x += 1) {
      const raw = packed[inputOffset++]
      const left = x >= 4 ? pixels[rowOffset + x - 4] : 0
      const up = y ? pixels[rowOffset - stride + x] : 0
      const upLeft = y && x >= 4 ? pixels[rowOffset - stride + x - 4] : 0
      let predictor = 0
      if (filter === 1) predictor = left
      else if (filter === 2) predictor = up
      else if (filter === 3) predictor = Math.floor((left + up) / 2)
      else if (filter === 4) {
        const estimate = left + up - upLeft
        const pa = Math.abs(estimate - left)
        const pb = Math.abs(estimate - up)
        const pc = Math.abs(estimate - upLeft)
        predictor = pa <= pb && pa <= pc ? left : pb <= pc ? up : upLeft
      } else if (filter !== 0) {
        throw new Error(`Unsupported PNG filter: ${filter}`)
      }
      pixels[rowOffset + x] = (raw + predictor) & 255
    }
  }
  return { width, height, pixels }
}

const crcTable = Array.from({ length: 256 }, (_, value) => {
  let crc = value
  for (let bit = 0; bit < 8; bit += 1) crc = (crc & 1) ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1
  return crc >>> 0
})

function pngChunk(type, data) {
  const typeBuffer = Buffer.from(type)
  const output = Buffer.alloc(data.length + 12)
  output.writeUInt32BE(data.length, 0)
  typeBuffer.copy(output, 4)
  data.copy(output, 8)
  let crc = 0xffffffff
  for (const byte of Buffer.concat([typeBuffer, data])) crc = crcTable[(crc ^ byte) & 255] ^ (crc >>> 8)
  output.writeUInt32BE((crc ^ 0xffffffff) >>> 0, data.length + 8)
  return output
}

function encodePng({ width, height, pixels }) {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr.set([8, 6, 0, 0, 0], 8)
  const stride = width * 4
  const scanlines = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y += 1) pixels.copy(scanlines, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  return Buffer.concat([signature, pngChunk('IHDR', ihdr), pngChunk('IDAT', deflateSync(scanlines, { level: 9 })), pngChunk('IEND', Buffer.alloc(0))])
}

function createVariant(source, topColour, bottomColour, outputName) {
  const pixels = Buffer.from(source.pixels)
  for (let y = 0; y < source.height; y += 1) {
    for (let x = 0; x < source.width; x += 1) {
      const offset = (y * source.width + x) * 4
      if (pixels[offset + 3] < 64) {
        pixels[offset + 3] = 0
        continue
      }
      if (x < 230) continue
      const isTopText = y >= 70 && y < 145
      const isBottomText = x >= 575 && y >= 145 && y < 205
      if (!isTopText && !isBottomText) {
        pixels[offset + 3] = 0
        continue
      }
      const colour = isTopText ? topColour : bottomColour
      pixels[offset] = colour[0]
      pixels[offset + 1] = colour[1]
      pixels[offset + 2] = colour[2]
    }
  }
  const outputPath = new URL(`../public/images/logo/${outputName}`, import.meta.url)
  writeFileSync(outputPath, encodePng({ ...source, pixels }))
  console.log(`${outputName}: ${source.width}x${source.height}, RGBA`)
}

const source = decodePng(readFileSync(sourcePath))
createVariant(source, [255, 255, 255], [34, 211, 238], 'nanotechnology-logo-dark.png')
createVariant(source, [7, 23, 47], [18, 104, 232], 'nanotechnology-logo-light.png')
