import Node from "../Node/index.js"

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

  dequeue() {
    if (this.length == 0) return undefined
    var tmp = this.first
    if (this.length == 1) {
      this.first = null
      this.last = null
    } else {
      this.first = tmp.pointer
      tmp.pointer = null
    }
    this.length--
    return tmp
  }
}

export default Queue
