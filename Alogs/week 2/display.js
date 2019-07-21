// Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

// create a Node functions
function List_Node(value) {
  this.val = value;
  this.next = null;
}

function sLinkedList() {
  this.head = null;
  this.display = function () {
    var N = this.head;
    var string = "The Node values in this list are: ";
    while (N.next) {
      string += N.val + ", ";
      N = N.next;
    }
    string += N.val
    console.log(string);
    return this;
  }
}

//Create the list(s)
var list1 = new sLinkedList();
var node1 = new List_Node(1);
var node2 = new List_Node(2);
var node3 = new List_Node(3);
list1.head = node1;
node1.next = node2;
node2.next = node3;

list1.display();

// output: The Node values in this list are: 1, 2, 3