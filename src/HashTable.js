import {Linkedlist, Node} from './LinkedList.js';

export function toStringFn(value){
    if (typeof value === 'string') return value;
    else if (value === null) return 'NULL';
    else if (value === undefined) return 'UNDEFINED';

    return value.toString();
}

export class ValuePair{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

export class HashTable{
    constructor(toStrFn = toStringFn){
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

        if (!this.table[hash]) this.table[hash] = new Linkedlist();

        let current = this.table[hash].head;

        while (current){
            if (current.value.key === key){
                current.value = valuePair;

                return true;
            }
                
            current = current.next;
        }
        
        const node = new Node(valuePair);
        this.table[hash].addFront(node);

        return true;
    }

    remove(key){
        if (key != null){
            const hash = this.getHash(key);

            if (this.table[hash]){
                let current = this.table[hash].head;

                for (let i = 0; current; i++){
                    if (current.value.key === key){
                        this.table[hash].removeAt(i);
                        if (this.table[hash].isEmpty()) delete this.table[hash];
                        return true;
                    }
                    
                    current = current.next;
                }
            }
        }

        return false;
    }

    get(key){
        if (key != null){
            const hash = this.getHash(key);

            if (this.table[hash]){
                let current = this.table[hash].head;

                while (current){
                    if (current.value.key === key) return current.value.value;
                    current = current.next;
                }
            }
        }

        return undefined;
    }
}