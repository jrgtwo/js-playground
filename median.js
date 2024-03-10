
function median(nums1, nums2) {
  const n1Len = nums1.length;
  const n2Len = nums2.length;
  const [longArr, shortArr] = n1Len - n2Len > 0
    ? [nums1, nums2]
    : [nums2, nums1];
  const mergedArr = []


  let j = 0;
  for (let i = 0; i < longArr.length; i++) {

    while (longArr[i] > shortArr[j]) {
      mergedArr.push(shortArr[j]);
      j++;
    }
    mergedArr.push(longArr[i]);
  }

  if (j !== shortArr.length) {
    while (j < shortArr.length) {
      mergedArr.push(shortArr[j]);
      j++;
    }
  }

  const halfIdx = mergedArr.length / 2
  console.log(mergedArr, halfIdx, mergedArr[halfIdx - 1], mergedArr[halfIdx], mergedArr[Math.floor(halfIdx)])
  return halfIdx % 1 === 0
    ? (mergedArr[halfIdx - 1] + mergedArr[halfIdx]) / 2
    : mergedArr[Math.floor(halfIdx)];
};

console.log(median([3], [-2, -1]))