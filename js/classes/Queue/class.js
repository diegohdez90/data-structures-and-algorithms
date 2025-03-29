import Node from "../Node"

class Queue {
  constructor(value) {
    var node = new Node(value)
    this.first = node
    this.last = node
    this.length = 1
  }
}

export default Queue
