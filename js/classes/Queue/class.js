import Node from "../Node"

class Queue {
  constructor(value) {
    var node = new Node(value)
    this.first = node
    this.last = node
    this.length = 1
  }

  enqueue(value) {
    var node = new Node(value)
    if (this.length == 0) {
      this.first = node
      this.last = node
    } else {
      this.last.pointer = node
      this.last = node
    }
    this.length++
  }
}

export default Queue
