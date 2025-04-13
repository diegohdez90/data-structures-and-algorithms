class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size)
  }

  _hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash = (hash + key.charCodeAt(index) * 23) % this.dataMap.length
    }
    return hash
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.dataMap[index]) {
      this.dataMap[index] = []
    }
    this.dataMap[index].push([key, value])
    return this;
  }

  get(key) {
    let index = this._hash(key)
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1]
        }
      }
    }
    return undefined
  }

  keys() {
    let allKeys = []
    for (let index = 0; index < this.dataMap.length; index++) {
      if (this.dataMap[index]) {
        for (let j = 0; j < this.dataMap[index].length; j++) {
          allKeys.push(this.dataMap[index][j][0])
        }
      }
    }
    return allKeys
  }
}

export default HashTable;
