/**
 *
 * @param s - input string which contains characters
 * @param t - input string which contains target characters
 * @returns - the minimum window substring of s which contains all the characters of t
 *
 *  在 s 長度最短的 substring 裡面找到所有 t 內包含的字母
 */

/*
export default function minWindow(s: string, t: string): string {

    if (t.length > s.length) {
        return "";
    }

    const tMap = new Map<string, number>();
    for (const char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    const have = new Map<string, number>();
    const need = tMap.size; // 有幾種字母要湊齊
    let haveCount = 0; // 紀錄是否已經找到所有字

    let left = 0;
    let maxLeft = Infinity;
    let resStart = 0;
    const collectedStrings = [];

    for (let right = 0; right < s.length || left < s.length; right++) {
        const char = s[right];
        const charCount = tMap.get(char) ?? 0;
        const currentCountInHave = have.get(char) ?? 0;

        if (!charCount) {
            // tMap 裡面沒有這個 char 代表不需做任何事，直接跳過
            left++;
            continue;
        }
        
        if (charCount !== currentCountInHave) {
            // charCount > 0 ，而且 currentCountInHave 不等於 charCount，代表字數還不足
            have.set(char, (have.get(char) || 0) + 1); // have 把該字塞進
            haveCount += 1; // have count + 1，因為找到一個字了
            
            if (maxLeft === undefined) {
                maxLeft = left;
            }
        }

        // haveCount = need.length 代表所有字母都收集到了
        if (haveCount === need) {
            // left 的那一個字母要在 have 中剪一，如果該字不在 have 裡面不用理他
            if (have.get(s[left])){
                have.set(s[left], have.get(s[left]) - 1);
                haveCount -= 1
            }

            console.log('have', have)
        }
        
    }

    // maxLeft = undefined 等於沒有對應到
    return maxLeft === undefined ? "" : s.slice(maxLeft, s.length + 1);
};

// 找到 s 裡下一個 tMap 裡面有的字母 index，沒有就回傳 index + 1
function determineLeftIndex(initialIndex: number, s: string, tMap: Map<string, number>){
    let index = initialIndex + 1;
    while(index < s.length){
        if (tMap.get(s[index])) {
        break;
      }
      index += 1;
    }
    return index;
}

*/

// 39 ms
// 60.09 mb
export default function minWindow(s: string, t: string): string {
  if (t.length > s.length) return '';

  const tMap = new Map<string, number>();
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  const have = new Map<string, number>();
  const need = tMap.size; // 有幾種字母要湊齊
  let haveCount = 0;

  let left = 0;
  let minLen = Infinity;
  let resStart = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (tMap.get(char)) {
      have.set(char, have.get(char) || 0 + 1);

      if (have.get(char) === tMap.get(char)) {
        haveCount += 1;
      }
    }

    // if all t char have all covered in haveMap
    while (haveCount === need) {
      // 更新最短視窗
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        resStart = left;
      }

      const leftChar = s[left];
      if (tMap.has(leftChar)) {
        have.set(leftChar, have.get(leftChar)! - 1);

        // 只要 have 有足夠該字母數量，就可以讓 left 繼續往前
        if (have.get(leftChar)! < tMap.get(leftChar)!) {
          haveCount -= 1;
        }
      }
      left += 1;
    }
  }

  return minLen === Infinity ? '' : s.slice(resStart, resStart + minLen);
}
