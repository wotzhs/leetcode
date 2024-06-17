class RandomizedSet {
    private record;
    private values;
    constructor() {
        this.record = {};
        this.values = [];
    }

    insert(val: number): boolean {
        if (val === undefined) {
            return false
        }
        if (this.record[val]) {
            return false
        }
        this.record[val] = true;
        this.values.push(val);
        return true
    }

    remove(val: number): boolean {
        if (val === undefined) {
            return false
        }
        if (this.record[val]) {
            delete this.record[val]
            for (var i=0; i<this.values.length; i++) {
                if (this.values[i] === val) {
                    this.values = [...this.values.slice(0,i), ...this.values.slice(i+1, this.values.length)];
                }
            }
            return true;
        }

        return false
    }

    getRandom(): number {
        const max = this.values.length
        return this.values[Math.floor(Math.random()*max)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
