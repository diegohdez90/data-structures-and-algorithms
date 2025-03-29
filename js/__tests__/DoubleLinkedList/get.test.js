import { DoubleLinkedList } from "../../classes/index.js";

describe('shift', () => {
  it('empty', () => {
    const dll = new DoubleLinkedList()
    const node = dll.get(0)
    expect(node).toBeNull()
    expect(node).toBeNull()
    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
  })

  it('one value', () => {
    const dll = new DoubleLinkedList(5)
    var node = dll.get(0)
    expect(node.value).toBe(5)
  })

  it('two values', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(14)
    const node_index_one = dll.get(0)
    expect(node_index_one.value).toBe(7)
    const node_index_two = dll.get(1)
    expect(node_index_two.value).toBe(14)
  })

  it('complex', () => {
    const dll = new DoubleLinkedList(16)
    dll.push(9)
    dll.push(17)
    var node = dll.get(2)
    expect(node.value).toBe(17)
    var empty_node = dll.get(3)
    expect(empty_node).toBeNull()
  })
})
