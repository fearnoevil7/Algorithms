class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const n1 = new Node(16);

class Queue {
    constructor(Node) {
        this.head = Node;
        this.tail = Node;
    }
}

Queue.prototype.printQueue = function() {
    var currentNode = this.head;
    var count = 0;
    while(currentNode.next != null) {
        count++;
        console.log("Count: ", count, "Value: ", currentNode.value);
        currentNode = currentNode.next;
    };
    count++;
    console.log("Count: ", count, "Value: ", currentNode.value);
};

Queue.prototype.enque = function(val) {
    var currentNode = this.head;
    if(this.head != this.tail) {
        while(currentNode.next != null) {
            currentNode = currentNode.next;
        };
        currentNode.next = new Node(val);
        this.tail = currentNode.next;
    } else {
        currentNode.next = new Node(val);
        this.tail = currentNode.next;
    }
};

Queue.prototype.deque = function() {
    this.head = this.head.next;
};

const Queue1 = new Queue(n1);
Queue1.enque(25);
Queue1.enque(34);
Queue1.enque(43);
Queue1.enque(52);


console.log(Queue1);

Queue1.printQueue();

Queue1.deque();

Queue1.enque(700);

Queue1.enque(7000);
console.log("\n\n\n\n")
Queue1.printQueue();

