import { whenDocumentElementStart } from "@/utils/dom"

export function useReload() {
  const reloadButton = document.createElement('button')
  reloadButton.style.position = 'fixed'
  reloadButton.style.top = '0'
  reloadButton.style.left = '0'
  reloadButton.textContent = '刷新'
  reloadButton.style.width = '70px'
  reloadButton.style.height = '30px'
  reloadButton.style.zIndex = '99999999'
  reloadButton.style.borderRadius = '2px'
  reloadButton.style.backgroundColor = '#588698'
  reloadButton.style.color = 'white'
  reloadButton.style.cursor = 'pointer'

  window.addEventListener("DOMContentLoaded", () => {
    whenDocumentElementStart(() => [!!document.querySelector('#app')], 20000)
      .then(() => {
        console.log("🚀 ~ .then ~ reloadButton:", reloadButton)
        const appContainer = document.querySelector('#app')
        appContainer?.appendChild(reloadButton)
      })
  })
}
