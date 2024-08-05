import LinkedList from "./classes/index.js";

const ll = new LinkedList(15)

ll.display()
let tail = ll.getTail()
console.log(`tail: ${tail}`);
let head = ll.getHead()
console.log(`head: ${head}`);
let length = ll.getLength()
console.log(`length: ${length}`);


let node = ll.shift()
console.log(`node: ${JSON.stringify(node)}`);
ll.display()
length = ll.getLength()
console.log(`length: ${length}`);
tail = ll.getTail()
console.log(`tail: ${tail}`);
head = ll.getHead()
console.log(`head: ${head}`);


node = ll.shift()
console.log(`node: ${JSON.stringify(node)}`);
ll.display()
tail = ll.getTail()
console.log(`tail: ${tail}`);
head = ll.getHead()
console.log(`head: ${head}`);
length = ll.getLength()
console.log(`length: ${length}`);
