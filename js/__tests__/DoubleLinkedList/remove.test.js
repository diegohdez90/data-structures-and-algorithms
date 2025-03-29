import { DoubleLinkedList } from '../../classes/index.js'

describe('remove dll', () => {
  it('empty constructor', () => {
    const dll = new DoubleLinkedList()
    var result = dll.remove(0)
    expect(result).toBeNull()
  })

  it('constructor with value', () => {
    const dll = new DoubleLinkedList(7)
    var result = dll.remove(0)
    expect(result.value).toBe(7)
    expect(dll.tail).toBeNull()
    expect(dll.head).toBeNull()
    expect(dll.length).toBe(0)
  })

  it('remove head', () => {
    const dll = new DoubleLinkedList(16)
    dll.push(3)
    dll.push(11)
    dll.push(7)
    dll.push(2)
    var result = dll.remove(0)
    expect(result.value).toBe(16)
    expect(dll.head.value).toBe(3)
    expect(dll.length).toBe(4)
  })

  it('remove tail', () => {
    const dll = new DoubleLinkedList(16)
    dll.push(3)
    dll.push(11)
    dll.push(17)
    dll.push(20)
    var result = dll.remove(4)
    expect(result.value).toBe(20)
    expect(dll.tail.value).toBe(17)
    expect(dll.length).toBe(4)
  })

  it('more samples', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(9)
    dll.push(12)
    dll.push(3)
    dll.push(5)
    var result = dll.remove(2)
    expect(result.value).toBe(12)
    expect(dll.length).toBe(4)
  });
})
