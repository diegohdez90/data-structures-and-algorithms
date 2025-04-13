import { HashTable } from "../../classes";

describe('hashTable', () => {
  it('empty keys', () => {
    var hashTable = new HashTable()
    var keys = hashTable.keys()
    expect(keys.length).toBe(0);
  });

  it('one key', () => {
    var hashTable = new HashTable()
    hashTable.set('cars', 200)
    var keys = hashTable.keys()
    var isCars = keys.find(item => item === 'cars')
    expect(isCars).toBe('cars');
    var isBycicle = keys.find(item => item === 'bycicle')
    expect(isBycicle).toBeUndefined();
  });

  it('more keys', () => {
    var hashTable = new HashTable()
    hashTable.set('sedan', 115)
    hashTable.set('coupe', 172)
    hashTable.set('bicycle', 19)
    hashTable.set('motorcycle', 86)
    hashTable.set('SUV', 45)
    hashTable.set('Crossover', 79)
    hashTable.set('pick-up', 28)
    var keys = hashTable.keys()
    var sedan = keys.find(item => item === 'sedan')
    expect(sedan).toBe('sedan');
    var bicycle = keys.find(item => item === 'bicycle')
    expect(bicycle).toBe('bicycle');
    var motorcycle = keys.find(item => item === 'motorcycle')
    expect(motorcycle).toBe('motorcycle');
    var crossover = keys.find(item => item === 'Crossover')
    expect(crossover).toBe('Crossover');
  });
})