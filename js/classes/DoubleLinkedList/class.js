import NodeDouble from "../NodeDouble/index.js";

class DoubleLinkedList {
  constructor(value) {
    let node =  null
    this.length = 0
    if (value) {
      node = new NodeDouble(value)
      this.length = 1
    }
    this.head = node
    this.tail = node
  }

  push(v) {
    const node = new NodeDouble(v)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }
}

export default DoubleLinkedList
