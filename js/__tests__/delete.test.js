import { LinkedList } from "../classes/index.js";

describe('delete items', () => {
  it('unable to delete', () => {
    const ll = new LinkedList()
    const del =ll.delete(1)
    expect(del).toBeFalsy()
    expect(ll.length).toBe(0)
  })

  it('unable to delete index value', () => {
    const ll = new LinkedList(6)
    ll.push(12)
    ll.push(3)
    ll.push(27)
    const del =ll.delete(4)
    expect(del).toBeFalsy()
    expect(ll.length).toBe(4)
  })

  it('delete ll value index 0', () => {
    const ll = new LinkedList(6)
    const del =ll.delete(0)
    expect(del).toBeTruthy()
    expect(ll.length).toBe(0)
    expect(ll.getTail()).toBe(null)
    expect(ll.getHead()).toBe(null)
  })

  it('delete latest value', () => {
    const ll = new LinkedList(23)
    ll.push(11)
    ll.push(17)
    ll.push(3)
    ll.push(13)
    ll.push(9)
    const del = ll.delete(5)
    expect(del).toBeTruthy()
    expect(ll.length).toBe(5)
    expect(ll.getTail().value).toBe(13)
    expect(ll.getById(4).value).toBe(13)
    expect(ll.getById(4).pointer).toBe(null)
  })

  it('delete by index', () => {
    const ll = new LinkedList(12)
    ll.push(19)
    ll.push(11)
    ll.push(2)
    ll.push(20)
    ll.push(7)
    ll.push(14)

    const del = ll.delete(3)
    expect(del).toBeTruthy()
    expect(ll.length).toBe(6)
    expect(ll.getById(2).value).toBe(11)
    expect(ll.getById(2).pointer.value).toBe(20)
    expect(ll.getById(3).value).toBe(20)
    expect(ll.getById(3).pointer.value).toBe(7)
  })

})


