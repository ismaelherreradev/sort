"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        if (this.data[leftIndex] === undefined) {
            return this.data[leftIndex + 1].toLowerCase() > this.data[rightIndex].toLowerCase();
        }
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split("");
        [characters[leftIndex], characters[rightIndex]] = [characters[rightIndex], characters[leftIndex]];
        this.data = characters.join("");
    }
}
exports.CharactersCollection = CharactersCollection;