class TooltipData {
  element: HTMLElement;
  position:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  overflowScreen: boolean;
  caret: boolean;
  color: string;
  border: string;
  attach: "vertical" | "horizontal";
  content: string;
}

export default class SimpleTooltip extends TooltipData {
  constructor({ data: TooltipData }) {
    super();
    this.element = TooltipData.element;
    this.position = TooltipData.position;
    this.overflowScreen = TooltipData.overflowScreen;
    this.caret = TooltipData.caret;
    this.color = TooltipData.color;
    this.border = TooltipData.border;
    this.attach = TooltipData.attach;
    this.content = TooltipData.content || "<p>Simple-Js-Tooltips should always contain content</p>";
  }
}
