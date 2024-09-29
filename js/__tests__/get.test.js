import { LinkedList } from "../classes/index.js";

describe('get value', () => {
  it('get by value', () => {
    const ll = new LinkedList(78)

    ll.push(24)
    ll.push(45)
    ll.push(98)
    ll.push(64)
    ll.push(53)
    expect(ll.length).toBe(6)
    expect(ll.get(98).value).toBe(98)

    expect(ll.get(23)).toBeFalsy()

  })

  it('get by index', () => {
    const ll = new LinkedList(78)

    ll.push(24)
    ll.push(45)
    ll.push(98)
    ll.push(64)
    ll.push(53)
    ll.unshift(67)
    ll.push(31)
    expect(ll.getById(10).value).toBeFalsy()
    ll.unshift(85)
    ll.push(44)
    expect(ll.length).toBe(10)
    expect(ll.getById(8).value).toBe(31)



  })


})

