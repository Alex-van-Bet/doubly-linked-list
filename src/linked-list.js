const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node(data);

        if (this.length == 0) {
            this._head = newNode
            this._tail = newNode;
            this.length += 1;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
            this.length += 1;
        }
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {

        let actualNode = this._head;
        for (let i = 0; i != index; i++){
            actualNode = actualNode.next
        }
        return actualNode.data;
    }

    insertAt(index, data) { 
        let  actualNode = this._head; 
        let counter = 1;  
        let newNode = new Node(data); 
        
        if (index > this.length){
            return false
        }
        if (index == 0) { 
            this._head.prev = null; 
            newNode.next = this._head; 
            this._head = newNode; 
        } 
        else { 
            while (actualNode) {
                actualNode =  actualNode.next; 
                if (counter == index) { 
                    newNode.prev =  actualNode.prev; 
                    actualNode.prev.next = newNode; 
                    newNode.next =  actualNode; 
                    actualNode.prev = newNode; 
                    } 
                counter += 1; 
            }
        } 
    } 
        

    isEmpty() {
        if (this.length == 0){
            return  true;
        }
        else {
            return false;
        }
    }

    clear() { 
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        let actualNode = this._head; 
        let counter = 1;  
        
        if (index == 0) { 
            this._head = this._head.next; 
            this._head.prev = null; 
        }
        else { 
            while (actualNode) {
                actualNode =  actualNode.next;    
                if (actualNode == this._tail) { 
                    this._tail = this._tail.prev;   
                    this._tail.next = null;  
                } 
                else if (counter == index) { 
                    actualNode.prev.next = newNode.next; 
                    actualNode.next.prev = newNode.prex; 
                } 
                counter += 1; 
            }
        } 
    }


    reverse() {}

    indexOf(data) {
        
        let actualNode = this._head; 
        let counter = 0; 
        while (actualNode) { 
           if (actualNode.data === data) { 
               return counter; 
            } 
            actualNode = actualNode.next; 
            counter += 1; 
       } 
       return -1; 
    }
}

module.exports = LinkedList;
