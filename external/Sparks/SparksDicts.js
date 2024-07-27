import { combti } from "../Funcsi/Itersi.js";
import { erandi } from "../Funcsi/Randsi.js";
function EmotesGen(listChunk, listEmotion) {
    for (let chunk of listChunk) {
        EmotesDict[chunk] ||= [];
        EmotesDict[chunk] = EmotesDict[chunk].concat(listEmotion);
    }
}
export const EmotesAnswerDict = {
    "NOT_UNDESTAND": (msg) => erandi([
        `«${msg}» — чтобы это могло значить`,
        `Я не понимаю тебя`, `Что ты хочешь сказать?`
    ]),
    "AROUSED": () => erandi([
        `Ты сегодня слишком Aroused`,
        `Мне кажется ты первозбуждён, сходи отдохни`
    ]),
    "QESTION": (msg) => erandi([
        `«${msg}» — что за вопросы?`,
        `Ты меня спрашиваешь?`, `Думаю, ответ: «гладиуос»!`,
        `Я не знаю`, `Дай подумать... А я ведь уже подумала. Я не знаю`,
        `Я хз`, ``
    ]),
    "HELLO": (msg) => erandi([
        `О! Приветики`, `Дароу`, `Как сам?`, msg, `Хаю-хай`
    ]),
    "ANGRY": (msg) => erandi([
        "Ты чё охренел", "Эх не была бы я компьютерной программой, таких бы люлей тебе вставила",
        "Ты мне не нравишься", "Сам такой", `А может «${msg}»`
    ]),
    "GOOD": () => erandi([
        "Спасибо"
    ])
};
export const EmotesDict = {
    "?": ["QESTION", "QESTION", "QESTION"],
    "как насчёт": ["QESTION"],
    "хочу тебя": ["AROUSED"],
    "я": ["NARCIS"],
    "хочу": ["NARCIS"],
};
EmotesGen(combti([
    ["ты ", ""], ["глупая", "тупая", "плохая", "сучка", "блядь", "сука"]
]), ["ANGRY", "ANGRY"]);
EmotesGen(combti([
    ["ты ", ""], ["молодец", "хорошая"]
]), ["GOOD", "GOOD"]);
EmotesGen([
    "привет", "здарова", "как сама"
], ["HELLO"]);
export default class SparksDicts {
    static EmotesAnswer = EmotesAnswerDict;
    static Emotes = EmotesDict;
}
//# sourceMappingURL=SparksDicts.js.map