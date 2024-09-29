import { LinkedList } from './classes/index.js'

const ll = new LinkedList()

ll.display()
let tail = ll.getTail()
console.log(`tail: ${tail}`);
let head = ll.getHead()
console.log(`head: ${head}`);
let length = ll.getLength()
console.log(`length: ${length}`);



ll.unshift(7)
ll.display()
tail = ll.getTail()
console.log(`tail: ${tail}`);
head = ll.getHead()
console.log(`head: ${head}`);
length = ll.getLength()
console.log(`length: ${length}`);


ll.unshift(77)
tail = ll.getTail()
console.log(`tail: ${tail}`);
head = ll.getHead()
console.log(`head: ${head}`);
length = ll.getLength()
console.log(`length: ${length}`);

ll.display()

