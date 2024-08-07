import LinkedList from "./classes/index.js";

describe('set value', () => {
    it('set existed index', () => {
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
    // it('set false for index not found', () => {
    //     const ll = new LinkedList()
    //     ll.push(13)
    //     ll.push(47)
    //     ll.push(31)
    //     ll.push(16)
    //     ll.push(7)
    //     ll.push(23)
    //     ll.push(18)
    //     ll.push(37)
    //     expect(ll.set(10, 33)).toBeFalsy()
    // })
})