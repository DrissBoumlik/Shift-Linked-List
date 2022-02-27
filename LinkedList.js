class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function initLinkedList(){	
	let i0 = new Node(0), i1 = new Node(1), i2 = new Node(2), i3 = new Node(3), i4 = new Node(4), i5 = new Node(5);
	i0.next = i1, i1.next = i2, i2.next = i3, i3.next = i4, i4.next = i5, i5.next = null;
	return i0;
}

function printList(head){
	let output = '';
	let item = head;
	while (item != null) {
		output += `${item.value} -> `;
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