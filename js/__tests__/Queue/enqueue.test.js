import { Queue } from "../../classes/index.js";

describe('queue', () => {
  it('add item', () => {
    var queue = new Queue(4)
    queue.enqueue(1)
    expect(queue.first.value).toBe(4)
    expect(queue.last.value).toBe(1)
    expect(queue.length).toBe(2)
  })

  it('add item', () => {
    var queue = new Queue(8)
    queue.enqueue(5)
    expect(queue.first.value).toBe(8)
    expect(queue.last.value).toBe(5)
    expect(queue.length).toBe(2)
    queue.enqueue(11)
    expect(queue.last.value).toBe(11)
    expect(queue.length).toBe(3)
    queue.enqueue(19)
    queue.enqueue(7)
    expect(queue.last.value).toBe(7)
    expect(queue.length).toBe(5)
    queue.enqueue(10)
    queue.enqueue(2)
    queue.enqueue(6)
    expect(queue.last.value).toBe(6)
    expect(queue.length).toBe(8)
  })
})