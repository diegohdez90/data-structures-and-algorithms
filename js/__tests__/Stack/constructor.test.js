import { Stack } from "../../classes/index.js";

describe('stack', () => {
  it('constuctor', () => {
    var stack = new Stack(9)
    expect(stack.top.value).toBe(9)
    expect(stack.length).toBe(1)
  })
})