import ApplicationClass from "./ApplicationClass.js";
export default class SlavaRightSyntax extends ApplicationClass {
    static countSyms = 0;
    static SLAVARIGHT_TO_HTML_DICT = {
        "! ": "h1", "!! ": "h2", "!!! ": "h3", "!!!! ": "h4", "!!!!! ": "h5",
        '" ': "div class='note'", '"" ': "div class='note2'",
        '/" ': "div class='note new'", '/"" ': "div class='note2 new'",
        "- ": "ul class='list1'", "* ": "ul class='list2'",
        ". ": "ol class='list1'", ", ": "ol class='list2'",
    };
    static SLAVARIGHT_TO_MD_DICT = {
        "! ": "# ", "!! ": "## ", "!!! ": "### ", "!!!! ": "#### ", "!!!!! ": "##### ",
        '" ': "> ", '"" ': "> ",
        '/" ': "> ", '/"" ': "> ",
        "- ": "- ", "* ": "* ",
        ". ": "1. ", ", ": "1. ",
    };
    static Formatter(line, lineI, lines, dict = this.SLAVARIGHT_TO_HTML_DICT) {
        const nextLine = lines[lineI + 1] || "";
        const prevLine = lines[lineI - 1] || "";
        if (prevLine === "")
            this.countSyms = 0;
        else
            this.countSyms += prevLine.length;
        for (let symbols in dict)
            if (line.startsWith(symbols)) {
                let attrs = (dict[symbols] || "").split(" ");
                let fmt = [``, ``, ``], tag = attrs.shift() || "";
                let prevCountSyms = `prevCountSyms="${this.countSyms}"`;
                attrs = attrs.join(" ") + prevCountSyms;
                if (["ul", "ol", "li"].indexOf(tag) >= 0) {
                    if (!prevLine.startsWith(symbols))
                        fmt[0] = `<${tag}>\n`;
                    if (!nextLine.startsWith(symbols))
                        fmt[2] = `\n</${tag}>`;
                    tag = "li";
                }
                if (symbols.startsWith('"')) {
                    if (!prevLine.startsWith(symbols))
                        fmt[0] = `<${tag} ${attrs}>`;
                    if (!nextLine.startsWith(symbols))
                        fmt[2] = `</${tag}>`;
                    return fmt[0] + line.slice(symbols.length) + fmt[2];
                }
                fmt[1] = `<${tag} ${attrs}>${line.slice(symbols.length)}</${tag}>`;
                return fmt.join("");
            }
        return line;
    }
}
//# sourceMappingURL=SlavaRightSyntax.js.map