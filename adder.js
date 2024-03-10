/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  let i = 0;
  let l3 = []
  let remainder = false;

  while (l1?.[i] && l2?.[i]) {
    const total = l1[i] + l2[i] + (remainder ? 1 : 0);
    remainder = total >= 10

    l3.push(total % 10);
    i++;
  }

  return l3;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))