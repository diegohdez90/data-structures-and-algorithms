import { DoubleLinkedList } from "../../classes/index.js";

describe('shift', () => {
  it('empty', () => {
    const dll = new DoubleLinkedList()
    dll.shift()
    expect(dll.length).toBe(0)
    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
  })

  it('one value', () => {
    const dll = new DoubleLinkedList(5)
    const shift = dll.shift()
    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
    expect(dll.length).toBe(0)
    expect(shift.value).toBe(5)
    expect(shift.prev).toBeNull()
    expect(shift.next).toBeNull()
  })

  it('two values', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(14)
    const shift = dll.shift()
    expect(dll.head.value).toBe(14)
    expect(dll.tail.value).toBe(14)
    expect(dll.length).toBe(1)
    expect(shift.value).toBe(7)
    expect(shift.prev).toBeNull()
    expect(shift.next).toBeNull()
  })

  it('complex', () => {
    const dll = new DoubleLinkedList(16)
    dll.push(9)
    dll.push(17)
    const shift = dll.shift()
    expect(dll.head.value).toBe(9)
    expect(dll.length).toBe(2)
    expect(shift.value).toBe(16)
    expect(shift.prev).toBeNull()
    expect(shift.next).toBeNull()

  })
})
