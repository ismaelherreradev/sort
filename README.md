# Sort
```ts
import { CharactersCollection } from “./CharactersCollection”;

import { NumberCollection } from “./NumbersCollection”;

import { LinkedList } from “./LinkedList”;

const numbersCollections = new NumberCollection([10, 3, -5, 0, 100, 1, 2, 3, 4, 5]);

console.log(numbersCollections.data); // [
10, 3, -5, 0, 100,
1, 2, 3, 4, 5
]

numbersCollections.sort();

console.log(numbersCollections.data); // [
-5, 0, 1, 2, 3,
3, 4, 5, 10, 100
]

const charactersCollection = new CharactersCollection(“Xaayb”);

console.log(charactersCollection.data); // Xaayb

charactersCollection.sort(); // aabXy

console.log(charactersCollection.data);

const linkedList = new LinkedList();

linkedList.add(500);

linkedList.add(-10);

linkedList.add(-3);

linkedList.add(4);

console.log(linkedList.print()); 500 , -10, -3, 4

linkedList.sort();

console.log(linkedList.print()); -10, -2, 500, 4
```
