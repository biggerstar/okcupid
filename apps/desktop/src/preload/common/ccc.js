var selectorAddHostButton = '[data-id="add-host-btn"]';
var selectorHostInput = '[data-testid="inviteHostTextArea"]';
var selectorSubmitButton = '[data-id="invite-host-next"]';
var selectorBackButton = '[data-id="invite-host-back"]';
var selectorCaptchaImg = '.captcha_verify_container';
var selectorCaptchaImg2 = '.captcha-verify-container';
var selectorDragIcon = 'div.secsdk-captcha-drag-icon';//旧版滑块 64.05x40
var selectorDragIcon2 = 'div[draggable="true"]'; //新版滑块 64x40
var selectorDragSlide = 'div.captcha_verify_slide--slidebar'; //旧版滑槽 340x44
var selectorDragSlide2 = 'div.cap-bg-UISheetGrouped3'; //新版滑槽 348x40

var captchaDragIcon;
var dragSlide;
var v1;
var dragStartEvent = new DragEvent('dragstart', {
    bubbles: true,
    cancelable: true,
    dataTransfer: new DataTransfer()
});

/**
 * See [Modify React Component's State using jQuery/Plain Javascript from Chrome Extension](https://stackoverflow.com/q/41166005)
 * See https://github.com/facebook/react/issues/11488#issuecomment-347775628
 * See [How to programmatically fill input elements built with React?](https://stackoverflow.com/q/40894637)
 * See https://github.com/facebook/react/issues/10135#issuecomment-401496776
 *
 * @param {HTMLInputElement} input
 * @param {string} value
 */
function setReactInputValue(input, value) {
    const previousValue = input.value;
    // eslint-disable-next-line no-param-reassign
    input.value = value;
    const tracker = input._valueTracker;
    if (tracker) {
        tracker.setValue(previousValue);
    }

    // 'change' instead of 'input', see https://github.com/facebook/react/issues/11488#issuecomment-381590324
    input.dispatchEvent(new Event('change', { bubbles: true }));
}

function addHost() {
    var button = document.querySelector(selectorAddHostButton);
    button.click()
}

function fillHost(hosts) {
    var hostTextArea = document.querySelector(selectorHostInput);
    setReactInputValue(hostTextArea, hosts)
}

function submitHost() {
    var button = document.querySelector(selectorSubmitButton);
    button.click()
}

function clickBack() {
    var button = document.querySelector(selectorBackButton);
    button.click()
}
function notifyAssist(name, data, hasAddNode, hasFillNode, hasSubmitNode, hasBackNode) {
    if (window.chrome != null && window.chrome.webview != null) {
        var notify = {
            'name': name,
            'data': data,
            'hostInputRect': hostInputRect
        };
        window.chrome.webview.postMessage(notify);
    } else if (window.external != null) {
        window.external.notifyAssist(name, data);
    }

    //consoleLog('notifyAssist:', name);
}

function getDivBoundingClientRect(selector) {
    var rect = document.querySelector(selector).getBoundingClientRect();
    return JSON.stringify(rect);
}

function onDragSource(event) {
    //console.log('got:', event.type, event.target, event);
};

function onDragTarget(event) {
    //console.log('target got:', event.type, event);
};

function onMouseEvent(event) {
    //console.log('got:', event.type, event.target, event);
};

function queryDragElements() {
    captchaDragIcon = document.querySelector(selectorDragIcon2);
    v1 = false;
    if (captchaDragIcon == null) {
        captchaDragIcon = document.querySelector(selectorDragIcon);
        v1 = true;
    }

    dragSlide = document.querySelector(selectorDragSlide2);
    if (dragSlide == null) {
        dragSlide = document.querySelector(selectorDragSlide);
    }
}

function hookDrag() {
    queryDragElements();
    if (captchaDragIcon != null) {
        captchaDragIcon.addEventListener("dragstart", onDragSource);
        captchaDragIcon.addEventListener("drag", onDragSource);
        captchaDragIcon.addEventListener("dragend", onDragSource);

        captchaDragIcon.addEventListener("dragenter", onDragSource);
        captchaDragIcon.addEventListener("dragleave", onDragSource);
        captchaDragIcon.addEventListener("dragover", onDragSource);
        captchaDragIcon.addEventListener("drop", onDragSource);

        captchaDragIcon.addEventListener("mousedown", onMouseEvent);
        captchaDragIcon.addEventListener("mousemove", onMouseEvent);
        captchaDragIcon.addEventListener("mouseup", onMouseEvent);
    }
}

