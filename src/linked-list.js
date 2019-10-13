const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);

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

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
