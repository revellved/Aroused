export default class ApplicationClass {
    constructor() { if (ApplicationClass.DEV)
        ApplicationClass.CleanUpAll(); }
    static ENV = process.env.NODE_ENV || "Production";
    static DEV = this.ENV === "development";
    static DEV_MSG_DEFAULT = [];
    static SAVETEXT_BACKUP = !this.DEV;
    static TITTLE_TEXT = "Я сегодня слишком Aroused";
    static CURSOR_HTAG = "<span class='aroused__cursor'></span>";
    static CURSOR_CODE = "&787526";
    static OPTS_DELIMS = ";";
    static OPTS_SYMBOL = "%";
    static OPTS_SYMLEN = this.OPTS_SYMBOL.length;
    static HISTORYSIZE = 1000;
    static HISTMINSTEP = 7;
    static ATTRS_EMPTY = "empty";
    static LS_DOCTWERK = "doc-twerk-dead";
    static LS_CURS = "aroused-cursor";
    static LS_TEXT = "aroused-screen-text";
    static SPARKS_WORK = false;
    static SPARKS_CMD = ";) ";
    static SPARKS_LEN = this.SPARKS_CMD.length;
    static SPARKS_MSG = "";
    static SPARKS_MSGS = [
        "Слушаю тебя", "Да да", "Тута я, что у тебя",
        "Блин, даже ногти докрасить не дают, ну зачем пожаловал"
    ];
    static COMMAND_SPEC = ":";
    static COMMAND_SPEC_LEN = this.COMMAND_SPEC.length;
    static THEMES = [
        "ruby",
        "anna",
        "dark",
        "lzzy",
        "hima",
        "kate",
        "mini",
        "nika",
        "poly",
        "vika",
        "lucy",
    ];
    static DOC_TWERK_DICT = {
        50: "Хватит трясти старика",
        70: "Я тебе что сказал!",
        100: "Всё хана тебе!!!"
    };
    static DevMsg = this.DEV_MSG_DEFAULT;
    static CleanUpLS() {
        localStorage.setItem(this.LS_CURS, "");
        localStorage.setItem(this.LS_TEXT, "");
    }
    static CleanUpDev() {
        this.DevMsg = this.DEV_MSG_DEFAULT;
    }
    static CleanUpAll() {
        this.CleanUpDev();
        this.CleanUpLS();
    }
}
//# sourceMappingURL=ApplicationClass.js.map