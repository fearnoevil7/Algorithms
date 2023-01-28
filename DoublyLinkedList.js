class Node {
    constructor(val, next, previous) {
        this.value = val;
        if(next != null) {
            this.next = next;
        } else {
            this.next = null;
        };
        if(previous != null) {
            this.previous = previous;
        } else {
            this.previous = null;
        };
    };
};

class DoublyLinkedList {
    constructor(_node) {
        this.head = _node;
        this.capacity = 1;
    };
};

DoublyLinkedList.prototype.append = function(_node) {
    this.head.previous = _node;
    _node.next = this.head;
    this.head = _node;
    this.capacity++;
};

DoublyLinkedList.prototype.insertAt = function(_node, _index) {
    let ticker = 0;
    let currentNode = this.head;
    if(_index === this.capacity + 1) {
        this.append(_node);
    };
    while(currentNode.next != null) {
        ticker++;
        if(ticker === _index) {
            _node.next = currentNode;
            currentNode.previous.next = _node;
            _node.previous = currentNode.previous;
            currentNode.previous = _node;
            break;
        };
        currentNode = currentNode.next;
    };
    if(_index === this.capacity) {
        _node.next = currentNode;
        currentNode.previous.next = _node;
        _node.previous = currentNode.previous;
        currentNode.previous = _node;
    };
};

DoublyLinkedList.prototype.remove = function() {
    let currentNode = this.head;
    while(currentNode.next.next != null) {
        currentNode = currentNode.next;
    };
    currentNode.next = null;
};

DoublyLinkedList.prototype.get = function(val) {
    let currentNode = this.head;
    while(currentNode.next != null) {
        if(currentNode.value === val) {
            return currentNode;
        };
        currentNode = currentNode.next;
    };
    if(currentNode.value === val) {
        return currentNode;
    } else {
        return "The node you seek is not in this Doubly Linked List.";
    };
};

DoublyLinkedList.prototype.removeAt = function(val) {
    let currentNode = this.head;
    while(currentNode.next != null) {
        if(currentNode.value === val) {
            let removedNode = currentNode;
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous.next;
            return removedNode;
        };
        currentNode = currentNode.next;
    };
};

DoublyLinkedList.prototype.printVals = function() {
    let currentNode = this.head;
    while(currentNode.next != null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    };
    console.log(currentNode.value);

};

let n1 = new Node(7);
let n2 = new Node(14);
let n3 = new Node(21);
let n4 = new Node(3);

let Dll = new DoublyLinkedList(n1);

Dll.append(n2);
Dll.append(n3);

// Dll.printVals();
Dll.insertAt(n4, 3);
// console.log(Dll);
Dll.printVals();
Dll.remove();
console.log("\n");
Dll.printVals();
console.log(Dll.get(14));
console.log(Dll.get(3));
let n5 = new Node(700);
Dll.insertAt(n5, 3);
Dll.printVals();
console.log("Removing...   ", Dll.removeAt(14));
console.log("\n");
Dll.printVals();
