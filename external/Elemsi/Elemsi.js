export const DOC = document.documentElement;
export const DIV = document.createElement("div");
export const ANC = document.createElement("a");
export function el(tag = "div") {
    return document.createElement(tag);
}
export function id(id) {
    return document.getElementById(id) || DIV;
}
export function getAttr(attr, elem = DOC) {
    return elem.getAttribute(attr) || "";
}
export function setAttr(attr, val, elem = DOC) {
    elem.setAttribute(attr, val);
    return getAttr(attr);
}
export function getTheme() {
    return getAttr('data-theme') || "";
}
export function ToggleTheme() {
    return setAttr('data-theme', getTheme() === "dark" ? "light" : "dark");
}
export default class Elemsi {
    static DOC = DOC;
    static DIV = DIV;
    static ANC = ANC;
    static El = el;
    static Id = id;
    static GetAttr = getAttr;
    static SetAttr = setAttr;
    static GetTheme = getTheme;
    static ToggleTheme = ToggleTheme;
}
//# sourceMappingURL=Elemsi.js.map