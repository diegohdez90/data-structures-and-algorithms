import { BinarySearchTree } from "../../classes"

describe('find', () => {
  it('find in empty tree', () => {
    var bst = new BinarySearchTree()
    var result = bst.find(8)
    expect(result).toBeFalsy()
  })

  it('find in root tree', () => {
    var bst = new BinarySearchTree()
    bst.insert(43)
    var result = bst.find(43)
    expect(result).toBeTruthy()
  })

  it('find 27', () => {
    var bst = new BinarySearchTree()
    bst.insert(47)
    bst.insert(76)
    bst.insert(52)
    bst.insert(21)
    bst.insert(82)
    bst.insert(18)
    bst.insert(27)
    var result = bst.find(27)
    expect(result).toBeTruthy()
  })
})