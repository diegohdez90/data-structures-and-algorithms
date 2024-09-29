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
}

export default DoubleLinkedList
