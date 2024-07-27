import ArousedConfigure from "./ArousedConfigure.js";
export default class ArousedFunctions extends ArousedConfigure {
    prettyDevs = () => this.Funcsi.Fjoini(this.Static.DevMsg.filter((msg) => msg), `</p>`, `<p class="dev-msg" spellcheck="false"> > DEV: `);
    getDevMsgs = () => this.Static.DEV ? '' + this.prettyDevs() : "";
    Lines = () => this.TextContent.split("\n");
    PrevText = () => this.TextContent.slice(this.CurMin, this.Cursor).split('').reverse();
    StartLine = () => this.PrevText().indexOf('\n');
    IsSparksLine = (line) => line.toLowerCase().startsWith(this.Static.SPARKS_CMD);
    async addCursor(val = 1) { this.setCursor(this.Cursor + val); }
    async subCursor(val = 1) { this.setCursor(this.Cursor - val); }
    async setCursor(val) {
        console.log("val before:", val, this.TextContent.length);
        val = Math.max(this.CurMin, Math.min(val, this.TextContent.length));
        console.log("val after:", val);
        this.Cursor = val;
        this.TextChange = true;
    }
    async TextIncerti(incert, pos1, pos2 = -1) {
        pos2 = (pos2 === -1) ? pos1 : pos2;
        this.TextContent = this.Funcsi.Inceri(this.TextContent, incert, pos1, pos2);
    }
    AddHistoryI() { this.HistoryIndx = (this.HistoryIndx < this.Static.HISTORYSIZE) ? this.HistoryIndx + 1 : 0; }
    SubHistoryI() { this.HistoryIndx = (this.HistoryIndx >= 0) ? this.HistoryIndx - 1 : this.Static.HISTORYSIZE; }
    SaveHistory() {
        this.HistoryEnds = this.HistoryIndx + 1;
        this.HistoryText[this.HistoryIndx] = this.TextContent;
        this.HistoryCurs[this.HistoryIndx] = this.Cursor;
    }
    fromHistory() {
        this.HistoryMove = true;
        this.TextContent = this.HistoryText[this.HistoryIndx];
        this.Cursor = this.HistoryCurs[this.HistoryIndx];
    }
    PushHistory() {
        if (this.HistoryStep > 0) {
            this.HistoryStep -= 1;
            return;
        }
        else
            this.HistoryStep = Math.min(this.Static.HISTMINSTEP, Math.round(this.Cursor / 5));
        this.AddHistoryI();
        this.SaveHistory();
    }
    UndoHistory() {
        if (this.HistoryText[this.HistoryIndx - 1] === undefined ||
            this.HistoryIndx - 1 === this.HistoryEnds) {
            this.TextChange = false;
            return;
        }
        this.SubHistoryI();
        this.fromHistory();
    }
    RedoHistory() {
        if (this.HistoryText[this.HistoryIndx + 1] === undefined ||
            this.HistoryIndx + 1 === this.HistoryEnds) {
            this.TextChange = false;
            return;
        }
        this.AddHistoryI();
        this.fromHistory();
    }
    async AddSymbol(symbs) {
        const count = symbs.length;
        this.CountSymbol += count;
        this.TextIncerti(symbs, this.Cursor);
        this.addCursor(count);
    }
    async DelSymbol(count) {
        if (this.Cursor === this.CurMin) {
            if (this.Static.DOC_TWERK_DICT[this.TwerksCount])
                alert(this.Static.DOC_TWERK_DICT[this.TwerksCount]);
            if (this.TwerksCount === 100) {
                localStorage.setItem(this.Static.DOC_TWERK_DICT, "true");
                this.ArousedScreen.setAttribute("dead", "true");
            }
            this.TwerksCount += 1;
            return;
        }
        this.TwerksCount = 0;
        if (count === -1)
            count = this.Cursor;
        this.CountSymbol -= count;
        this.TextIncerti('', this.Cursor - count, this.Cursor);
        this.subCursor(count);
    }
    DelWord() {
        const prev = this.PrevText();
        const word = prev.indexOf(" ", 1);
        const line = prev.indexOf("\n") || 1;
        this.DelSymbol(Math.max(1, Math.min(word, line === -1 ? word : line)));
    }
    setTitle(text) {
        this.Name = text.slice(0, this.TTLMax);
        this.ArousedTittle.innerText = this.Name;
        document.title = this.Name || "Aroused";
    }
    Download() {
        const data = new Blob([this.TextContent], { type: 'application/json' });
        this.ArousedDownld.href = URL.createObjectURL(data);
        this.ArousedDownld.download = `${this.Name}.md`;
        this.ArousedDownld.click();
    }
    ToggleSpellcheck() {
        this.TextChange = false;
        this.ArousedScreen.spellcheck = this.ArousedScreen.spellcheck ? false : true;
    }
}
//# sourceMappingURL=ArousedFunctions.js.map