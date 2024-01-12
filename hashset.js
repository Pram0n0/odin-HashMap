class HashSet {
    constructor(bucketSize) {
        this.bucketSize = bucketSize;
        this.buckets = new Array(bucketSize);
    }
  
    hash(key) {
        let hashCode = 0;
    
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        hashCode = hashCode % this.bucketSize;
    
        return hashCode;
    }

    set(key) {
      const hashedKey = this.hash(key);
      if (!this.buckets[hashedKey]) {
        this.buckets[hashedKey] = [];
      }
      if (!this.has(key)) {
        this.buckets[hashedKey].push({ key });
      }
    }
  
    has(key) {
      const hashedKey = this.hash(key);
      if (this.buckets[hashedKey]) {
        for (let i = 0; i < this.buckets[hashedKey].length; i++) {
          if (this.buckets[hashedKey][i].key === key) {
            return true;
          }
        }
      }
      return false;
    }
  
    remove(key) {
      if (this.has(key)) {
        const hashedKey = this.hash(key);
        for (let i = 0; i < this.buckets[hashedKey].length; i++) {
          if (this.buckets[hashedKey][i].key === key) {
            this.buckets[hashedKey].splice(i, 1);
          }
        }
      }
    }
  
    length() {
      let count = 0;
      for (let i = 0; i < this.bucketSize; i++) {
        if (this.buckets[i] != undefined) {
          count += this.buckets[i].length;
        }
      }
      return count;
    }
  
    clear() {
      this.buckets = new Array(this.bucketSize);
    }
  
    entries() {
      let entries = [];
      for (let i = 0; i < this.bucketSize; i++) {
        if (this.buckets[i] != undefined) {
          for (let j = 0; j < this.buckets[i].length; j++) {
            entries.push({ key: this.buckets[i][j].key });
          }
        }
      }
      return entries;
    }
  }