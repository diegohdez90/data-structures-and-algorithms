import { BinarySearchTree } from "../../classes";

describe('insert', () => {
  it('insert root', () => {
    var bst = new BinarySearchTree()
    bst.insert(47)
    expect(bst.root.value).toBe(47)
  })

  it('add child', () => {
    var bst = new BinarySearchTree()
    bst.insert(47)
    bst.insert(76)
    expect(bst.root.right.value).toBe(76)
  })

  it('add 27', () => {
    var bst = new BinarySearchTree()
    bst.insert(47)
    bst.insert(76)
    bst.insert(52)
    bst.insert(21)
    bst.insert(82)
    bst.insert(18)
    var result = bst.insert(27)
    expect(result).toBeTruthy()
    expect(bst.root.left.right.value).toBe(27)
  })
})
