class Set{
    constructor(){
        this.items = {};
    }

    add(value){
        if (this.has(value)) return false;
        
        this.items[value] = value;
        return true;
    }

    remove(value){
        if (!this.has(value)) return false;

        delete this.items[value];
        return true;
    }

    has(value){
        return Object.hasOwn(this.items, value);
    }

    values(){
        return Object.values(this.items);
    }

    union(set){
        const newSet = new Set();
        
        this.values().forEach((value) => newSet.add(value));
        set.values().forEach((value) => newSet.add(value));
        
        return newSet;
    }

    intersection(set){
        const newSet = new Set();

        this.values().forEach((value) => {
            if (set.has(value)) newSet.add(value)
        });

        return newSet;
    }

    difference(set){
        const newSet = new Set();

        this.values().forEach((value) => {
            if (!set.has(value)) newSet.add(value)
        });

        return newSet;
    }

    isSubsetOf(set){
        if (this.size() > set.size()) return false;

        return this.values().every((value) => set.has(value));
    }

    clear(){
        this.items = {};
    }

    size(){
        return this.values().length;
    }

    isEmpty(){
        return this.size() === 0;
    }
}