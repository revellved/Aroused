import { nrandi } from "./Randsi.js";
let hmemsiIndex = 0;
let hmemsiLasti;
export function amemsi(val) {
    hmemsiIndex = val[hmemsiIndex] === hmemsiLasti ? hmemsiIndex + 1 < val.length ? hmemsiIndex + 1 : 0 : 0;
    return hmemsiLasti = val[hmemsiIndex];
}
export function forchi(iterable, fn) {
    for (let key in iterable) {
        const val = iterable[key];
        fn(key, val, iterable);
    }
}
export function reduci(iterable, acc, fn) {
    forchi(iterable, (key, val) => acc = fn(acc, key, val));
    return acc;
}
export function hmapsi(iterable, fn) {
    return reduci(iterable, [], (acc, key, val) => acc.concat(fn(key, val)));
}
export function counti(iterable) {
    return reduci(iterable, {}, (res, _key, el) => { res[el] ||= 0; res[el]++; return res; });
}
export function combti(arr) {
    return reduci(arr, [], (res, _key, val) => {
        if (res.length === 0)
            return val;
        else
            return res.flatMap((resEl) => val.flatMap((valEl) => resEl + valEl));
    });
}
export function mmmaxi(iterable) {
    const max_key = null, max_val = null;
    return reduci(iterable, [max_key, max_val], (max, key, val) => max[1] < val ? [key, val] : max);
}
export function swithi(arrIndexes, arrElements, el) {
    return arrElements[arrIndexes.indexOf(el)] || el;
}
export function inceri(source, incert, pos1, pos2 = -1) {
    pos2 = (pos2 === -1) ? pos1 : pos2;
    return source.slice(0, pos1) + incert + source.slice(pos2, source.length);
}
export function fjoini(arr, delim = " ", prefix = "") {
    return arr.map(el => prefix + ((typeof el === "function") ? el().toString() : el.toString())).join(delim);
}
export function mrandi(arr, count = -1) {
    if (count >= arr.length || count < 0)
        count = arr.length;
    let i;
    let resultArr = [];
    arr = arr.concat();
    while (resultArr.length < count) {
        do
            i = nrandi(0, arr.length);
        while (arr[i] === undefined);
        resultArr.push(arr[i]);
        delete arr[i];
    }
    return resultArr;
}
export default class Itersi {
    static Amemsi = amemsi;
    static Combti = combti;
    static Counti = counti;
    static Fjoini = fjoini;
    static Forchi = forchi;
    static Inceri = inceri;
    static Mmmaxi = mmmaxi;
    static Mrandi = mrandi;
    static Reduci = reduci;
    static Swithi = swithi;
}
//# sourceMappingURL=Itersi.js.map