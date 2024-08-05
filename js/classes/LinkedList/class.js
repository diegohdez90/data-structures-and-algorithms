import Node from '../Node/index.js'

class LinkedList {

    list = Array()
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = node
        if (node)
            this.length = 1
        else
            this.length = 0
    }


    empty() {
        this.tail = null
        this.head = null
        this.length = 0
    }

    display() {
        console.log('the ll');
        
        let node = this.head
        let index = 0
        while(node != null) {
            console.log(node)
            node = node.pointer
        }

        console.log('end of ll');
        
    }

    getTail = () => JSON.stringify(this.tail)

    getHead = () => this.head

    getLength = () => this.length

    push(value) {
        const node = new Node(value)

        if (this.tail) {
            const prev = this.tail
            prev.pointer = node
            this.tail = node    
        } else {
            this.head = node
            this.tail = node
        }
        this.length += 1
    }
}

export default LinkedList;
