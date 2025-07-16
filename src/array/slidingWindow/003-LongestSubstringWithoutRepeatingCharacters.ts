export default function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 0) return 0;

  let result = 0;
  let currentSubstring = [];
  const charIndexMap = new Map();

  for(let i = 0; i < s.length; ++i) {    
    if(!charIndexMap.has(s[i])) {
      charIndexMap.set(s[i], i);
      currentSubstring.push(s[i])
      if (currentSubstring.length > result) result = currentSubstring.length;

      continue;
    }
    
    const indexOfChar = charIndexMap.get(s[i]);
    charIndexMap.clear();
    i = indexOfChar;
    if (currentSubstring.length > result) result = currentSubstring.length;
    currentSubstring = [];
  }
  
  return result;
};

/*
####### My Solution ##########

Time: 162ms

test case:
["a", "b", "c", "a", "b", "c", "b", "b"]

# 1
currentSubstring = ["a", "b", "c"]

MAP = {
  "a": 0,
  "b": 1,
  "c": 2,
}

The repeat char is "a", a located at index 0 according to the MAP, then we need to clear the MAP and set the i to 0, and plus 1, so it will be 1

# 2
currentSubstring = ["b", "c", "a"]

MAP = {
  "b": 1,
  "c": 2,
  "a": 3,
}

The repeat char is "b", b located at index 1 according to the MAP, then we need to clear the MAP and set the i to 1, and plus 1, so it will be 2

# 3
currentSubstring = ["c", "a", "b"]

MAP = {
  "c": 2,
  "a": 3,
  "b": 4,
}

The repeat char is "c", c located at index 2 according to the MAP, then we need to clear the MAP and set the i to 2, and plus 1, so it will be 3

# 4
currentSubstring = ["a", "b", "c"]

MAP = {
  "a": 3,
  "b": 4,
  "c": 5,
}

The repeat char is "b", b located at index 4 according to the MAP, then we need to clear the MAP and set the i to 4, and plus 1, so it will be 5

# 5
currentSubstring = ["c", "b"]

MAP = {
  "c": 5,
  "b": 6,
}

The repeat char is "b", b located at index 5 according to the MAP, then we need to clear the MAP and set the i to 5, and plus 1, so it will be 6

# 6
currentSubstring = ["b"]

MAP = {
  "b": 6,
}

the repeat char is "b", b located at index 6 according to the MAP, then we need to clear the MAP and set the i to 6, and plus 1, so it will be 7

# 7

no more char to check, so the result is 3
*/