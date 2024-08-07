import LinkedList from "../classes/index.js";

describe('set value', () => {
    it('insert by index', () => {
        const ll = new LinkedList()
        ll.push(13)
        ll.push(47)
        ll.push(31)
        ll.push(16)
        ll.push(7)
        ll.push(23)
        ll.push(18)
        ll.push(37)
        expect(ll.getLength()).toBe(8)
        expect(ll.getById(2).value).toBe(31)
        ll.insert(2, 22)
        expect(ll.getById(2).value).toBe(22)
        expect(ll.getLength()).toBe(9)
    })
    it('insert at the beginning', () => {
        const ll = new LinkedList()
        ll.push(13)
        ll.push(47)
        ll.push(31)
        ll.push(16)
        ll.push(7)
        ll.push(23)
        ll.push(18)
        ll.push(37)
        expect(ll.getLength()).toBe(8)
        expect(ll.getById(2).value).toBe(31)
        ll.insert(0, 22)
        expect(ll.getById(0).value).toBe(22)
        expect(ll.getHead().value).toBe(22)
        expect(ll.getLength()).toBe(9)
    })

    it('insert as last element', () => {
        const ll = new LinkedList()
        ll.push(13)
        ll.push(47)
        ll.push(31)
        ll.push(16)
        ll.push(7)
        ll.push(23)
        ll.push(18)
        ll.push(37)
        expect(ll.getLength()).toBe(8)
        expect(ll.getById(7).value).toBe(37)
        ll.insert(8, 22)
        expect(ll.getLength()).toBe(9)
        expect(ll.getById(7).pointer.value).toBe(22)
        expect(ll.getById(8).value).toBe(22)
        expect(ll.getTail().value).toBe(22)
        ll.insert(8, 15)
        expect(ll.getLength()).toBe(10)
        expect(ll.getById(9).value).toBe(22)
        expect(ll.getById(8).pointer.value).toBe(22)
        expect(ll.getTail().value).toBe(22)
        expect(ll.getById(7).pointer.value).toBe(15)

    })

})