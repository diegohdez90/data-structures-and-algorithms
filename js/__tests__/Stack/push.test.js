import { Stack } from "../../classes/index.js";

describe('stack', () => {
  it('push', () => {
    var stack = new Stack(9)
    stack.push(15)
    expect(stack.top.value).toBe(15)
    expect(stack.length).toBe(2)
  })
})
