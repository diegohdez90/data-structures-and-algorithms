import LinkedList from "./classes/index.js";

const ll = new LinkedList(78)

ll.push(24)
ll.push(45)
ll.push(98)
ll.push(64)
ll.push(53)
ll.display()
let length = ll.getLength()
console.log(`length: ${length}`);
let v = ll.getById(3)
console.log(v);

ll.unshift(67)
ll.push(31)
ll.unshift(85)
ll.push(44)
ll.display()
length = ll.getLength()
console.log(`length: ${length}`);

v = ll.getById(7)
console.log(v);


ll.push(18)
ll.unshift(36)
ll.push(37)
ll.display()
length = ll.getLength()
console.log(`length: ${length}`);
v = ll.getById(6)
console.log(v);


const node = ll.get(53)
console.log(node);

const notFound = ll.get(12)
console.log(notFound);

v = ll.getById(13)
console.log(v);

