class Node {
    constructor(val, next) {
        this.value = val;
        this.next = next;
        next === null ? true : this.next = null;
    }
};
const n1 = new Node(16);
console.log(n1);

class Stack {
    constructor(Node) {
        this.head = Node;
        Node ? true : this.head = null;
    }
};

Stack.prototype.push = function(val) {
    var currentNode = this.head;
    var newNode = new Node(val);
    if(this.currentNode === null) {
        this.head = newNode;
    } else {
        newNode.next = currentNode;
        this.head = newNode;
    };
};

Stack.prototype.pop = function() {
    this.head = this.head.next;
};

Stack.prototype.printStack = function() {
    var currentNode = this.head;
    var count = 0;
    while(currentNode != null) {
        count++
        console.log("Count: ", count, " Value: ", currentNode.value);
        currentNode = currentNode.next;
    };
};

const stack1 = new Stack(n1);
stack1.push(25);
stack1.push(34);
stack1.push(43);
stack1.pop();
stack1.push(7000);
stack1.push(700);
console.log(stack1, "\n\n\n");
stack1.printStack();


