class HashTable {
  constructor (size) {
    this.data = new Array(size);
  }

  _hash (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;      
    }
    return hash;
  }

  set (key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get (key) {
    let value = undefined
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        const element = currentBucket[i][0];
        if (element === key) value = currentBucket[i][1]
      }
    } 
    return value;
  }

  keys () {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else {
          keysArray.push(this.data[i][0]);
        }
      } 
    }
    return keysArray;
  }
}

export default HashTable;