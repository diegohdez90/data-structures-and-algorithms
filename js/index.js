import { LinkedList } from './classes/index.js'
console.log("=========================")
console.log("LL")
console.log("=========================")


const ll = new LinkedList(12)

ll.push(3)
let length = ll.getLength()
console.log(`length: ${length}`);
ll.push(8)
length = ll.getLength()
console.log(`length: ${length}`);
ll.push(9)
let tail = ll.getTail()
console.log(`tail: ${tail}`);
ll.push(2)
length = ll.getLength()
console.log(`length: ${length}`);
ll.push(7)
tail = ll.getTail()
console.log(`tail: ${tail}`);
ll.push(5)
tail = ll.getTail()
console.log(`tail: ${tail}`);
length = ll.getLength()
console.log(`length: ${length}`);
ll.display()

console.log("=========================")
console.log("LL1")
console.log("=========================")
    

const ll1 = new LinkedList(33)

ll1.push(9)
let length1 = ll1.getLength()
console.log(`length: ${length1}`);
ll1.push(16)
length1 = ll1.getLength()
console.log(`length: ${length1}`);
ll1.push(3)
let tail1 = ll1.getTail()
console.log(`tail: ${tail1}`);
ll1.push(27)
length1 = ll1.getLength()
console.log(`length: ${length1}`);
ll1.display()

ll1.empty()

ll1.display()
ll1.push(19)
tail1 = ll1.getTail()
console.log(`tail: ${tail1}`);
ll1.push(12)
tail1 = ll1.getTail()
console.log(`tail: ${tail1}`);
length1 = ll1.getLength()
console.log(`length: ${length1}`);
ll1.push(4)
ll1.push(21)
length1 = ll1.getLength()
console.log(`length: ${length1}`);
ll1.push(7)

ll1.display()

console.log("=========================")
console.log("LL2")
console.log("=========================")


const ll2 = new LinkedList()

ll2.push(9)
let length2 = ll2.getLength()
console.log(`length: ${length2}`);
ll2.push(16)
length2 = ll2.getLength()
console.log(`length: ${length2}`);
ll2.push(3)
let tail2 = ll2.getTail()
console.log(`tail: ${tail2}`);
ll2.push(12)
length2 = ll2.getLength()
console.log(`length: ${length2}`);
ll2.display()

ll2.empty()

ll2.display()
ll2.push(7)
tail2 = ll2.getTail()
console.log(`tail: ${tail2}`);
ll2.push(23)
tail2 = ll2.getTail()
console.log(`tail: ${tail2}`);
length2 = ll2.getLength()
console.log(`length: ${length2}`);
ll2.push(15)
ll2.push(12)
tail2 = ll2.getTail()
console.log(`tail: ${tail2}`);
ll2.push(2)
length2 = ll2.getLength()
console.log(`length: ${length2}`);
ll2.push(9)
ll2.push(5)
tail2 = ll2.getTail()
console.log(`tail: ${tail2}`);
ll2.display()


