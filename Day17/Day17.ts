// Day 17: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197429

// Activity 1: Linked List
// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next .
// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
// Activity 2: Stack
// • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
// • Task 4.
// • Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
// Activity 3: Queue
// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
// • Task 6.
// • Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
// Activity 4: Binary Tree
// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value , left , and right .
// • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
// Activity 5: Graph (Optional)
// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

// task1:
class Node {
  value: number;
  next: Node | null;

  constructor(value: number, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}

// task2:
class Node1 {
  value: number;
  next: Node1 | null;

  constructor(value: number, node: Node1 | null = null) {
    this.value = value;
    this.next = node;
  }
}

class LinkedList {
  head: Node1 | null = null;

  add(value: number): void {
    const newNode = new Node1(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  remove(): void {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    // if curr and temp->next is not null
    let temp = this.head;
    while (temp.next && temp.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  printList(): void {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value + " ");
      temp = temp.next;
    }
  }
}

const list = new LinkedList();
list.add(2);
list.add(3);
list.add(4);

console.log("Linked list:");
list.printList();
list.add(1);
console.log("Linked list:");
list.printList();
list.remove();
console.log("Linked list:");
list.printList();

// task3:
class Stack {
  stack: (number | string)[];

  constructor() {
    this.stack = [];
  }

  push(elem: number | string): void {
    this.stack.push(elem);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    const top = this.stack[this.stack.length - 1];
    console.log(top);
  }
}

const stack = new Stack();
console.log("> task3: stack");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log("> task3: peek");
stack.peek();
stack.pop();
console.log("> task3: pop");
stack.peek();

// task4:
function task4(str: string) {
  const stack = new Stack();
  let len = str.length;
  for (let i = 0; i < len; i++) {
    stack.push(str[i]);
  }

  let res = "";
  for (let i = 0; i < len; i++) {
    res += stack.pop();
  }
  return res;
}
console.log("> task4: ", task4("hello"));

// task5:
class Queue {
  queue: (number | string)[];

  constructor() {
    this.queue = [];
  }
  // queue: 1,2,3,4,...,8
  enqueue(value: number | string) {
    this.queue.push(value);
    return this.queue;
  }

  dequeue() {
    if (this.queue) {
      this.queue.shift();
    }
    this.queue;
  }

  front() {
    if (this.queue) {
      console.log("> queue:", this.queue);
      console.log(this.queue[0]);
    }
  }
}

const queue = new Queue();
console.log("> task5:");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.front();
queue.dequeue();
queue.front();

// task6:
function task6() {
  const queue = new Queue();
  queue.enqueue("Copy1");
  queue.enqueue("Copy2");
  const que = queue.enqueue("Copy3");

  const len = que.length;
  console.log("> task6 printing:");
  for (let i = 0; i < len; i++) {
    queue.front();
    queue.dequeue();
  }
}
task6();

// task7:
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    value: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
const leftChild = new TreeNode(2);
const rightChild = new TreeNode(3);
const root = new TreeNode(1);

root.left = leftChild;
root.right = rightChild;
console.log("Root:", root);

// task8:

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // if newNode is:4 and root:1 then we go to right
  private insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraverse(node: TreeNode | null = this.root): void {
    if (node !== null) {
      this.inOrderTraverse(node.left);
      console.log(node.value);
      this.inOrderTraverse(node.right);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(2);
binaryTree.insert(8);
binaryTree.insert(1);
binaryTree.insert(3);

console.log("> task8: BinaryTree: ");
binaryTree.inOrderTraverse();

//! pending: Optional

export {};
