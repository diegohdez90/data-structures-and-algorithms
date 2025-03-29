import { DoubleLinkedList } from '../../classes/index.js'

describe('insert', () => {
  it('empty constructor', () => {
    const dll = new DoubleLinkedList()
    var result = dll.insert(0, 9)
    expect(result.value).toBe(9)
    expect(dll.head.value).toBe(9)
    expect(dll.tail.value).toBe(9)
    expect(dll.length).toBe(1)
  })

  it('constructor with value', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(9)
    var result = dll.insert(1, 13)
    expect(result).toBeTruthy()
    expect(dll.head.next.value).toBe(13)
    expect(dll.tail.prev.value).toBe(13)
    expect(dll.length).toBe(3)
  })

  it('insert at head', () => {
    const dll = new DoubleLinkedList(15)
    dll.push(9)
    var result = dll.insert(0, 11)
    expect(result).toBeTruthy()
    expect(dll.head.value).toBe(11)
    expect(dll.head.next.value).toBe(15)
    expect(dll.length).toBe(3)
  })


  it('insert at tail', () => {
    const dll = new DoubleLinkedList(15)
    dll.push(9)
    var result = dll.insert(2, 4)
    expect(result).toBeTruthy()
    expect(dll.tail.value).toBe(4)
    expect(dll.tail.prev.value).toBe(9)
    expect(dll.length).toBe(3)
  })

  it('insert at index not found', () => {
    const dll = new DoubleLinkedList(15)
    dll.push(9)
    var result = dll.insert(4, 10)
    expect(result).toBeFalsy()
  })

  it('more samples', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(9)
    dll.push(17)
    dll.push(3)
    dll.push(5)
    var result = dll.insert(2, 23)
    expect(result).toBeTruthy()
    var node = dll.get(2)
    expect(node.value).toBe(23)
    expect(node.next.value).toBe(17)
    expect(node.prev.value).toBe(9)
  });
})
