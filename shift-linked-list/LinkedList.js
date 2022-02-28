class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function initLinkedList(limit = 5, numbers = null) {
	let copy = head = 	new Node(numbers ? numbers[0] : 0);
	for (i = 1; i < limit; i++) {
		item = new Node(numbers ? numbers[i] : i);
		copy.next = item;
		copy = copy.next;
	};
	return head;
}

function printList(head) {
	let output = '';
	let item = head;
	while (item != null) {
		output += `${item.value} ->\t`;
		item = item.next;
	}
	output = output.substring(0, output.lastIndexOf('->'));
	console.log(output);
}

function shiftLinkedList(head, k) {
	if (k == 0) return head;
	let last = head;
	let length = 1;
	while(last.next != null) {
		last = last.next
		length++;
	}
	if (length == 1) return head;
	if (k >= length) k = k % length;
	
	let _last = head;
	last.next = head;
	for(let i = 0; i < Math.abs(length - k - 1); i++) {
		_last = _last.next;
	}
	_head = _last.next;
	_last.next = null;
	head = _head;
	return head;
}

module.exports.Node = Node;
module.exports.shiftLinkedList = shiftLinkedList;
module.exports.initLinkedList = initLinkedList;
module.exports.printList = printList;