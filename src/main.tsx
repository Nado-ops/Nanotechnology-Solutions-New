import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { company } from './config'

function SyncWhatsAppNumber() {
  useEffect(() => {
    const sync = () => {
      document.querySelectorAll<HTMLAnchorElement>(`a[href="${company.whatsappUrl}"]`).forEach(link => {
        const number = link.querySelector<HTMLElement>('b')
        if (number) number.textContent = company.whatsapp
      })
    }

    sync()
    const observer = new MutationObserver(sync)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SyncWhatsAppNumber />
    <App />
  </StrictMode>,
)
