// var merge = function (nums1, m, nums2, n) {
//   let store = []

//   let l1 = 0
//   let l2 = 0

//   while (l1 < m && l2 < n) {
//     if (nums1[l1] > nums2[l2]) {
//       store.push(nums2[l2])
//       l2++
//     } else {
//       store.push(nums1[l1])
//       l1++
//     }
//   }
//   if (l1 < m) {
//     store = [...store, ...nums1.slice(l1)]
//   }
//   if (l2 < n) {
//     store = [...store, ...nums2.slice(l2)]
//   }
//   return store.slice(0, m + n)
// };

// const merge = (nums1, m, nums2, n) => {

//   let p1 = m - 1
//   let p2 = n - 1

//   for (let i = nums1.length - 1; i > -1; i--) {
//     if (p1 < 0 || p2 < 0) break
//     if (nums1[p1] > nums2[p2]) {
//       nums1[i] = nums1[p1]
//       p1--
//     } else {
//       nums1[i] = nums2[p2]
//       p2--
//     }
//   }

//   let leftover
//   if (p2 > -1) {
//     leftover = nums2.slice(0, p2 + 1)
//   }
//   if (p1 > -1) {
//     leftover = nums1.slice(0, p1 + 1)
//   }

//   leftover.forEach((item, index) => {
//     nums1[index] = item
//   })

// }

  const merge = (nums1, m, nums2, n) => {
    let p1 = m - 1
    let p2 = n - 1
    let i = nums1.length

    while (i--) {
      nums1[i] = (p2 < 0 || nums1[p1] > nums2[p2]) ? nums1[p1--] : nums2[p2--]
    }
  }
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6, 3], 3)
merge([3, 6, 9, 0, 0, 0], 3, [2, 5, 6, 3], 3)
merge([1], 1, [], 0)
merge([0], 0, [1], 1)