export default class Queue{
    constructor(){
        this.count = 0;
        this.firstIndex = 0;
        this.items = {};
    }

    enqueue(element){
        this.items[this.firstIndex + this.count] = element;
        this.count++;
    }

    dequeue(){
        if (this.isEmpty()){
            return undefined;
        }

        let num = this.front();
        delete this.items[this.firstIndex];

        this.firstIndex++;
        this.count--;

        return num;
    }

    front(){
        return this.items[this.firstIndex];
    }

    isEmpty(){
        return this.count === 0;
    }

    size(){
        return this.count;
    }
}