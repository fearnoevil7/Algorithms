class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const n1 = new Node(100);
const n2 = new Node(200);
const n3 = new Node(300);
// console.log(n1);

class LinkedList {
    constructor(node) {
        this.head = node;
        // this.next = null;
        // this.size = 0;
    }
}


// Insert a node into the a linked list
LinkedList.prototype.insert = function(val) {
    var currentNode = this.head;
    // console.log(currentNode);
    while(currentNode.next != null) {
        // if(currentNode.next === null) {
        //     currentNode.next =
        // }
        currentNode = currentNode.next;
    }
    currentNode.next = new Node(val);
    // console.log("Testing!!!", currentNode);
}

// Insert node at a certain position
LinkedList.prototype.insert_At = function(insertVal, positionVal) {
    var _node = this.find(positionVal);
    var _newNode = new Node(insertVal);
    if (_node.next != null) {
        _newNode.next = _node.next;
        _node.next = _newNode;
        // console.log(_newNode);
        return _node;
    } else {
        this.insert(insertVal);
    }

}


// Find
LinkedList.prototype.find = function(val) {
    var currentNode = this.head;
    while(currentNode.next != null) {
        if(currentNode.value === val) {
            return currentNode;
        } else {
            currentNode = currentNode.next;
        }
    };
    return currentNode;
};

// Find previous node
LinkedList.prototype.previousNode = function(val) {
    var currentNode = this.head;
    while(currentNode.next != this.find(val)) {
        currentNode = currentNode.next;
    }
    return currentNode;
};

// Print all values

LinkedList.prototype.printAllValues = function() {
    var count = 0;
    var myValues = "\n";
    var currentNode = this.head;
    while(currentNode.next != null) {
        // console.log("Testing", currentNode.value);
        myValues = myValues + currentNode.value + "\n";
        count++;
        currentNode = currentNode.next;
    }
    myValues = myValues + currentNode.value + "\n";
    console.log(myValues);
    // console.log(count);
    
}

// Remove a node
LinkedList.prototype.removeNode_At = function(val) {
    var _currentNode = this.find(val);
    var _previousNode = this.previousNode(val);
    _previousNode.next = _currentNode.next;
};



const List1 = new LinkedList(n1);
List1.insert(200);
List1.insert(300);
List1.insert(400);
// console.log(List1);
console.log("Testing123", List1.insert_At(7, 200));
List1.insert_At(9, 400);
// List1.printAllValues();
List1.printAllValues();

console.log(List1.previousNode(300));

List1.removeNode_At(300);

List1.printAllValues();