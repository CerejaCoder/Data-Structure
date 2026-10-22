function toString(value){
    if (typeof value === 'string') return value;

    return value.toString();
}

export class ValuePair{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

export class HashTable{
    constructor(toStrFn = toString){
        this.table = {};
        this.toStrFn = toStrFn;
    }

    loseloseHash(key){
        const value = this.toStrFn(key);
        let hash = 0;
        
        for (let i = 0; i < value.length; i++){
            hash += value.charCodeAt(i);
        }

        return hash % 41;
    }

    getHash(key){
        return this.loseloseHash(key);
    }

    put(key, value){
        if (key == null || value == null) return false;

        const valuePair = new ValuePair(key, value);
        const hash = this.getHash(key);

        this.table[hash] = valuePair;

        return true;
    }

    remove(key){
        if (key == undefined) return false;
        
        const hash = this.getHash(key);

        if (this.table[hash] == undefined) return false;
        
        delete this.table[hash];
        return true;
    }

    get(key){
        const hash = this.getHash(key);
        return this.table[hash] != undefined ? this.table[hash].value : undefined;
    }
}