// Day 16: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197418

// Activity 1: Basic Recursion
// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
// Activity 2: Recursion with Arrays
// • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
// • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
// Activity 3: String Manipulation with Recursion
// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
// Activity 4: Recursive Search
// • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
// • Task 8.
// • Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
// Activity 5: Tree Traversal (Optional)
// • Task 9.
// • Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

// task1:
function task1(num: number): number {
  if (num <= 1) return 1;
  return num * task1(num - 1);
}
console.log("> task1:", task1(5));
console.log("> task1:", task1(7));

// task2:
function task2(num: number): number {
  if (num <= 1) return num;
  return task2(num - 1) + task2(num - 2);
}
console.log("> task2:", task2(5));
console.log("> task2:", task2(10));

// task3: [1,2,3,4,5]
function task3(arr: number[]): number {
  if (arr.length < 1) return 0;

  return arr[0] + task3(arr.slice(1));
}
console.log("> task3:", task3([1, 2, 3, 4, 5]));

// task4:
function task4(arr: number[]): number {
  if (arr.length < 1) return 0;
  if (arr.length === 1) return arr[0];

  if (arr[0] > task4(arr.slice(1))) {
    return arr[0];
  } else {
    return task4(arr.slice(1));
  }
}
console.log("> task4:", task4([1, 2, 3, 4, 5]));

// task5:
function task5(str: string): string {
  if (str.length < 1) return "";
  if (str.length === 1) return str;

  const firstChar = str.charAt(0);
  return task5(str.slice(1)).concat(firstChar);
}
console.log("> task5:", task5("abcdef"));

// task6: "racecar"
function task6(str: string): boolean {
  if (str.length <= 1) return true;
  const len = str.length;

  if (str[0] === str[len - 1]) {
    return task6(str.slice(1, len - 1));
  } else {
    return false;
  }
}
console.log("> task6:", task6("racecar"));
console.log("> task6:", task6("hello"));
console.log("> task6:", task6("madam"));

// task7:
function task7(
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1
): number {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return task7(arr, target, left, mid - 1);
  } else {
    return task7(arr, target, mid + 1, right);
  }
}
console.log("> task7:", task7([1, 2, 3, 4, 5], 4));
console.log("> task7:", task7([1, 2, 3, 4, 5], 6));

// task8:
function task8(arr: number[], target: number, count: number = 0): number {
  if (arr.includes(target)) {
    count++;
    const index = arr.indexOf(target);
    arr.splice(index, 1);
    return task8(arr, target, count);
  }
  return count;
}
console.log("> task8:", task8([1, 5, 5, 4, 5], 5));

// task9:
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

function task9(node: TreeNode | null) {
  if (node !== null) {
    task9(node.left);
    console.log(node.value);
    task9(node.right);
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("> task9: In-order traversal:");
task9(root);

// task10:
function task10(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }

  const leftTree = task10(node.left);
  const rightTree = task10(node.right);

  return 1 + Math.max(leftTree, rightTree);
}

console.log("> task10: Depth of the tree:", task10(root));

export {};
