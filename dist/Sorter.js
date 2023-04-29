"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = length; i > 0; i--) {
            let noSwap = true;
            for (let j = 0; j < (i - 1); j++) {
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
