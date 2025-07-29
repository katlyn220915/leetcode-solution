/* Array */
import { lengthOfLongestSubstring, characterReplacement } from './array';
import { minimunWindowSubstring } from './array/slidingWindow';

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

/* minimunWindowSubstring */

const s1 = 'ADO[BECODEBA]NC'; // BANC
const t1 = 'ABC';
const s2 = 'bdab'; // ab
const t2 = 'ab';

console.log(minimunWindowSubstring(s1, t1));
