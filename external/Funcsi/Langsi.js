import { reduci, swithi } from "./Itersi.js";
const qwertyEng = ("`qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?").split("");
const qwertyLat = ("ёйцукенгшщзхъфывапролджэячсмитьбю.ЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,").split("");
const transiRus = ("йцякенгхзъфвапролджэясмитьбюЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ").split("");
const transiEng = ("qwykenghzbfvaproldjaycmitbbuEQCYKENGHHZHBFAVAPROLDJAICCMITBBU").split("");
const transDict = {
    "donut": "донат",
    "ruby": "руби",
    "anna": "анна",
    "dark": "дарк",
    "hima": "хима",
    "kate": "кейт",
    "lucy": "люси",
    "lzzy": "лизи",
    "mini": "мини",
    "nika": "ника",
    "poly": "поля",
    "vika": "вика",
};
export function trimsi(text) {
    return text.split(" ").filter(chunk => chunk !== "").join(" ");
}
export function tittli(text) {
    return text && text[0].toUpperCase() + text.slice(1).toLowerCase() || "";
}
export function normli(text, delim = ". ") {
    return text.split(delim).map(subject => tittli(subject)).join(delim);
}
export function transi(text) {
    text = reduci(transDict, text, (acc, key, val) => (acc.indexOf(val) !== -1) ? acc.replaceAll(val, key) : acc);
    return text.split("").map(char => swithi(transiRus, transiEng, char)).join("");
}
export function latisi(text) {
    text = reduci(transDict, text, (acc, key, val) => (acc.indexOf(key) !== -1) ? acc.replaceAll(key, val) : acc);
    return text.split("").map(char => swithi(transiEng, transiRus, char)).join("");
}
export function qwerti(text) {
    return reduci(text, "", (text, _key, char) => text + swithi(qwertyLat, qwertyEng, char));
}
export function latini(text) {
    return reduci(text, "", (text, _key, char) => text + swithi(qwertyEng, qwertyLat, char));
}
export function inlati(char) {
    return transiRus.indexOf(char) !== -1;
}
export function inengi(char) {
    return transiEng.indexOf(char) !== -1;
}
export default class Langsi {
    static Inengi = inengi;
    static Inlati = inlati;
    static Latini = latini;
    static Latisi = latisi;
    static Normli = normli;
    static Qwerti = qwerti;
    static Tittli = tittli;
    static Transi = transi;
    static Trimsi = trimsi;
}
//# sourceMappingURL=Langsi.js.map