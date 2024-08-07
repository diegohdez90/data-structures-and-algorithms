import Node from '../Node/index.js'

class LinkedList {

    list = Array()
    constructor(value) {
        let node = null
        if (value) {
            node = new Node(value)
        }
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
        while(node != null) {
            console.log(node)
            node = node.pointer
        }

        console.log('end of ll');
        
    }

    getTail = () => this.tail

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

    pop() {
        if (this.head) {
            let tmp = this.head
            let prev = this.head
            while(tmp.pointer) {
                prev = tmp
                tmp = tmp.pointer
            }
            prev.pointer = null
            this.tail = prev
            this.length -= 1
            if (this.length == 0) {
                this.tail = null
                this.head = null
            }
        }
    }

    unshift(value) {
        const node = new Node(value)
        node.pointer = this.head
        this.head = node
        if (!this.tail)
            this.tail = node
        
        this.length++
    }

    shift() {
        let node = null
        if (this.head) {
            node = this.head
            this.head = this.head.pointer
            node.pointer = null
            this.length--
            if (this.length == 0)
                this.tail = null
        }
        return node
    }

    get(value) {
        let node = this.head

        while(node !== null) {
            if (node.value === value)
                return node
            node = node.pointer
        }
        return false
    }

    getById(index) {
        if (index <= -1 || index >= this.length)
            return false
        
        let indexCounter = 0
        let node = this.head

        while (indexCounter < index) {
            node = node.pointer
            indexCounter++
        }

        return node
    }

    set(index, value) {
        let tmp = this.getById(index)
        if (tmp) {
            tmp.value = value
            return true
        }
        return false
    }

}

export default LinkedList;
