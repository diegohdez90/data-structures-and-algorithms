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

  pop() {
    if (this.length == 0)
      return 
    let tmp = this.tail
    this.tail = tmp.prev
    tmp.prev = null
    if (this.tail !== null)
      this.tail.next =  null
    if (this.tail == null) [
      this.head = null
    ]
    this.length--
    return tmp
  }

  unshift(v) {
    const node = new NodeDouble(v)
    if (this.length == 0) {
      this.head = node
      this.tail = node
      this.length++
      return
    }
    node.next =  this.head
    this.head.prev = node
    this.head = node
    this.length++
  }

  shift() {
    if (this.length == 0) return undefined
    const tmp = this.head
    this.head = tmp.next
    if (this.length == 1)
      this.tail = null
    if (this.length > 1)
      this.head.prev = null
    tmp.next = null
    this.length--
    return tmp
  }
}

export default DoubleLinkedList
