import LinkedList from "./classes/index.js";

const ll = new LinkedList(12)

ll.add(3)
let length = ll.getLength()
console.log(length);
ll.add(8)
length = ll.getLength()
console.log(length);
ll.add(9)
let tail = ll.getTail()
console.log(`tail: ${tail}`);
ll.add(2)
length = ll.getLength()
console.log(length);
ll.add(7)
tail = ll.getTail()
console.log(`tail: ${tail}`);
ll.add(5)
tail = ll.getTail()
console.log(`tail: ${tail}`);
length = ll.getLength()
console.log(length);
ll.display()
