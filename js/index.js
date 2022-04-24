"use strict";
class TooltipData {
    constructor() {
        this.element = null;
        this.position = "top";
        this.overflowScreen = false;
        this.caret = true;
        this.color = "#335577";
        this.border = "#234567";
        this.attach = "horizontal";
        this.content = null;
        this.followMouse = false;
    }
}
class SimpleTooltip extends TooltipData {
    constructor(data) {
        super();
        this.slideModifier = 0;
        this.element = (data === null || data === void 0 ? void 0 : data.element) || null;
        this.position = (data === null || data === void 0 ? void 0 : data.position) || "top";
        this.overflowScreen = (data === null || data === void 0 ? void 0 : data.overflowScreen) || false;
        this.caret = (data === null || data === void 0 ? void 0 : data.caret) || true;
        this.color = (data === null || data === void 0 ? void 0 : data.color) || "#335577";
        this.border = (data === null || data === void 0 ? void 0 : data.border) || "#234567";
        this.attach = (data === null || data === void 0 ? void 0 : data.attach) || "horizontal";
        this.content =
            (data === null || data === void 0 ? void 0 : data.content) ||
                "<p>Simple-Js-Tooltips should always contain content</p>";
        this.followMouse = (data === null || data === void 0 ? void 0 : data.followMouse) || false;
        this.tooltip = document.createElement("div");
        if (!this.element) {
            console.warn("Simple-Js-Tooltips: No element provided");
            return;
        }
        this.tooltip.style.position = "fixed";
        this.tooltip.style.top = "0px";
        this.tooltip.style.left = "0px";
        this.tooltip.style.display = "none";
        this.tooltip.style.zIndex = "9999";
        this.tooltip.style.backgroundColor = this.color;
        this.tooltip.style.border = `0.25rem solid ${this.border}`;
        this.tooltip.style.padding = "0.5rem";
        this.tooltip.style.borderRadius = "0.5rem";
        this.tooltip.style.pointerEvents = "none";
        this.tooltip.innerHTML = this.content;
        this.element.onmousemove = e => {
            if (this.followMouse) {
                this.tooltip.style.transform = `translate(${e.x + 17}px, ${e.y + 17}px)`;
            }
            this.tooltip.style.display = "block";
        };
        this.element.onmouseenter = e => {
            if (!this.element)
                return;
            let x = this.element.clientWidth;
            let y = this.element.clientHeight;
            this.tooltip.style.transform = `translate(${x}px, ${y}px)`;
        };
        this.element.onmouseout = () => {
            this.tooltip.style.display = "none";
        };
        this.element.appendChild(this.tooltip);
    }
}
