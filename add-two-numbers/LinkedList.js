class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function initLinkedList(limit = 5, numbers) {
	let copy = head = 	new Node(numbers[0]);
	for (i = 1; i < limit; i++) {
		item = new Node(numbers[i]);
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

var addTwoNumbers = function(l1, l2) {
    var head = undefined;
    var copy = head;
    var carry = 0;
    while(l1 != undefined || l2 != undefined || carry != 0) {
		let v1 = l1 ? l1.value : 0;
		let v2 = l2 ? l2.value : 0;
		let sum = v1 + v2 + carry;
		carry = parseInt(sum / 10);
		if (sum >= 10) sum = sum % 10;
        if (copy) {
            item = new Node(sum);
            copy.next = item;
            copy = copy.next;
        } else {
            head = copy = new Node(sum);
        }
        l1 = l1 ? l1.next : undefined;
        l2 = l2 ? l2.next : undefined;
    }
    return head
};


module.exports.Node = Node;
module.exports.initLinkedList = initLinkedList;
module.exports.printList = printList;
module.exports.addTwoNumbers = addTwoNumbers;