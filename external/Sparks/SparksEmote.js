import SparksDicts from "./SparksDicts.js";
import { erandi } from "../Funcsi/Randsi.js";
import { counti, mmmaxi } from "../Funcsi/Itersi.js";
export default class SparksEmote {
    static Hey() { return new SparksEmote; }
    static GetEmotion(text) {
        let emotes = [];
        for (let textBlock in SparksDicts.Emotes)
            if (text.toLowerCase().indexOf(textBlock) >= 0)
                emotes = emotes.concat(SparksDicts.Emotes[textBlock]);
        const max_emote = mmmaxi(counti(emotes));
        const emote = erandi([erandi(emotes), max_emote?.length && max_emote[0]]);
        return emote || "NOT_UNDESTAND";
    }
}
//# sourceMappingURL=SparksEmote.js.map