import LinkedList from "./classes/index.js";



describe('test ll', () => {
  it('ll is created with value 12', () => {
    const ll = new LinkedList(12)
    expect(ll.getHead().value).toBe(12)
    expect(ll.getTail().value).toBe(12)
    expect(ll.getLength()).toBe(1)
  })

  it('ll is created with value null', () => {
    const ll = new LinkedList()
    expect(ll.getHead()).toBeNull()
    expect(ll.getTail()).toBeNull()
    expect(ll.getLength()).toBe(0)
  })


  it('ll created with value, pop the value and must to be null', () => {
    const ll = new LinkedList(12)
    expect(ll.getLength()).toBe(1)
    ll.pop()
    expect(ll.getHead()).toBeNull()
    expect(ll.getTail()).toBeNull()
    expect(ll.getLength()).toBe(0)
  })

  it('ll created with value, add new value and get different head and tail', () => {
    const ll = new LinkedList(12)
    expect(ll.getLength()).toBe(1)
    ll.push(15)
    expect(ll.getHead().value).toBe(12)
    expect(ll.getTail().value).toBe(15)
    expect(ll.getLength()).toBe(2)
  })

	it('ll created with value, add new value, apply pop and return same tail and head', () => {
		const ll = new LinkedList(12)
		expect(ll.getLength()).toBe(1)
		ll.push(15)
		ll.pop()
		expect(ll.getHead().value).toBe(12)
		expect(ll.getTail().value).toBe(12)
		expect(ll.getLength()).toBe(1)
	})

  it('ll created with value, add unshift value', () => {
    const ll = new LinkedList(12)
    ll.unshift(7)
    expect(ll.getHead().value).toBe(7)
    expect(ll.getTail().value).toBe(12)
    expect(ll.getLength()).toBe(2)
  })

  it('ll created with value, add new value via push, and apply shift', () => {
    const ll = new LinkedList(12)
    ll.push(15)
    expect(ll.getHead().value).toBe(12)
    expect(ll.getTail().value).toBe(15)
    ll.shift()
    expect(ll.getLength()).toBe(1)
    expect(ll.getHead().value).toBe(15)
    expect(ll.getTail().value).toBe(15)
  })


})
