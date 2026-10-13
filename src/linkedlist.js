class Node{
    constructor(value){
        this.value = value;
        this.next = undefined;
    }
}

class Linkedlist{
    constructor(){
        this.head = undefined;
        this.count = 0;
    }

    addFront(node){
        if (this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.count++;
        return this.count;
    }

    addBack(node){
        if (this.isEmpty()){
            this.head = node;
        } else {
            let lastNode = this.head;
            for(let i = 0; i < this.size() - 1; i++){
                lastNode = lastNode.next;
            }

            lastNode.next = node;
        }
        this.count++;

        return this.count;
    }

    insertAt(node, index){
        if (index < 0 || index > this.count){
            return undefined;
        } else if (index === 0){
            node.next = this.head;
            this.head = node;
        } else {
            let lastNode = this.head;

            for (let i = 1; i < index; i++){
                lastNode = lastNode.next;
            }

            let nextNode = lastNode.next;
            node.next = nextNode;
            lastNode.next = node;
        }   
        
        this.count++;

        return this.count;
    }

    removeFront(){
        if (this.isEmpty()){
            return undefined;
        } 
        
        let node = this.head;
        this.head = node.next;
        this.count--;

        return node;
    }

    removeBack(){
        if (this.isEmpty()){
            return undefined;
        } else if (this.size() === 1){
            let node = this.head;
            this.head = undefined;
            this.count--;
            return node;
        }

        let node = this.head;

        for (let i = 1; i < this.size() - 1; i++){
            node = node.next;
        }

        let nextNode = node.next;
        node.next = undefined;
        this.count--;

        return nextNode;
    }

    removeAt(index){
        if (this.isEmpty() || index < 0 || index >= this.size()){
            return undefined;
        } else if (this.size() === 1 || index === 0){
            return this.removeFront();
        }
        let lastNode = this.head;
        this.count--;

        for (let i = 1; i < index; i++){
            lastNode = lastNode.next;
        }

        let node = lastNode.next;
        let nextNode = node.next;
        lastNode.next = nextNode;


        return node;
    }

    contains(value){
        if (this.isEmpty()) return false;
        else if (value === this.head.value) return true;

        let node = this.head;

        for (let i = 1; i < this.size(); i++){
            node = node.next;

            if (node.value === value) return true;
        }
        
        return false;
    }

    getElementAt(index){
        if (index < 0 || index >= this.size()){
            return undefined;
        }
        let node = this.head;

        for (let i = 0; i < index; i++){
            node = node.next;
        }

        return node;
    }

    indexOf(value){
        if (this.isEmpty()) return -1;

        let node = this.head;

        for (let i = 0; i < this.size(); i++){
            if (node.value === value){
                return i;
            }
            node = node.next;
        }

        return -1;
    }

    toString(){
        if (this.isEmpty()){
            return '';
        }

        let node = this.head;
        let objString = `${node.value}`;

        for (let i = 1; i < this.size(); i++){
            node = node.next;
            objString += `, ${node.value}`;
        }
        
        return objString;
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.count;
    }

    clear(){
        this.count = 0;
        this.head = undefined;
    }
}