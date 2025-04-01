import {TreeNode} from "../index.js";

class BinarySearchTree {
  constructor(value) {
    this.root = null
  }

  insert(value) {
    var node = new TreeNode(value)
    if (this.root == null) {
      this.root = node
      return this
    }
    let tmp = this.root
    while(true) {
      if (node.value === tmp.value)
        return false
      if (node.value < tmp.value) {
        if (tmp.left === null) {
          tmp.left = node
          return true
        }
        tmp = tmp.left
      } else {
        if (tmp.right === null) {
          tmp.right = node
          return true
        }
        tmp = tmp.right
      }
    }
  }

  find(value) {
    if (this.root === null) return false
    let tmp = this.root
    while(tmp) {
      if (value < tmp.value) {
        tmp = tmp.left
      } else if (value > tmp.value) {
        tmp = tmp.right
      } else {
        return true
      }
    }
    return false
  }
}

export default BinarySearchTree
