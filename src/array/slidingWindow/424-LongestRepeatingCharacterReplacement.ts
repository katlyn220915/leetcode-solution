/**
 * @description 424. Longest Repeating Character Replacement
 * @param {string} s - input string
 * @param {number} k - number of replacements
 * @returns {number} - longest length of repeating character replacement
 *
 * 先把題目理解為，找到最長的 substring，其中最多可以替換 k 次字母，把它變成全部都相同字母的情況
 * 所以只要關注視窗內，出現最多次數的字母，其他不是該字母的字有幾個？是否大於 k？
 * 如果大於 k 的話，就縮小視窗
 */
export default function characterReplacement(s: string, k: number): number {
  const charMap = new Map<string, number>(); // 紀錄次元出現次數
  let left = 0;
  let right = 0;
  let maxLength = 0; // 紀錄最長長度
  let maxCount = 0; // map 中次數最多的字元出現次數

  for (right = 0; right < s.length; right++) {
    const char = s[right];
    charMap.set(char, (charMap.get(char) || 0) + 1);
    // 比較當前字母與 maxCount 誰大，更新 maxCount
    maxCount = Math.max(maxCount, charMap.get(char)!);

    // window 長度 - 出現次數最多的字元 > k 時，移動左指針
    if (right - left + 1 - maxCount > k) {
      // 把左指針的那個字母踢出去，所以該字要剪一
      charMap.set(s[left], charMap.get(s[left])! - 1);
      // 移動左指針
      left++;
    }
    // 更新最長長度
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
