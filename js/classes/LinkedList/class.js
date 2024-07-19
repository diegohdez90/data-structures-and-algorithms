import Node from '../Node/index.js'

class LinkedList {

    list = Array()
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = node
        this.list = [node]
    }

    display() {
        let node = this.list[0];
        let index = 0
        do {
            node = this.list[index]
            console.log(node)
            index++
        } while(node.pointer !== null)
    }

    getTail = () => JSON.stringify(this.tail)

    getHead = () => this.head

    add(value) {
        const node = new Node(value)
        const prev = this.list[this.list.length - 1];
        prev.pointer = node
        this.tail = node
        this.list.push(node)
    }
}

export default LinkedList;
