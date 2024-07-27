import ArousedInterface from "./internal/ArousedInterface.js";
import PeepingEventKeys from "./internal/PeepingEventKeys.js";
export default class Aroused extends ArousedInterface {
    static Hey() { return Aroused.Init(); }
    static Units = [];
    static Init(num = 0) {
        if (Aroused.Units[num] === undefined) {
            Aroused.Units[num] = new Aroused;
            Aroused.Units[num].Run();
        }
        Aroused.Units[num].Render();
        return Aroused.Units[num];
    }
    Run() {
        const keyevent = PeepingEventKeys.Hey();
        window.addEventListener('keydown', (e) => keyevent.KeyPress(e));
    }
}
//# sourceMappingURL=Aroused.js.map