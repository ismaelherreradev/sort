import { CharactersCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";


const numbersCollections = new NumberCollection([10, 3, -5, 0, 100, 1, 2, 3, 4, 5]);

console.log(numbersCollections.data);

numbersCollections.sort();

console.log(numbersCollections.data);


const charactersCollection = new CharactersCollection("Xaayb");

console.log(charactersCollection.data);

charactersCollection.sort();

console.log(charactersCollection.data);


const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);


console.log(linkedList.print());

linkedList.sort();

console.log(linkedList.print());