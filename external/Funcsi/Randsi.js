export function nrandi(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
export function erandi(arr, start = 0, end = -1) {
    return (arr) ? arr[nrandi(start, end >= arr.length || end === -1 ? arr.length - 1 : end)] : null;
}
export default class Randsi {
    static Erandi = erandi;
    static Nrandi = nrandi;
}
//# sourceMappingURL=Randsi.js.map