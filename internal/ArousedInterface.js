import ArousedFunctions from "./ArousedFunctions.js";
import SlavaRightSyntax from "./SlavaRightSyntax.js";
import { forchi, reduci } from "../external/Funcsi/Itersi.js";
import { inengi, latisi, trimsi } from "../external/Funcsi/Langsi.js";
export default class ArousedInterface extends ArousedFunctions {
    static Hey() { return new ArousedInterface; }
    SetCaret() {
        const sel = window.getSelection();
        const prevCountSyms = Number(sel?.focusNode?.parentElement?.getAttribute("prevCountSyms") || 0);
        this.setCursor(prevCountSyms + (sel?.focusOffset || 0));
        sel?.removeAllRanges();
    }
    Render() {
        if (this.TextChange)
            this.TextChange = false;
        else
            return;
        if (!this.HistoryMove)
            this.PushHistory();
        this.HistoryMove = false;
        if (this.Static.SAVETEXT_BACKUP) {
            localStorage.setItem(this.Static.LS_TEXT, this.TextContent);
            localStorage.setItem(this.Static.LS_CURS, String(this.Cursor));
        }
        window.scrollTo({ top: screen.height * 0.05 * this.Lines.length - screen.height / 2 });
        this.ArousedScreen.setAttribute(this.Static.ATTRS_EMPTY, `${!this.TextContent}`);
        this.ArousedScreen.innerHTML = this.getDevMsgs() + this.parseContent(this.Funcsi.Inceri(this.TextContent || this.Placeholder(), this.Static.CURSOR_CODE, this.Cursor).replaceAll("<", "&lt;"), !!this.TextContent).replace(this.Static.CURSOR_CODE, this.Static.CURSOR_HTAG);
    }
    parseContent(text, spellcheck = true) {
        text = text.replaceAll("\n", "\\n");
        if (text.indexOf(":%") !== -1)
            forchi(this.EXPRESION_DICT, (key, fn) => {
                if (text.indexOf(":%" + key) !== -1)
                    for (let values of text.matchAll(new RegExp(":%" + key + "\\((.*?)\\)%", 'g')))
                        if (values[1])
                            text = text.replaceAll(`:%${key}(${values[1]})%`, fn(values[1]));
            });
        text = text.replaceAll("\\n", "\n");
        this.ArousedScreen.spellcheck = spellcheck;
        return "\n" + text.split("\n").map((line, lineI, lines) => {
            const activeLine = line.indexOf(this.Static.CURSOR_CODE) !== -1;
            if (activeLine)
                if (line.startsWith(this.Static.OPTS_SYMBOL))
                    return `<p spellcheck="false">${this.Static.OPTS_SYMBOL + this.setOptions(line.slice(this.Static.OPTS_SYMLEN))}</p>` +
                        (lines.length === 1 ? this.parseContent("\n" + this.Placeholder(false), false) : "");
                else if (this.IsSparksLine(line))
                    return this.callSparks(line.slice(this.Static.SPARKS_LEN));
                else
                    this.Static.SPARKS_MSG = "";
            else if (line.startsWith(this.Static.COMMAND_SPEC))
                for (let cmd in this.COMMAND_DICT) {
                    cmd = line.slice(this.Static.COMMAND_SPEC_LEN, cmd.length + this.Static.COMMAND_SPEC_LEN);
                    if (this.COMMAND_DICT[cmd])
                        line = this.COMMAND_DICT[cmd](line.slice(this.Static.COMMAND_SPEC_LEN) + " ");
                }
            return SlavaRightSyntax.Formatter(line, lineI, lines);
        }).join("\n");
    }
    callSparks(line) {
        if (!this.Static.SPARKS_WORK)
            return `<span class="sparks" id="Sparks">👩‍🎓 Упс. Я пока ещё не готова, приходи позже.</span>`;
        this.Static.SPARKS_MSG ||= this.Funcsi.Erandi(this.Static.SPARKS_MSGS);
        this.Sparks.Help(this.Funcsi.Trimsi(line.replace(this.Static.CURSOR_CODE, "")));
        return `<p class="sparks__input"> (Спаркси): ${this.Static.SPARKS_MSG} «${line}»</p>
            \n\n<span class="sparks" id="Sparks"></span>`;
    }
    setOptions(text) {
        if (trimsi(text) === "")
            text += "А я смотрю ты любазнательный. У нас есть пара опций для тебя. ";
        return " " + text.toLowerCase().split(this.Static.OPTS_DELIMS).map((chunk, i, chunks) => {
            const lst = chunks[i + 1] === undefined;
            const opt = this.Funcsi.Trimsi(chunk.replace(this.Static.CURSOR_CODE, "")).split(":");
            let key = this.Funcsi.Transi(opt[0]?.trim() || "");
            let val = opt[1]?.trim() || "";
            let tips = opt.length < 2 && lst
                ? reduci(this.OPT_DICT, [], (tips, k) => k.startsWith(key) ? tips.concat(k) : tips)
                : this.OPT_DICT[key] ? this.OPT_DICT[key](val) : [];
            if (!lst || tips.length === 0)
                return chunk;
            if (!inengi(chunk[0])) {
                tips = tips.map((tip) => latisi(tip));
                key = latisi(key);
                val = latisi(val);
            }
            const now = (tips, text, postfix) => ((tips.filter((tip) => tip.startsWith(text))[0] || "") + postfix).slice(text.length);
            const tip = opt.length < 2 ? now(tips, key, ":") : now(tips, val, ";");
            return chunk + `<span class="tip">` + (tips.length === 1 ? tip : `${tip} [${tips.join(", ")}]`) + `</span>`;
        }).join(this.Static.OPTS_DELIMS);
    }
    COMMAND_DICT = {
        "startgame": () => "Ахахаха, вот умора... Какие игры? Пиши " + this.Doctor.GiveMeLine().toLowerCase(),
        "cleanmdev": () => { this.Static.CleanUpDev(); return ""; },
        "cleanmall": () => { this.Static.CleanUpAll(); return ""; },
        "newdevmsg": (msg) => { this.Static.DevMsg.push(msg); return ""; },
    };
    OPT_DICT = {
        "tittle": (val) => { this.setTitle(val); return []; },
        "theme": (val) => {
            document.body.className = this.Funcsi.Transi(val.toLowerCase());
            return this.Static.THEMES;
        }
    };
    EXPRESION_DICT = {
        "en": (text) => `<span lang="en">${text}</span>`,
        "ns": (text) => `<span spellcheck="false">${text}</span>`
    };
}
//# sourceMappingURL=ArousedInterface.js.map