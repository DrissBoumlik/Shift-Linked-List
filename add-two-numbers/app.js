
const { shiftLinkedList, initLinkedList, printList, addTwoNumbers } = require('./LinkedList');

let l1 = initLinkedList(7, [9,9,9,9,9,9,9]);
let l2 = initLinkedList(4, [9,9,9,9]);
let l = addTwoNumbers(l1, l2);
printList(l);