import Node from '../Node/index.js'

class LinkedList {

    list = Array()
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = node
        this.length = 1
    }

    display() {
        let node = this.head
        let index = 0
        while(node != null) {
            console.log(node)
            node = node.pointer
        }
    }

    getTail = () => JSON.stringify(this.tail)

    getHead = () => this.head

    getLength = () => this.length

    add(value) {
        const node = new Node(value)
        const prev = this.tail
        prev.pointer = node
        this.tail = node
        this.length += 1
    }
}

export default LinkedList;
