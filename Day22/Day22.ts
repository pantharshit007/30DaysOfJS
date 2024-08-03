// Day 22: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197455

// task1:
//! done on Leetcode : https://leetcode.com/problems/add-two-numbers/submissions/1342749285
var addTwoNumbers = function (l1: number[], l2: number[]) {};

// task2:
var lengthOfLongestSubstring = function (s: string) {
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
};
console.log("> task2:", lengthOfLongestSubstring("cadbzabcd"));

// task3:
var maxArea = function (height: number[]) {
  let maxStore = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const smallerSide = Math.min(height[l], height[r]);
    const curr = smallerSide * (r - l);
    maxStore = Math.max(curr, maxStore);

    // Move the pointer pointing to the smaller height
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxStore;
};
console.log("> task3:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// task4:
function threeSum(nums: number[]): number[][] {
  let res = [];
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    // we will skip since 2 continuous num will produce same res
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let summ = nums[i] + nums[l] + nums[r];

      if (summ > 0) {
        r--;
      } else if (summ < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        // check notes
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return res;
}
console.log("> task4:", threeSum([-2, 0, 0, 2, 2]));
console.log("> task4:", threeSum([-1, 0, 1, 2, -1, -4]));

function groupAnagrams(strs: string[]): string[][] {
  const hash = new Map();
  const res: string[][] = [];

  for (let i of strs) {
    let count = Array(26).fill(0);
    for (let word of i) {
      const charVal = word.charCodeAt(0) - "a".charCodeAt(0);
      count[charVal]++;
    }

    const key = count.join("-");
    if (hash.has(key)) {
      hash.get(key).push(i);
    } else {
      hash.set(key, [i]);
    }
  }

  // console.log(hash);
  // Convert the values of the map to an array
  hash.forEach((value) => res.push(value));
  return res;
}
console.log("> task5:",groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
console.log("> task5:", groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
