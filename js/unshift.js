import LinkedList from "./classes/index.js";

const ll = new LinkedList(33)

ll.push(11)
ll.push(25)
ll.push(19)
ll.push(17)
ll.display()
let tail = ll.getTail()
console.log(`tail: ${tail}`);
let head = ll.getHead()
console.log(`head: ${head}`);
let length = ll.getLength()
console.log(`length: ${length}`);


ll.unshift(22)
ll.display()
length = ll.getLength()
console.log(`length: ${length}`);
tail = ll.getTail()
console.log(`tail: ${tail}`);
head = ll.getHead()
console.log(`head: ${head}`);

