import { DoubleLinkedList } from '../../classes/index.js'

describe('push dll', () => {
  it('empty constructor', () => {
    const dll = new DoubleLinkedList()
    dll.pop()
    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
    expect(dll.length).toBe(0)
  })

  it('constructor with one value', () => {
    const dll = new DoubleLinkedList(7)
    dll.pop()
    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
    expect(dll.length).toBe(0)
  })

  it('constructor with two values', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(10)
    dll.pop()
    expect(dll.head.value).toBe(7)
    expect(dll.tail.value).toBe(7)
    expect(dll.head.prev).toBeNull()
    expect(dll.head.next).toBeNull()
    expect(dll.length).toBe(1)
  })

  it('more samples', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(9)
    dll.push(17)
    dll.push(3)
    dll.push(5)
    dll.pop()
    expect(dll.tail.value).toBe(3)
    expect(dll.tail.next).toBeNull()
    expect(dll.length).toBe(4)
    dll.push(14)
    dll.push(2)
    dll.push(6)
    dll.pop()
    expect(dll.tail.value).toBe(2)
    expect(dll.tail.next).toBeNull()
    expect(dll.length).toBe(6)

  });
})
