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
            return true
        }
        return false
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
            return true
        }
        return false
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

    insert (index, value) {
        if (index <= -1 || index > this.getLength()) return false
        if (index === 0) {
            this.unshift(value)
            return true
        }
        if (index === this.length) {
            this.push(value)
            return true
        }
        const tmp = this.getById(index - 1)
        const pointer = tmp.pointer
        const node = new Node(value)
        node.pointer = pointer
        tmp.pointer = node
        this.length++
    }

    delete(index) {
        if (index <= -1 || index >= this.getLength()) return false
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        const node = this.getById(index - 1)
        const nodeDelete = node.pointer
        node.pointer = nodeDelete.pointer
        this.length--
        return true
    }

    reverse() {
        let tmp = this.head
        this.head = this.tail
        this.tail = tmp

        let pointer = tmp
        let prev = null
        for (let index = 0; index < this.length; index++) {
            pointer = tmp.pointer
            tmp.pointer = prev
            prev = tmp
            tmp = pointer
        }
        return true
    }
}

export default LinkedList;
