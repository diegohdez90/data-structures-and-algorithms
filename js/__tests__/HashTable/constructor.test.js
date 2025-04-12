import { HashTable } from "../../classes";

describe('hash table', () => {
  it('constructor', () => {
    var hashTable = new HashTable(7)
    expect(hashTable.dataMap.length).toBe(7)
  });
})