"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollections = new NumbersCollection_1.NumberCollection([10, 3, -5, 0, 100, 1, 2, 3, 4, 5]);
console.log(numbersCollections.data);
numbersCollections.sort();
console.log(numbersCollections.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log(linkedList.print());
linkedList.sort();
console.log(linkedList.print());
