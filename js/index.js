import LinkedList from "./classes/index.js";

const ll = new LinkedList(12)

ll.add(3)
ll.add(8)
ll.add(9)
let tail = ll.getTail()
console.log(`tail: ${tail}`);
ll.add(2)
ll.add(7)
tail = ll.getTail()
console.log(`tail: ${tail}`);
ll.add(5)
tail = ll.getTail()
console.log(`tail: ${tail}`);
ll.display()
