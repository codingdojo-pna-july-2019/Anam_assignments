// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

// create a Node functions
function List_Node(value) {
  this.val = value;
  this.next = null;
}
function sLinkedList() {
  this.head = null;
}

//Create a Length function
function length(LL) {
  var N = LL.head;
  var count = 0;
  while (N) {
    count++;
    N = N.next;
  }
  return count;
}

//Create the list(s)
var list1 = new sLinkedList();
var node1 = new List_Node(6);
var node2 = new List_Node(7);
var node3 = new List_Node(8);
list1.head = node1;
node1.next = node2;
node2.next = node3;

console.log(length(list1));

// output: 3