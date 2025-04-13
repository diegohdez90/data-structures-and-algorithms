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

  print() {
    let tmp = this.head
    while (tmp != null) {
      console.log(tmp.value)
      tmp = tmp.next
    }
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
    return true
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
      return node
    }
    node.next =  this.head
    this.head.prev = node
    this.head = node
    this.length++
    return node
  }

  shift() {
    if (this.length == 0) return undefined
    const tmp = this.head
    if (this.length == 1) {
      this.tail = null
      this.head = null
    } else {
      this.head = this.head.next
      this.head.prev = null
      tmp.next = null
    }
    this.length--
    return tmp
  }

  get(index) {
    if (index < 0 || index >= this.length)
      return null
    let tmp = this.head
    if (index < this.length/2) {
      for (let i = 0; i < index; i++) {
        tmp = tmp.next
      }
    } else {
      tmp = this.tail
      for (let i = this.length - 1; i > index; i--) {
        tmp = tmp.prev
      }
    }
    return tmp
  }

  set(index, value) {
    let node = this.get(index)
    if (node) {
      node.value = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length)
      return null
    if (index == 0)
      return this.unshift(value)
    if (index == this.length)
      return this.push(value)
    var node = new NodeDouble(value)
    const prev = this.get(index - 1)
    const next = prev.next
    prev.next = node
    node.prev = prev
    node.next = next
    next.prev = node
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null
    if (index == 0) {
      return this.shift()
    }
    if (index == this.length - 1)
      return this.pop()
    var tmp = this.get(index)
    tmp.prev.next = tmp.next
    tmp.next.prev = tmp.prev
    tmp.next = null
    tmp.prev = null
    this.length--
    return tmp
  }

  swapFirstAndLast() {

    if (this.length <= 1)
      return this
    if (this.length == 2) {
      var first = this.head
      var last = this.tail

      this.head = first.next
      this.tail = last.prev
      last.next = first
      last.prev = null
      first.next = null
      first.prev = last
      return this
    }
    var first = this.head
    var last = this.tail

    var prevTail = last.prev
    var nextHead = first.next
    last.prev = null
    last.next = nextHead
    nextHead.prev = last

    first.prev = prevTail
    first.next = null
    prevTail.next = first

    var tmp = first
    this.head = last
    this.tail = tmp
    return this
  }


}

export default DoubleLinkedList
