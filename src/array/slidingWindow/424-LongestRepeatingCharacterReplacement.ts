export default function characterReplacement(s: string, k: number): number {
    if (s.length <= 0) return 0;
    let longestLength = k === 0 ? 1 : 0;
    let left = 0;
    let replaceCounter = 0;
    let replaceIndex = 0;

    for(let right = 1; right < s.length; right++) {
        let countable = false; 
        if (s[left] === s[right]) {
            countable = true;
        }

        if (s[left] !== s[right] && replaceCounter < k) {
            countable = true;
            replaceCounter++;
            console.log('可以替換')
        }

        if (s[left] !== s[right] && replaceIndex === 0) {
            replaceIndex = right; 
        } 

        
        if (countable) {
            longestLength = longestLength < (right + 1) - left ? (right + 1) -  left : longestLength;
            continue;
        }

        if (s[left] !== s[right] && replaceCounter >= k) {
            replaceCounter = 0;
            left = replaceIndex;
            replaceIndex = 0;
            console.log("不能替換")
        }
    }
    return longestLength;
};