function pressDragIcon() {
    queryDragElements();
    if (captchaDragIcon != null) {
        let rect = captchaDragIcon.getBoundingClientRect();
        let x = (rect.left + rect.right) / 2;
        let y = (rect.top + rect.bottom) / 2;
        if (v1) {
            captchaDragIcon.dispatchEvent(new MouseEvent('mousedown', { view: window, bubbles: true, cancelable: true, clientX: x, clientY: y }));
        } else {
            dragStartEvent = new DragEvent('dragstart', {
                bubbles: true,
                cancelable: true,
                clientX: x, clientY: y,
                dataTransfer: new DataTransfer()
            });
            captchaDragIcon.dispatchEvent(dragStartEvent);
        }

        //console.log('pressDragIcon', v1, captchaDragIcon);
    }
}

function moveDragIcon(xStr, yStr) {
    queryDragElements();
    if (captchaDragIcon != null) {
        var x = parseFloat(xStr);
        var y = parseFloat(yStr);
        if (v1) {
            var mouseEvent = new MouseEvent('mousemove', { view: window, bubbles: true, cancelable: true, clientX: x, clientY: y })
            captchaDragIcon.dispatchEvent(mouseEvent);
        } else {
            const dragEvent = new DragEvent('drag', {
                bubbles: true,
                cancelable: true,
                clientX: x, clientY: y,
                dataTransfer: dragStartEvent.dataTransfer
            });
            captchaDragIcon.dispatchEvent(dragEvent);

            if (dragSlide != null) {
                const dragEvent = new DragEvent('dragover', {
                    bubbles: true,
                    cancelable: true,
                    dataTransfer: dragStartEvent.dataTransfer
                });
                dragSlide.dispatchEvent(dragEvent);
            }
        }

        //console.log('moveDragIcon', v1, xStr, yStr, captchaDragIcon);
    }
}

function releaseDragIcon(xStr, yStr) {
    queryDragElements();
    var x = parseFloat(xStr);
    var y = parseFloat(yStr);
    if (captchaDragIcon != null) {
        if (v1) {
            captchaDragIcon.dispatchEvent(new MouseEvent('mouseup', { view: window, bubbles: true, cancelable: true, clientX: x, clientY: y }));
        } else {
            const dragEndEvent = new DragEvent('dragend', {
                bubbles: true,
                cancelable: true,
                clientX: x, clientY: y,
                dataTransfer: dragStartEvent.dataTransfer
            });
            captchaDragIcon.dispatchEvent(dragEndEvent);
        }

        //console.log('releaseDragIcon', v1, captchaDragIcon);
    }
}

(function () {
    const config = { characterData: true, subtree: true, childList: true };
    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
        //console.log('text change ');
        var addNode = document.querySelector(selectorAddHostButton);
        var fillNode = document.querySelector(selectorHostInput);
        var submitNode = document.querySelector(selectorSubmitButton);
        var backNode = document.querySelector(selectorBackButton);
        var captchaNode = document.querySelector(selectorCaptchaImg);
        var captchaNode2 = document.querySelector(selectorCaptchaImg2);
        var captchaDragIcon2 = document.querySelector(selectorDragIcon)

        window.chrome.webview.postMessage({
            'name': 'documentChange',
            'data': document.body?.innerText,
            'hasAddNode': addNode != null,
            'hasFillNode': fillNode != null,
            'hasSubmitNode': submitNode != null,
            'hasBackNode': backNode != null,
            'hasCaptchaNode': captchaNode != null || captchaNode2 != null || captchaDragIcon2 != null,
        });

    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(document, config)

    //receive commands from wpf
    window.chrome.webview.addEventListener('message', event => {
        //console.log("Received command:", event.data);
        window[event.data.functionName](event.data.param1, event.data.param2);
    });
})();


