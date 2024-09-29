import { DoubleLinkedList } from '../../classes/index.js'

describe('constructor dll', () => {
  it('empty constructor', () => {
    const dll = new DoubleLinkedList()
    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
    expect(dll.length).toBe(0)
  })

  it('constructor with value', () => {
    const dll = new DoubleLinkedList(7)
    expect(dll.head.value).toBe(7)
    expect(dll.tail.value).toBe(7)
    expect(dll.length).toBe(1)
  })
})
