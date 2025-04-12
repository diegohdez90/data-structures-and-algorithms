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
}

export default HashTable;
