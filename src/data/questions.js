const questions = [
  {
    num: 1,
    title: "Write a program to reverse an array or string",
    desc: "Given an array (or string), the task is to reverse the array/string.",
    diffLevel: "ez",
    testCases: [
      {
        input: "{1, 2, 3}",
        output: "{3, 2, 1}",
        hidden: false,
      },
    ],
  },
  {
    num: 2,
    title: "Find the maximum and minimum element in an array",
    desc: "Write a function to return minimum and maximum in an array. Your program should make the minimum number of comparisons",
    diffLevel: "ez",
    testCases: [
      {
        input: "{1000, 11, 445, 1, 330, 3000}",
        output: "1, 3000",
        hidden: false,
      },
    ],
  },
  {
    num: 3,
    title: "Kth smallest element ",
    desc: `Given an array <strong>arr[]</strong> and an integer <strong>K</strong> where K is smaller than size of array, 
          the task is to find the <strong>Kth smallest</strong> element in the given array. It is given that all array elements are distinct.`,
    diffLevel: "med",
    testCases: [
      {
        input: "{ 7, 10, 4, 3, 20, 15}, {3}",
        output: "1, 3000",
        hidden: false,
      },
      {
        input: "{ 7, 10, 4, 20, 15}, {4}",
        output: "15",
        hidden: false,
      },
    ],
  },
  {
    num: 4,
    title: "Sort an array of 0s, 1s and 2s",
    desc: "Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order (without using algo).",
    diffLevel: "ez",
    testCases: [
      {
        input: "{0, 2, 1, 2, 0}}",
        output: "{0, 0, 1, 2, 2}",
        explaination: "0s 1s and 2s are segregated into ascending order.",
        hidden: false,
      },
      {
        input: "{0, 1, 0}",
        output: "{0, 0, 1}",
        explaination: "0s 1s and 2s are segregated into ascending order.",
        hidden: false,
      },
    ],
  },
  {
    num: 5,
    title:
      "Move all negative numbers to beginning and positive to end with constant extra space",
    desc: "An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.",
    diffLevel: "ez",
    testCases: [
      {
        input: "{-12, 11, -13, -5, 6, -7, 5, -3, -6}",
        output: "{-12, -13, -5, -7, -3, -6, 11, 6, 5}",
        hidden: false,
      },
    ],
  },
  {
    num: 6,
    title: "Cyclically rotate an array by one",
    desc: "Given an array, rotate the array by one position in clock-wise direction.",
    diffLevel: "ez",
    testCases: [
      {
        input: "{1, 2, 3, 4, 5}",
        output: "5 1 2 3 4",
        hidden: false,
      },
      {
        input: "{9, 8, 7, 6, 4, 2, 1, 3}",
        output: "3 9 8 7 6 4 2 1",
        hidden: false,
      },
    ],
  },
  {
    num: 7,
    title: "Kadane's Algorithm - find Largest sum contiguous Subarray",
    desc: "Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.",
    diffLevel: "medium",
    imp: true,
    testCases: [
      {
        input: "{1,2,3,-2,5}",
        output: "9",
        explaination: `Max subarray sum is 9
              of elements (1, 2, 3, -2, 5) which 
              is a contiguous subarray.`,
        hidden: false,
      },
      {
        input: "{-1,-2,-3,-4}",
        output: "-1",
        explaination: `Max subarray sum is -1 
              of element (-1)`,
        hidden: false,
      },
    ],
  },
  {
    num: 2,
    title: "Find the maximum and minimum element in an array",
    desc: "Write a function to return minimum and maximum in an array. Your program should make the minimum number of comparisons",
    diffLevel: "ez",
    testCases: [
      {
        input: "{1000, 11, 445, 1, 330, 3000}",
        output: "Minimum element is 1, Maximum element is 3000",
        hidden: false,
      },
    ],
  },
  {
    num: 2,
    title: "Find the maximum and minimum element in an array",
    desc: "Write a function to return minimum and maximum in an array. Your program should make the minimum number of comparisons",
    diffLevel: "ez",
    testCases: [
      {
        input: "{1000, 11, 445, 1, 330, 3000}",
        output: "Minimum element is 1, Maximum element is 3000",
        hidden: false,
      },
    ],
  },
  {
    num: 2,
    title: "Find the maximum and minimum element in an array",
    desc: "Write a function to return minimum and maximum in an array. Your program should make the minimum number of comparisons",
    diffLevel: "ez",
    testCases: [
      {
        input: "{1000, 11, 445, 1, 330, 3000}",
        output: "Minimum element is 1, Maximum element is 3000",
        hidden: false,
      },
    ],
  },
];

module.exports = questions;
