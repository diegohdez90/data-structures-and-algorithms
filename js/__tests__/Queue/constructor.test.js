import { Queue } from "../../classes/index.js";

describe('queue', () => {
  it('constructor', () => {
    var queue = new Queue(4)
    expect(queue.first.value).toBe(4)
    expect(queue.last.value).toBe(4)
    expect(queue.length).toBe(1)
  })
})