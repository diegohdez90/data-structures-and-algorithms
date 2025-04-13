import { DoubleLinkedList } from "../../classes";


describe('swap first and last', () => {
  it('swap empty', () => {
    var dll = new DoubleLinkedList()
    var result = dll.swapFirstAndLast()
    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
  });

  it('swap one', () => {
    var dll = new DoubleLinkedList(12)
    var result = dll.swapFirstAndLast()
    expect(dll.head.value).toBe(12)
    expect(dll.tail.value).toBe(12)
  });

  it('swap two', () => {
    var dll = new DoubleLinkedList(3)
    dll.push(9)
    var result = dll.swapFirstAndLast()
    expect(dll.head.value).toBe(9)
    expect(dll.head.next.value).toBe(3)
    expect(dll.head.prev).toBeNull()
    expect(dll.tail.value).toBe(3)
    expect(dll.tail.next).toBeNull()
    expect(dll.tail.prev.value).toBe(9)
  });


  it('three items', () => {
    var dll = new DoubleLinkedList(16)
    dll.push(7)
    dll.push(11)
    var result = dll.swapFirstAndLast()
    expect(dll.head.value).toBe(11)
    expect(dll.head.next.value).toBe(7)
    expect(dll.head.prev).toBeNull()
    expect(dll.tail.value).toBe(16)
    expect(dll.tail.next).toBeNull()
    expect(dll.tail.prev.value).toBe(7)

    var secondItem = dll.get(1)
    expect(secondItem.next.value).toBe(16)
    expect(secondItem.prev.value).toBe(11)

  });
  

  it('more items', () => {
    var dll = new DoubleLinkedList(2)
    dll.push(15)
    dll.push(8)
    dll.push(4)
    dll.push(13)
    var result = dll.swapFirstAndLast()
    expect(dll.head.value).toBe(13)
    expect(dll.head.next.value).toBe(15)
    expect(dll.head.prev).toBeNull()
    expect(dll.tail.value).toBe(2)
    expect(dll.tail.next).toBeNull()
    expect(dll.tail.prev.value).toBe(4)

    var secondItem = dll.get(1)
    expect(secondItem.next.value).toBe(8)
    expect(secondItem.prev.value).toBe(13)

    var penult = dll.get(dll.length - 2)
    expect(penult.next.value).toBe(2)
    expect(penult.prev.value).toBe(8)

  });
})
