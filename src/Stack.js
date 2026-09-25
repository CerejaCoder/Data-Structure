export default class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    } 

    pop(){
        let num = this.peek()
        this.count--;
        delete this.items[this.count];
        return num;
    }

    peek(){
        return this.items[this.count - 1];
    }

    isEmpty(){
        return this.count === 0;
    }

    size(){
        return this.count;
    }

    clear(){
        this.count = 0;
        this.items = {};
    }

}