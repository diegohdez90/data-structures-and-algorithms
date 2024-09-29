import { LinkedList } from './classes/index.js'

const ll = new LinkedList(15)

ll.push(45)
ll.push(27)
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
tail = ll.getTail()
console.log(`tail: ${tail}`);
head = ll.getHead()
console.log(`head: ${head}`);
length = ll.getLength()
console.log(`length: ${length}`);

ll.unshift(7)
ll.display()
tail = ll.getTail()
console.log(`tail: ${tail}`);
head = ll.getHead()
console.log(`head: ${head}`);
length = ll.getLength()
console.log(`length: ${length}`);

ll.pop()
ll.display()
tail = ll.getTail()
console.log(`tail: ${tail}`);
head = ll.getHead()
console.log(`head: ${head}`);
length = ll.getLength()
console.log(`length: ${length}`);


ll.push(18)
ll.display()
tail = ll.getTail()
console.log(`tail: ${tail}`);
head = ll.getHead()
console.log(`head: ${head}`);
length = ll.getLength()
console.log(`length: ${length}`);


