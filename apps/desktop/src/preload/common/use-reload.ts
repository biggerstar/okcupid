import { whenDocumentElementStart } from "@/utils/dom"

export function useReload() {
  const reloadButton = document.createElement('button')
  reloadButton.style.position = 'fixed'
  reloadButton.style.top = '0'
  reloadButton.style.right = '0'
  reloadButton.textContent = '刷新'
  reloadButton.style.width = '66px'
  reloadButton.style.height = '26px'
  reloadButton.style.zIndex = '99999999'
  reloadButton.style.borderRadius = '2px'
  reloadButton.style.backgroundColor = '#588698'
  reloadButton.style.color = 'white'
  reloadButton.style.cursor = 'pointer'
  reloadButton.style.border = 'none'

  reloadButton.addEventListener('click', () => {
    console.log("🚀 ~ reloadButton.addEventListener ~ click:")
    location.reload()
  }, {
    passive: true,
    capture: true,
  })
  window.addEventListener("DOMContentLoaded", () => {
    if (location.href.includes('https://www.tiktok.com')) {
      whenDocumentElementStart(() => [!!document.querySelector('#app')], 20000)
      .then(() => {
        const appContainer = document.querySelector('#app')
        document.body.appendChild(reloadButton)
      })
    }else {
      document.body.appendChild(reloadButton)
    }
  })
}
