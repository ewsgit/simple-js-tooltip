class TooltipData {
  element: null | HTMLElement = null;
  position:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right" = "top";
  overflowScreen: boolean = false;
  caret: boolean = true;
  color: string = "#335577";
  border: string = "#234567";
  attach: "vertical" | "horizontal" = "horizontal";
  content: string | null = null;
  followMouse: boolean = false;
}

class SimpleTooltip extends TooltipData {
  slideModifier: number = 0;
  tooltip: HTMLDivElement;
  constructor(data: TooltipData) {
    super();
    this.element = data?.element || null;
    this.position = data?.position || "top";
    this.overflowScreen = data?.overflowScreen || false;
    this.caret = data?.caret || true;
    this.color = data?.color || "#335577";
    this.border = data?.border || "#234567";
    this.attach = data?.attach || "horizontal";
    this.content =
      data?.content ||
      "<p>Simple-Js-Tooltips should always contain content</p>";
    this.followMouse = data?.followMouse || false;
    this.tooltip = document.createElement("div") as HTMLDivElement;
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
        this.tooltip.style.transform = `translate(${e.x + 17}px, ${
          e.y + 17
        }px)`;
      }
      this.tooltip.style.display = "block";
    };
    this.element.onmouseenter = e => {
      if (!this.element) return
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
