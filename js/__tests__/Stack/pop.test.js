import { Stack } from "../../classes/index.js";

describe('stack', () => {
  it('pop one item', () => {
    var stack = new Stack(3)
    var tmp = stack.pop()
    expect(tmp.value).toBe(3)
    expect(stack.length).toBe(0)
    expect(stack.top).toBeNull()
  })

  it('pop complex', () => {
    var stack = new Stack(3)
    stack.push(14)
    stack.push(9)
    stack.push(6)
    stack.push(2)
    stack.push(7)
    var tmp = stack.pop()
    expect(tmp.value).toBe(7)
    expect(stack.length).toBe(5)
    tmp = stack.pop()
    expect(tmp.value).toBe(2)
    expect(stack.length).toBe(4)
    tmp = stack.pop()
    expect(tmp.value).toBe(6)
    expect(stack.length).toBe(3)
  })
})
