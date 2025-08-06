/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null && list2 !== null) {
    return list2;
  }

  if (list2 === null && list1 !== null) {
    return list1;
  }

  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  while (list1 !== null || list2 !== null) {
    let nodeToInsert = null;

    if (list2 === null && list1 !== null) {
      nodeToInsert = list1;
      list1 = list1.next;
    } else if (list1 === null && list2 !== null) {
      nodeToInsert = list2;
      list2 = list2.next;
    } else if (list1!.val <= list2!.val) {
      nodeToInsert = list1;
      list1 = list1!.next;
    } else if (list2!.val <= list1!.val) {
      nodeToInsert = list2;
      list2 = list2!.next;
    }

    if (head === null) {
      head = nodeToInsert;
      tail = nodeToInsert;
    } else {
      tail!.next = nodeToInsert;
      tail = nodeToInsert;
    }
  }
  return head;
}
