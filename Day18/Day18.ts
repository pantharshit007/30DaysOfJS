// Day 18: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197432

// Activity 1: Sorting Algorithms
// • Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
// • Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
// • Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
// Activity 2: Searching Algorithms
// • Task 4:
// Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
// • Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
// Activity 3: String Algorithms
// • Task 6.
// • Write a function to count the occurrences of each character in a string. Log the character counts.
// • Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
// Activity 4: Array Algorithms
// • Task 8: Write a function to rotate an array by k positions. Log the rotated array.
// • Task 9.
// • Write a function to merge two sorted arrays into one sorted array. Log the merged array.
// Activity 5: Dynamic Programming (Optional)
// • Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
// • Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

// task1:
function bubbleSort(arr: number[], size: number) {
  // 0--> n-3
  console.log("> task1: Unsorted:", arr);

  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("> task1: sorted:", arr);
}
bubbleSort([10, 1, 7, 6, 14, 9], 6);
console.log("TC: O(n^2)");

// task2:
function selectionSort(arr: number[], size: number) {
  console.log("> task2: Unsorted:", arr);

  for (let i = 0; i < size - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < size - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  console.log("> task2: Unsorted:", arr);
}
selectionSort([10, 1, 7, 6, 14, 9], 6);
console.log("TC: O(n^2)");

// task3:
function quickSort(arr: number[], low: number, high: number) {
  if (low < high) {
    const j = partition(low, high);
    quickSort(arr, low, j - 1);
    quickSort(arr, j + 1, high);
  }
  return arr;

  function partition(low: number, high: number) {
    const pivot = arr[low];

    // i-----p-----j
    let i = low;
    let j = high;

    while (i < j) {
      // update i idx until i>pivot
      while (i <= high && arr[i] <= pivot) i++;
      while (j >= low && arr[j] > pivot) j--;

      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j; //pivot elem
  }
}

const arr = [10, 16, 8, 12, 15, 6, 3, 9, 5];
const low = 0;
const high = arr.length - 1;
console.log("> task3 Unsorted: ", arr);
console.log("> task3 Sorted: ", quickSort(arr, low, high));

// task4:
function linearSearch(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log("> task4 linear:", i);
    }
  }
}
linearSearch(arr, 9);

// task5:
function binarySearch(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + (high - low) / 2;

    if (arr[mid] === target) {
      console.log("> Index: " + mid);
      return;
    } else if (arr[mid] < target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
}
console.log("> task5 sorted:", arr);
binarySearch(arr, 9);

// task6:
function task6(str: string) {
  const hash = new Map();

  for (let i = 0; i < str.length; i++) {
    if (hash.has(str[i])) {
      hash.set(str[i], hash.get(str[i]) + 1);
    } else {
      hash.set(str[i], 1);
    }
  }

  hash.forEach((value, key) => {
    console.log(key, "->", value);
  });
}
task6("helloeveryone");

// • Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function task7(s: string) {
  if (!s.length) return 0;

  const len = s.length;
  let l = 0,
    r = 0;
  const hash: { [key: string]: number } = {};
  let maxLen = -Infinity;

  while (r < len) {
    if (hash.hasOwnProperty(s[r])) {
      if (hash[s[r]] >= l) {
        l = hash[s[r]] + 1;
      }
    }

    hash[s[r]] = r;
    const len = r - l + 1;
    maxLen = Math.max(len, maxLen);
    r++;
  }
  return maxLen;
}
console.log("> task7:", task7("cadbzabcd"));

// task8:
// {1,2,3,4,5,6,7} , k=2
//  3, 4, 5, 6,7, 1, 2

function task8(arr: number[], k: number, position: string) {
  if (k === 0) return arr;
  if (!arr.length || arr.length === 1) return arr;

  while (k > 0) {
    let elem: number | undefined = 0;
    if (position === "left") {
      elem = arr.shift();
      // @ts-ignore
      arr.push(elem);
    } else {
      elem = arr.pop();
      // @ts-ignore
      arr.unshift(elem);
    }
    k--;
  }
  return arr;
}
console.log("> task8:", task8([1, 2, 3, 4, 5, 6, 7], 2, "left"));
console.log("> task8:", task8([1, 2, 3, 4, 5, 6, 7], 2, "right"));

// ANOTHER METHOD IS TO MAKE A REVERS FUNC
// AND PASS ARR IN 3 PARTS TO IT
// FIRST: [0,k-1]
// SECOND: [k,n]
// THIRD: [0,n]

//! PENDING OPTIONAL

export {};
