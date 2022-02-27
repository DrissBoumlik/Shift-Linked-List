// https://www.algoexpert.io/questions/Shift%20Linked%20List

const { shiftLinkedList, initLinkedList, printList } = require('./LinkedList');

const k = parseInt(process.argv.slice(2)[0]);
let _i = initLinkedList();
printList(_i);
console.log('-------');
_i = shiftLinkedList(_i, k);
printList(_i);
