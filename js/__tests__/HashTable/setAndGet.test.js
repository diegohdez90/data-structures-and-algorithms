import { HashTable } from "../../classes";

describe('hashtable', () => {
  it('undefined', () => {
    var hashTable = new HashTable()
    var item = hashTable.get('tickets')
    expect(item).toBeUndefined();
  });

  it('exist key', () => {
    var hashTable = new HashTable()
    var res = hashTable.set('tickets', 300)
    var item = hashTable.get('tickets')
    expect(item).toBe(300);    
  });

  it('multiple', () => {
    var hashTable = new HashTable()
    var students = hashTable.set('students', 790)
    var teachers = hashTable.set('teachers', 18)
    var classrooms = hashTable.set('classrooms', 23)
    var aisle = hashTable.set('aisle', 15)
    var building = hashTable.set('buildings', 9)
    var parkingSlots = hashTable.set('parkingSlots', 32)
    var teachersValue = hashTable.get('teachers')
    expect(teachersValue).toBe(18);
    var aisleValue = hashTable.get('aisle')
    expect(aisleValue).toBe(15);
    var director = hashTable.get('director')
    expect(director).toBeUndefined();
  });
})
HashTable