import { CharactersCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollections = new NumberCollection([10, 3, -5, 0, 100, 1, 2, 3, 4, 5]);
const charactersCollection = new CharactersCollection("Xaayb");

const numberSorted = new Sorter(numbersCollections);
console.log(numbersCollections.data);

numberSorted.sort();

console.log(numbersCollections.data);

const charactersSorted = new Sorter(charactersCollection);
console.log(charactersCollection.data);

charactersSorted.sort();

console.log(charactersCollection.data);
