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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

// if there's a cycle in the linked list, means there are two nodes points to the same node.
function hasCycle(head: ListNode | null): boolean {
  let currentNode = head;
  const nodeSet = new Set<ListNode>();

  while (currentNode !== null) {
    if (nodeSet.has(currentNode)) {
      return true;
    }

    nodeSet.add(currentNode);
    currentNode = currentNode.next;
  }

  return false;
}
