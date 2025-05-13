import { injectFingerPrint } from "@marketing/fingerprint-client"

const log = console.log
console.clear = () => void 0

function isFrameElement(node: Node) {
  if (!node || !node?.['tagName']) return false
  return ['IFRAME', 'OBJECT', 'EMBED'].includes((node as Element).tagName.toUpperCase())
}

function canInjectIframeFingerPrintEnv(node: Element) {
  const _isFrameElement = isFrameElement(node)
  if (!_isFrameElement) return false
  if (node['__md_fp_env__']) return
  node['__md_fp_env__'] = true
  return true
}

function domParser(targetWindow: WindowProxy | any, html: string) {
  return new targetWindow.DOMParser().parseFromString(html, "text/html")
}

function resetIframeSandbox(node: Element) {
  node.setAttribute('sandbox', 'allow-scripts allow-same-origin')
  const srcdoc = node.getAttribute('srcdoc')
  if (srcdoc) {
    node.setAttribute('modi', '修改过的 srcdoc')
    // node.setAttribute('src', 'about:blank')
    node.setAttribute('data-srcdoc-html', node.getAttribute('srcdoc'))
    node.removeAttribute('srcdoc')
  }
}

function patchDocumentElement(fromDom: Document, targetDom: Document) {
  Array.from(targetDom.head?.childNodes || []).forEach((node: Element) => node.remove())
  Array.from(targetDom.body?.childNodes || []).forEach((node: Element) => node.remove())
  Array.from(fromDom.head.childNodes).forEach((node: Element) => targetDom.head?.append(node))
  Array.from(fromDom.body.childNodes).forEach((node: Element) => targetDom.body?.append(node))
}

function overrideRootDomByHtml(fingerprintMeta, html: string, targetDom: Document) {
  const dom = domParser(targetDom.defaultView, html)
  const iframeNodes = autoCollectIframeNodes(dom) as HTMLIFrameElement[]
  iframeNodes.forEach((node) => resetIframeSandbox(node));
  patchDocumentElement(dom, targetDom)
  iframeNodes.forEach(node => injectIframeFingerPrint(fingerprintMeta, node as any))
}

function autoCollectIframeNodes(node: Node) {
  const arr: Node[] = []
  // 如果节点本身就是 iframe，直接添加
  if (isFrameElement(node)) {
    arr.push(node);
  }
  // 这里使用  Node.ELEMENT_NODE 等方式需要枚举很多节点类型，直接判断是否能查找节点就行了
  if (node?.['querySelectorAll']) {
    // 查找节点内的所有 iframe 元素
    const iframes = (node as Element).querySelectorAll('iframe');
    iframes.forEach(iframe => arr.push(iframe));
  }
  return arr
}

function hookOther(fingerprintMeta, targetWindow: WindowProxy) {
  targetWindow.document.writeln = targetWindow.document.write = function (...args) {
    overrideRootDomByHtml(fingerprintMeta, args.join(''), targetWindow.document)
  }
}

function hookIframe(fingerprintMeta, targetWindow: WindowProxy & Record<any, any>) {
  if (!targetWindow) {
    throw new Error('targetWindow 必须传入')
  }

  const apply = function (target: any, thisArg: any, args: any[]) {
    const appInjectIFrameElement: HTMLIFrameElement[] = args
      .reduce((arr: Node[], node: Node) => arr.concat(autoCollectIframeNodes(node)), [])

    appInjectIFrameElement.forEach((node) => resetIframeSandbox(node));
    const res = target.apply(thisArg, args);
    appInjectIFrameElement.forEach((node) => injectIframeFingerPrint(fingerprintMeta, node));
    return res;
  }

  const Node = targetWindow['Node']
  const Element = targetWindow['Element']

  Node.prototype.appendChild = new targetWindow.Proxy(Node.prototype.appendChild, { apply })
  Node.prototype.insertBefore = new targetWindow.Proxy(Node.prototype.insertBefore, { apply })
  Node.prototype.replaceChild = new targetWindow.Proxy(Node.prototype.replaceChild, { apply })

  Element.prototype.append = new targetWindow.Proxy(Element.prototype.append, { apply })
  Element.prototype.prepend = new targetWindow.Proxy(Element.prototype.prepend, { apply })
  Element.prototype.after = new targetWindow.Proxy(Element.prototype.after, { apply })
  Element.prototype.replaceWith = new targetWindow.Proxy(Element.prototype.replaceWith, { apply })
  Element.prototype.replaceChildren = new targetWindow.Proxy(Element.prototype.replaceChildren, { apply })
}

function hookIframeObserver(fingerprintMeta, targetWindow: WindowProxy & Record<any, any>) {
  const callback = function (mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const addedNodes = mutation.addedNodes as unknown as HTMLElement[]
        // 检查是否有新节点被添加
        addedNodes.forEach((node: HTMLIFrameElement) => {
          if (!canInjectIframeFingerPrintEnv(node)) return
          injectIframeFingerPrint(fingerprintMeta, node as any)
        });
      }
    }
  } as MutationCallback;

  const observer: MutationObserver = new targetWindow.MutationObserver(callback);
  observer.observe(targetWindow.document.documentElement, {
    childList: true,
    subtree: true
  });
}

function injectIframeFingerPrint(fingerprintMeta, iframeEl: HTMLIFrameElement) {
  const srcHtml = iframeEl.getAttribute('data-srcdoc-html')

  const handleLoad = () => {
    if (!iframeEl.contentWindow) return

    if (srcHtml) {
      const dom = domParser(iframeEl.contentWindow, srcHtml)
      setupFingerPrintEnvironment(fingerprintMeta, iframeEl.contentWindow, iframeEl)
      patchDocumentElement(dom, iframeEl.contentWindow.document)
    } else {
      setupFingerPrintEnvironment(fingerprintMeta, iframeEl.contentWindow)
    }

    iframeEl.removeEventListener('load', handleLoad, { capture: true })
  }

  if (iframeEl.contentWindow) {
    if (srcHtml) {
      iframeEl.addEventListener('load', handleLoad, { capture: true })
    } else {
      setupFingerPrintEnvironment(fingerprintMeta, iframeEl.contentWindow)
    }
  } else {
    iframeEl.addEventListener('load', handleLoad, { capture: true })
  }
}

export const setupFingerPrintEnvironment = (fingerprintMeta, targetWindow: Window, iframeEl?: HTMLIFrameElement) => {
  if (!targetWindow) {
    throw new Error('targetWindow 必须传入')
  }
  try {
    targetWindow.history
  } catch (e) {
    // console.error("🚀 ~ setupFingerPrintEnvironment ~ e:", e, targetWindow.location) 
    // 该 Iframe 是跨域 Iframe, 直接忽略， 指纹注入行为将由另一窗口(frame)的 content-script 控制
    return
  }

  hookIframe(fingerprintMeta, targetWindow)
  hookOther(fingerprintMeta, targetWindow)
  // hookIframeObserver(fingerprintMeta, targetWindow)
  injectFingerPrint(fingerprintMeta, targetWindow)

  targetWindow['aaa'] = 1111111122
  console.log("🚀 ~ setupFingerPrintEnvironment ~ targetWindow:", targetWindow, iframeEl)
}
