import { DoubleLinkedList } from '../../classes/index.js'

describe('set', () => {
  it('empty constructor', () => {
    const dll = new DoubleLinkedList()
    var result = dll.set(0, 1)
    expect(result).toBeFalsy()
  })

  it('constructor with value', () => {
    const dll = new DoubleLinkedList(7)
    var result = dll.set(0, 8)
    expect(result).toBeTruthy()
    var node = dll.get(0)
    expect(node.value).toBe(8)
  })

  it('more samples', () => {
    const dll = new DoubleLinkedList(7)
    dll.push(9)
    dll.push(17)
    dll.push(3)
    dll.push(5)
    var result = dll.set(3, 10)
    expect(result).toBeTruthy()
    var node = dll.get(3)
    expect(node.value).toBe(10)
  });
})
