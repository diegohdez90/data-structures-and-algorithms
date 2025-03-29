import Node from "../Node";

class Stack {
  constructor(value) {
    var node = new Node(value)
    this.top = node
    this.length = 1
  }
}

export default Stack

