import SparksDicts from "./SparksDicts.js";
import SparksEmote from "./SparksEmote.js";
import { erandi } from "../Funcsi/Randsi.js";
const SparksText = ["Хм", "Хмм", "Ааа!", "Неа..", "Что?", "Не, не то", "Ща... ща", "Агаа!", "Ух ты!", "ай", "Секунду", "Я уже близко"];
const SparksFace = ["👩", "💁", "🧝", "👩‍🌾", "👩‍🍳", "👩‍🏫", "🦸‍♀️", "👰‍♀️", "👰", "🙋‍♀️"];
export default class Sparks {
    static Hey() { return new Sparks; }
    static ideaMessages = "";
    static ideaInterval;
    static ideaTimeout1;
    static StopTimers() {
        clearInterval(Sparks.ideaInterval);
        clearTimeout(Sparks.ideaTimeout1);
    }
    static parseSense(text) {
        if (text === "")
            return "";
        const emote = SparksEmote.GetEmotion(text);
        return SparksDicts.EmotesAnswer[emote](text);
    }
    static Idea(msg) {
        Sparks.StopTimers();
        Sparks.ideaMessages = Sparks.parseSense(msg);
        Sparks.Think(Sparks.ideaMessages);
        Sparks.ideaMessages = "";
    }
    static Think(msg) {
        const SparksElem = document.getElementById("Sparks") || document.createElement("span");
        SparksElem.innerText = (msg === "") ? "" : erandi(SparksFace) + " " + (Sparks.ideaMessages || erandi(SparksText));
    }
    static Help(msg) {
        Sparks.StopTimers();
        Sparks.ideaTimeout1 = setTimeout(Sparks.Idea, 1000, msg);
        Sparks.ideaInterval = setInterval(Sparks.Think, 500, msg);
        return true;
    }
}
//# sourceMappingURL=Sparks.js.map