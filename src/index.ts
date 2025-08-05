/* Array */
import { lengthOfLongestSubstring, characterReplacement } from './array';
import { minimumWindowSubstring } from './array/slidingWindow';
import { isValidParentheses } from './stack';

///////////////////////////////////////
/* lengthOfLongestSubstring */
// const s1 = "abcabcbb";
// const s2 = "bbbbb";
// const s3 = "pwwkew";
// const s4 = " ";
// const s5 = "dvdvf";

// console.log(lengthOfLongestSubstring(s1)); // 3
// console.log(lengthOfLongestSubstring(s2)); // 1
// console.log(lengthOfLongestSubstring(s3)); // 3
// console.log(lengthOfLongestSubstring(s4)); // 1
// console.log(lengthOfLongestSubstring(s5)); // 3

///////////////////////////////////////
/* characterReplacement 
const s1 = "AABABBA";
const s2 = "ABAB";
const s3 = "ABAA";
const s4 = "AABABBA";
const k1 = 1;
const k2 = 2;
const k0 = 0;

// console.log(characterReplacement(s1, k1)); // 4
console.log(characterReplacement(s1, k1)); // 4

*/

////////////////////////////////////////

/*
// minimumWindowSubstring

const s1 = 'ADO[BECODEBA]NC'; // BANC
const t1 = 'ABC';
const s2 = 'bdab'; // ab
const t2 = 'ab';

console.log(minimumWindowSubstring(s1, t1));

*/

//STACK
////////////////////////////////////////

// isValidParentheses

const s1 = '()';
const s2 = '()[]{}'; //['}', ']' , ')'] ['(', '[', '{']
const s3 = '(]';
const s4 = '([)]'; // [']', ')'] ['(', '[']
const s5 = '{[]}'; // ['}', ']'] ['{', '[']
const s6 = '(';
const s7 = '([])'; // [')', ']'] ['(', '[']

console.log(isValidParentheses(s1)); // true
console.log(isValidParentheses(s2)); // true
console.log(isValidParentheses(s3)); // false
console.log(isValidParentheses(s4)); // false
console.log(isValidParentheses(s5)); // true
console.log(isValidParentheses(s6)); // false
console.log(isValidParentheses(s7)); // true
