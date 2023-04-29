"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            let noSwap = true;
            for (let j = -1; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                    noSwap = false;
                }
            }
            if (noSwap)
                break;
        }
    }
}
exports.Sorter = Sorter;
