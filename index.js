// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        var node = new Node(data, this.head);
        this.head = node;
    }

    size() {
        var count = 0;
        var node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        var node = this.head;
        if (!this.head) {
            return null;
        }
        else {
            while (node) {
                if (node.next == null) {
                    return node;
                }
                else {
                    node = node.next;
                }
            }
        }        
    }

    clear() {
        this.head = null;
        return;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        // note that the commented code will work, but I wrote more than I need to
            // var node = this.head;
            // node = node.next;
            // this.head = node;
        // 
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        else {
            var prev = this.head;
            var node = this.head.next;
            while (node.next) {
                prev = node;
                node = node.next;
            }
            prev.next = null;
            return;
        }
    }

    insertLast(data) {
        var last = this.getLast();
        if (last) {
            last.next = new Node(data);
        }
        else {
            this.head = new Node(data);
        }
    }

    getAt(integer) {
        var node = this.head;
        var count = 0;
        // if (!this.head) {
        //     return null;
        // }
        while (node) {
            if (count == integer) {
                return node;
            }
            else {
                node = node.next;
                count++;
            }
        }
        return null;
        // if (count !== integer) {
        //     return null;
        // }
    }

    removeAt(integer) {
        if (!this.head) {
            return;
        }

        if (integer === 0) {
            this.head = this.head.next;
            return;
        }

        var prev = this.getAt(integer - 1);
        if (!prev || !prev.next) {
            return;
        }
        else {
            prev.next = prev.next.next;
        }
    }

    insertAt(data, integer) {
        var node = new Node(data)
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (integer === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        var prev = this.getAt(integer - 1) || this.getLast();
        var node = new Node(data, prev.next);
        prev.next = node;
    }

    forEach(fn) {
        if (!this.head) {
          return null;
        }
    
        let node = this.head;
        while (node) {
          fn(node);
          node = node.next;
        }
      }
    // forEach is not currently working

    // asterisk indicates a generator function
    // in this case, the asterisk indicates a generator function with a key of 'symbol.iterator'
    *[Symbol.iterator]() {
        var node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
    // the stuff above this allows the for...of loops function to work
}

module.exports = { Node, LinkedList };
