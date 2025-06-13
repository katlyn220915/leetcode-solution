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