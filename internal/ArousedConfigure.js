import Elemsi from "../external/Elemsi/Elemsi.js";
import Funcsi from "../external/Funcsi/Funcsi.js";
import Sparks from "../external/Sparks/Sparks.js";
import ApplicationClass from "./ApplicationClass.js";
import DrNotBlankPapper from "./DrNotBlankPapper.js";
export default class ArousedConfigure extends ApplicationClass {
    constructor() { super(); this.ArousedScreen.focus(); }
    Static = ApplicationClass;
    Doctor = DrNotBlankPapper;
    Elemsi = Elemsi;
    Funcsi = Funcsi;
    Sparks = Sparks;
    TextChange = true;
    SaveText = this.Static.SAVETEXT_BACKUP;
    CursorLS = localStorage.getItem(this.Static.LS_CURS) || "";
    BackupLS = localStorage.getItem(this.Static.LS_TEXT) || "";
    TabMax = 3;
    CurMin = 0;
    Cursor = Number(this.SaveText && this.CursorLS || 0);
    TTLMax = this.Static.TITTLE_TEXT.length;
    ArousedScreen = Elemsi.Id("elArousedScreen") || Elemsi.DIV;
    ArousedTittle = Elemsi.Id("elArousedTitle") || Elemsi.DIV;
    ArousedDownld = Elemsi.ANC;
    Name = "Aroused";
    TextContent = this.SaveText && this.BackupLS || this.ArousedScreen.innerHTML;
    CountSymbol = 0;
    TwerksCount = 0;
    HistoryIndx = 0;
    HistoryEnds = 0;
    HistoryStep = 0;
    HistoryMove = false;
    HistoryText = [this.TextContent];
    HistoryCurs = [this.Cursor];
    Placeholder = DrNotBlankPapper.GiveMeText;
}
//# sourceMappingURL=ArousedConfigure.js.map