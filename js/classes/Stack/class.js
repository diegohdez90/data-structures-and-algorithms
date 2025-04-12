import Node from "../Node/index.js";

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

  pop() {
    if (this.length == 0) return null
    var tmp = this.top
    this.top = tmp.pointer
    tmp.pointer = null
    this.length--
    return tmp
  }
}

export default Stack

