import { DoubleLinkedList } from '../../classes/index.js'

describe('unshift', () => {
  it('empty dll', () => {
    const dll = new DoubleLinkedList()
    dll.unshift(8)
    expect(dll.head.value).toBe(8)
    expect(dll.tail.value).toBe(8)
    expect(dll.length).toBe(1)
  });

  it('with values', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(11)
    dll.push(17)
    dll.unshift(9)
    expect(dll.head.value).toBe(9)
    expect(dll.head.next.value).toBe(7)
    expect(dll.length).toBe(4)
  })
})