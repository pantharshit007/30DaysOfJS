// Day 23: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197463

// ctivity 1: Median of Two Sorted Arrays
// • Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// o Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// o Log the median for a few test cases, including edge cases.
// ctivity 2: Merge k Sorted Lists
// • Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// o Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// o Create a few test cases with linked lists and log the merged list.
// ctivity 3: Trapping Rain Water
// • Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// o Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// o Log the amount of trapped water for a few test cases.
// ctivity 4: N-Queens
// • Task 4: Solve the "N-Queens" problem on LeetCode.
// o Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// o Log the distinct solutions for a few test cases.
// ctivity 5: Word Ladder
// • Task 5: Solve the "Word Ladder" problem on LeetCode.
// o Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter
// can be changed at a time and each transformed word must exist in the word list.
// o Log the length of the shortest transformation sequence for a few test cases.

// task1:
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let A = nums1, B = nums2
    const len = nums1.length+nums2.length
    const half = Math.floor(len/2)
    
    if (A.length > B.length){
        [A,B]=[B,A] //MAKE SMALLER ARR AS A
    }

    let l = 0, r = A.length-1

    while(true){
        let midA = Math.floor((l+r)/2)  //A
        let midB =  half - midA - 2     //B

        const Aleft = midA>=0 ? A[midA] : -Infinity
        const Aright = midA+1 < A.length ? A[midA+1] : Infinity
        const Bleft = midB >= 0 ? B[midB] : -Infinity
        const Bright = midB+1 < B.length ? B[midB+1] : Infinity

        if (Aleft <= Bright && Bleft <= Aright){
            // odd 
            if (len%2) return Math.min(Aright, Bright)
            // even
            return (Math.max(Aleft,Bleft)+ Math.min(Aright,Bright))/2

        }else if (Aleft > Bright){
            r = midA-1
        }else{  //Bleft > Aright
            l = midA+1
        }
    }
};
console.log('> task1:',findMedianSortedArrays([1,2],[3,4]))
console.log('> task1:',findMedianSortedArrays([],[1]))

// task2:
//! Done on leetcode: https://leetcode.com/problems/merge-k-sorted-lists/submissions/1344558975

// task3:
function trap(height:number[]) {
    let count = 0
    const n = height.length

    if (n === 0) return 0; 

    let prefix = new Array(n).fill(0);  
    let suffix = new Array(n).fill(0);

    prefix[0] = height[0]; 
    for (let i = 1; i < n; i++) {
        prefix[i] = Math.max(prefix[i - 1], height[i]);
    }

    suffix[n - 1] = height[n - 1]; 
    for (let j = n - 2; j >= 0; j--) {
        suffix[j] = Math.max(suffix[j + 1], height[j]);
    }

    for (let i=1; i<n-1; i++){
        // const maxL = Math.max(...height.slice(0,i))
        // const maxR = Math.max(...height.slice(i+1))

        const maxL = prefix[i]
        const maxR = suffix[i]

        if (height[i]< maxL && height[i]< maxR){
            const val = Math.min(maxL, maxR)- height[i]
            count += val
        }
    }

    return count
};

console.log('> task3:',trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log('> task3:',trap([4,2,0,3,2,5]))

// task4:
// task5:

//! rest in peace for now 