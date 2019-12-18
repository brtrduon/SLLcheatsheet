class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class LinkedList { 
	constructor() {
		// head is set to null by default (nothing linked)
		this.head = null
		this.size = 0
	}

	// insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head)
		// we indicate second param to be "this.head" to make make head no longer pointing to "null"

		this.size++
	}

	// insert last node
	insertLast(data) {
		let node = new Node(data)
		let current

		// if empty, make node the head
		if (!this.head) {
			this.head = node
		} else {
			current = this.head

			while (current.next) {
				current = current.next
			}

			current.next = node
		}

		this.size++
	}

	// insert at index
	insertAt(data, index) {
		// if index is out of range
		if (index > 0 && index > this.size) {
			return
		}

		// if first index
		if (index === 0) {
			this.head = new Node(data, this.head)
			// alternatively, we could call "insertFirst" function that we created abvoe
			return
		} else {
			// initialize vars
			const node = new Node(data)
			let current, previous

			// set current to first
			current = this.head

			let count = 0
			while (count < index) {
				// node before the index
				previous = current

				count++
				current = current.next
			}

			node.next = current
			previous.next = node

			this.size++
		}
	}

	// get at index
	getAt(index) {
		let current = this.head
		let count = 0

		while (current) {
			if (count === index) {
				console.log(current.data)
			}

			count++

			// if we do not set current equal to current.next, this will result in an infinite loop
			current = current.next
		}

		return null
	}

	// remove at index
	removeAt(index) {
		if (index > 0 && index > this.size) {
			return
		}

		let current = this.head
		let previous
		let count = 0

		// remove first index
		if (index === 0) {
			this.head = current.next
		} else {
			while (count < index) {
				count++
				previous = current
				current = current.next
			}

			previous.next = current.next
		}

		this.size--
	}

	// clear list
	clearList() {
		this.head = null
		this.size = 0
	}

	// print list data
	printListData() {
		let current = this.head

		while (current) {
			console.log(current.data)
			current = current.next
		}
	}
}

// const ll = new LinkedList()

// ll.insertFirst(150)
// ll.insertFirst(250)
// ll.insertFirst(300)
// ll.insertLast(400)

// ll.clearList()

// ll.printListData()
// ll.getAt(2)