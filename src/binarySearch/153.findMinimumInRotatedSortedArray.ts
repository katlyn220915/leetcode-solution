function findMin(nums: number[]): number {
  let min = Infinity;
  let midIndex = Math.floor(nums.length / 2);
  let arraySliced = nums;

  while (midIndex > 0) {
    const mid = arraySliced[midIndex];
    const left = arraySliced[midIndex - 1];
    const right = arraySliced[arraySliced.length - 1];

    if (mid < left || right < left) {
      arraySliced = arraySliced.slice(midIndex);
    }

    if (mid > left || right > left) {
      arraySliced = arraySliced.slice(0, midIndex);
    }

    min = Math.min(
      ...[min, mid, left, right].filter((item) => item !== undefined),
    );
    midIndex = Math.floor(arraySliced.length / 2);
  }
  return min;
}

export default findMin;

/*
[4, 5, 6, 7, 0, 1, 2]

midIndex 紀錄array中間指標 / mid 紀錄array中間值 / left 紀錄array中間值前一位 / right 紀錄array最後一位 / slicedArray 紀錄array切片 / while 停止條件為 midIndex <= 0 時（array 只剩一個值）

1. midIndex = array length / 2 = 7 / 2 = 3 (取整數)
2. mid = nums[3] = 7; left = nums[3 - 1] （midIndex 前一位數）; right = nums[length - 1] （array 最後一位數）
3. right（array 最後一位） < left (midIndex 前一位) 表示 array 被旋轉過，且 mid > left，所以取 right 右邊的值，反之亦然，slicedArray = slicedArray.slice(midIndex) = [0, 1, 2]
4. 更新 midIndex = slicedArray length / 2 = 3 / 2 = 1 (取整數)
5. 更新 min，比較 min, mid, left, right 四個值，取最小值
7. 重複  2 - 7 直到 midIndex <= 0 為止


*/
