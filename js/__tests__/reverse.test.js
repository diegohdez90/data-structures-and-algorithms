import LinkedList from "../classes/index.js";


describe('reverse ll', () => {
  it('reverse two elements', () => {
    const ll = new LinkedList(55)
    ll.unshift(77)
    ll.reverse()
    expect(ll.getHead().value).toBe(55)
    expect(ll.getTail().value).toBe(77)
    expect(ll.getById(0).pointer.value).toBe(77)
    expect(ll.getById(1).pointer).toBe(null)
  })

  it('reverse empty ll', () => {
    const ll = new LinkedList()
    ll.reverse()
    expect(ll.getHead()).toBe(null)
    expect(ll.getTail()).toBe(null)
  })

  it('reverse ll', () => {
    const ll = new LinkedList(14)
    ll.push(9)
    ll.push(36)
    ll.push(22)
    ll.push(11)
    ll.push(7)
    ll.unshift(23)
    ll.push(3)
    ll.insert(8,12)
    ll.insert(3, 17)
    ll.reverse()
    expect(ll.getTail().value).toBe(23)
    expect(ll.getHead().value).toBe(12)
    expect(ll.getById(0).value).toBe(12)
    expect(ll.getById(9).value) .toBe(23)
  })
})
