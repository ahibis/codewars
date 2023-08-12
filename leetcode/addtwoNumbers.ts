/*
https://leetcode.com/problems/add-two-numbers/
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  buffer = 0
): ListNode | null {
  if (l1 == null && l2 == null) {
    if(buffer) return new ListNode(buffer)
    return null;
  }

  const val1 = l1 ? l1.val : 0;
  const val2 = l2 ? l2.val : 0;
  let sum = val1 + val2 + buffer;
  buffer = ~~(sum / 10);
  sum %= 10;

  const next1 = l1 ? l1.next : null
  const next2 = l2 ? l2.next : null

  return new ListNode(
    sum,
    addTwoNumbers(next1, next2, buffer)
  );
}
