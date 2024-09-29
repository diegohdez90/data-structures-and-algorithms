import { DoubleLinkedList } from '../../classes/index.js'

describe('push dll', () => {
  it('empty constructor', () => {
    const dll = new DoubleLinkedList()
    dll.push(9)
    expect(dll.head.value).toBe(9)
    expect(dll.tail.value).toBe(9)
    expect(dll.length).toBe(1)
  })

  it('constructor with value', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(9)
    expect(dll.head.value).toBe(7)
    expect(dll.tail.value).toBe(9)
    expect(dll.length).toBe(2)
  })

  it('more samples', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(9)
    dll.push(17)
    dll.push(3)
    dll.push(5)
    expect(dll.tail.value).toBe(5)
    expect(dll.length).toBe(5)
    
  });
})
