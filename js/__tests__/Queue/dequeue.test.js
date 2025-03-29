import { Queue } from "../../classes/index.js";

describe('queue', () => {
  it('empty queue', () => {
    var queue = new Queue(4)
    var result = queue.dequeue()
    expect(result.value).toBe(4)
    expect(queue.first).toBeNull()
    expect(queue.last).toBeNull()
    expect(queue.length).toBe(0)
  })

  it('one item', () => {
    var queue = new Queue(8)
    queue.enqueue(5)
    var result = queue.dequeue()
    expect(result.value).toBe(8)
    expect(queue.first.value).toBe(5)
    expect(queue.last.value).toBe(5)
    expect(queue.length).toBe(1)
  })

  it('more item', () => {
    var queue = new Queue(18)
    queue.enqueue(3)
    queue.enqueue(7)
    queue.enqueue(15)
    queue.enqueue(5)
    queue.enqueue(11)
    var result = queue.dequeue()
    expect(result.value).toBe(18)
    expect(queue.first.value).toBe(3)
    expect(queue.last.value).toBe(11)
    expect(queue.length).toBe(5)
    result = queue.dequeue()
    expect(result.value).toBe(3)
    expect(queue.first.value).toBe(7)
    expect(queue.length).toBe(4)
  })
})