
export function useAboutBlankPage() {
  window.addEventListener("load", () => {
    const tooltip = document.createElement('div');
    tooltip.style.position = 'fixed';
    tooltip.style.bottom = '100px';
    tooltip.style.left = '20px';
    tooltip.style.zIndex = '9999';
    tooltip.style.backgroundColor = '#fff';
    tooltip.style.padding = '5px 10px';
    tooltip.style.border = '1px solid #ccc';
    tooltip.style.borderRadius = '4px';
    tooltip.style.userSelect = 'none';
    tooltip.innerHTML = '<-- 点击要采集的网站';
    document.body.appendChild(tooltip);
  })
}
