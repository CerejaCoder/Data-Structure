export class Node{
    constructor(value){
        this.value = value;
        this.next = undefined;
        this.previous = undefined;
    }
}

export class DoubleLinkedlist{
    constructor(){
        this.count = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    addFront(node){
        if (this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        
        this.count++;
        return this.count;
    }

    addBack(node){
        if (this.isEmpty()){
            this.head = node;
            this.tail = node; 
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.count++;
        return this.count;
    }

    removeFront(){
        if (this.isEmpty()) return undefined;
        
        const node = this.head;
        this.count--;

        if (this.isEmpty()){
            this.clear();
        } else {
            this.head = this.head.next;
            this.head.previous = undefined;
        }

        return node;
    }

    removeBack(){
        if (this.isEmpty()) return undefined;
        
        const node = this.tail;
        this.count--;

        if (this.isEmpty()){
            this.clear();
        } else {
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }

        return node;
    }

    insertAt(node, index){
        if (index < 0 || index > this.size()) return undefined;
        else if (index === 0) return this.addFront(node);
        else if (index === this.size()) return this.addBack(node);
        
        let lastNode = this.head;
        for (let i = 1; i < index; i++){
            lastNode = lastNode.next;
        }
        node.next = lastNode.next;
        node.previous = lastNode;

        lastNode.next.previous = node;
        lastNode.next = node;
            
        this.count++;

        return this.count;
    }

    removeAt(index){
        if (index < 0 || index >= this.size() || this.isEmpty()) return undefined;
        else if (index === 0) return this.removeFront();
        else if (index === this.size() - 1) return this.removeBack();
        
        let node = this.head;

        for (let i = 1; i < index; i++){
            node = node.next;
        }

        const nodeRemoved = node.next;
        node.next = node.next.next;
        node.next.previous = node;

        this.count--;

        return nodeRemoved;
    }

    remove(node){
        if (this.isEmpty()) return undefined;
        else if (this.head.value === node.value) return this.removeFront();

        let nodeTest = this.head;

        for (let i = 0; i < this.size(); i++){
            if (nodeTest.value === node.value){
                if (i === this.size() - 1) return this.removeBack();
                
                nodeTest.previous.next = nodeTest.next;
                nodeTest.next.previous = nodeTest.previous;

                this.count--;

                return nodeTest;
            }

            nodeTest = nodeTest.next;
        }

        return undefined;
    }

    indexOf(node){
        let nodeTest = this.head;

        for (let i = 0; i < this.size(); i++){
            if (nodeTest.value === node.value){
                return i;
            }

            nodeTest = nodeTest.next;
        }

        return -1;
    }

    peekFront(){
        return this.head;
    }

    peekBack(){
        return this.tail;
    }

    clear(){
        this.count = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.size() === 0;
    }

    toString(){
        if (this.isEmpty()) return '';

        let node = this.head;
        let string = `${node.value}`;

        for (let i = 1; i < this.size(); i++){
            node = node.next;
            string += `, ${node.value}`;
        }

        return string;
    }
}