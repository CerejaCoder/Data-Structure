export default class Deque{
    constructor(){
        this.items = {};
        this.count = 0;
        this.firstIndex = 0;
    }

    addFront(value){
        if (this.firstIndex > 0){
            this.firstIndex--;
            this.count++;
            this.items[this.firstIndex] = value;
        } else {
            for (let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1];
            }
            this.items[0] = value;
            this.count++;
        }
        
        return this.count;
    }

    removeFront(){
        if (this.count === 0){
            return undefined;
        } 

        const item = this.items[this.firstIndex];
        delete this.items[this.firstIndex];
        this.firstIndex++;
        this.count--;

        if (this.count === 0){
            this.firstIndex = 0;
        }

        return item;
    }

    addBack(value){
        this.items[this.firstIndex + this.count] = value;
        this.count++;

        return this.count;
    }

    removeBack(){
        if (this.count === 0){
            return undefined;
        } 

        this.count--;
        const item = this.items[this.firstIndex + this.count];
        delete this.items[this.firstIndex + this.count];
            
        if (this.count === 0){
            this.firstIndex = 0;
        }

        return item;
    }

    peekFront(){
        if (this.count === 0){
            return undefined;
        }

        return this.items[this.firstIndex];
    }

    peekBack(){
        if (this.count === 0){
            return undefined;
        }

        return this.items[this.firstIndex + this.count - 1];
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.size() === 0;
    }

    clear(){
        this.items = {};
        this.firstIndex = 0;
        this.count = 0;
        return this.items;
    }
}