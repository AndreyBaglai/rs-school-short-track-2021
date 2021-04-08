/**
  * Given a singly linked list of integers l and an integer k,
  * remove all elements from list l that have a value equal to k.
  *
  * @param {List} l
  * @param {Number} k
  * @return {List}
  *
  * @example
  * For l = [3, 1, 2, 3, 4, 5] and l = 3,
  * the output should be [1, 2, 4, 5]
  *
  * Singly - linked lists are already defined with this Interface
  * function ListNode(x) {
  *   this.value = x;
  *   this.next = null;
  * }
*/

/*
ListNode {
  next: ListNode {
    next: ListNode {
      next: ListNode {
        next: null,
        value: 5
      },
      value: 4
    },
    value: 2
  },
  value: 1
}
*/

function removeKFromList(l, k) {
  const list = [...l];
  return list.filter((node) => node.value !== k);
}

module.exports = removeKFromList;
