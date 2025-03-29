import Node from "../Node";

class Stack {
  constructor(value) {
    var node = new Node(value)
    this.top = node
    this.length = 1
  }

  push(value) {
    var node = new Node(value)
    if (this.length == 0) {
      this.top = node
    } else {
      node.pointer = this.top
      this.top = node
    }
    this.length++
    return this
  }
}

export default Stack

