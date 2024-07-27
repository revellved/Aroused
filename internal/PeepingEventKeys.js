import ArousedInterface from "./ArousedInterface.js";
import { qwerti } from "../external/Funcsi/Langsi.js";
import { funcfi } from "../external/Funcsi/Mainsi.js";
import { amemsi } from "../external/Funcsi/Itersi.js";
export default class PeepingEventKeys extends ArousedInterface {
    static Hey() { return new PeepingEventKeys; }
    actionFunction = () => { throw Error("ERROR: Not Inplemented Action Func"); };
    lastKeyPressed = 0;
    countKeyPressed = 0;
    timeoutEntering;
    async KeyPress(e) {
        let key = `${e.ctrlKey ? "[c] " : ""}${e.altKey ? "[a] " : ""}${e.key}`;
        key = String(funcfi(this.keysReplace[key]) || key);
        if (key.length === 1)
            this.actionFunction = () => this.AddSymbol(key);
        else {
            const action = this.keysActions[qwerti(key).toLowerCase()] || key;
            if (this.funcActionsDict[action])
                this.actionFunction = () => this.funcActionsDict[action](e);
            else
                return;
        }
        e.preventDefault();
        this.setEntering();
        this.actionFunction();
        this.Render();
    }
    setEntering() {
        this.TextChange = true;
        this.countKeyPressed += 1;
        clearTimeout(this.timeoutEntering);
        this.timeoutEntering = setTimeout(() => this.Elemsi.SetAttr("entering", "false"), 2000);
        if (this.countKeyPressed < this.lastKeyPressed + 4)
            return;
        this.lastKeyPressed = this.countKeyPressed;
        this.Elemsi.SetAttr("entering", "true");
    }
    keysReplace = {
        "[a] -": "—",
        '[a] "': () => amemsi(["«", "»"]),
        "[a] '": () => amemsi(["«", "»"]),
        "[a] .": "…",
    };
    keysActions = {
        "[c] h": "ArrowLeft",
        "[c] l": "ArrowRight",
        "[c] k": "ArrowUp",
        "[c] j": "ArrowDown",
        "[c] [a] backspace": "DeleteAll",
        "[c] backspace": "DeleteLine",
        "[a] backspace": "DeleteWord",
        "[c] z": "Undo",
        "[c] u": "Redo",
        "[c] ,": "ToggleTheme",
        "[c] [a] s": "ToggleSpellcheck",
        "[c] s": "Download",
    };
    funcActionsDict = {
        "ArrowLeft": () => { this.subCursor(); },
        "ArrowRight": () => { this.addCursor(); },
        "ArrowUp": () => { this.subCursor(1 + this.PrevText().indexOf('\n')); },
        "ArrowDown": () => { this.addCursor(1 + this.TextContent.slice(this.Cursor).indexOf('\n')); },
        "Enter": () => { this.TextIncerti('\n', this.Cursor); this.addCursor(); },
        "Tab": () => { this.TextIncerti(" ".repeat(this.TabMax), this.Cursor); this.addCursor(this.TabMax); },
        "Backspace": () => { this.DelSymbol(1); },
        "DeleteAll": () => { this.TextContent = ""; this.Cursor = this.CurMin; },
        "DeleteLine": () => { this.DelSymbol(this.PrevText().indexOf('\n') || 1); },
        "DeleteWord": () => { this.DelWord(); },
        "Undo": () => { this.UndoHistory(); },
        "Redo": () => { this.RedoHistory(); },
        "ToggleSpellcheck": () => { this.ToggleSpellcheck(); },
        "ToggleTheme": () => { this.Elemsi.ToggleTheme(); this.TextChange = false; },
        "Download": () => { this.Download(); },
    };
}
//# sourceMappingURL=PeepingEventKeys.js.map