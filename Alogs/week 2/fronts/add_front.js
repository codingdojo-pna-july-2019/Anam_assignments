// Add Front
// Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.

//first create node function
function List_Node(value) {
    this.val = value;
    this.next = null;
    return this;
  }
  
  function sLinkedList() {
    this.head = null;
    return this;
  }
  
  function add_front(LL, val) {
    var N = new List_Node(val);
    N.next = LL.head;
    LL.head = N;
  }
  
  //Create the list
  var list1 = new sLinkedList();
  var node1 = new List_Node(6);
  var node2 = new List_Node(7);
  var node3 = new List_Node(8);
  list1.head = node1;
  node1.next = node2;
  node2.next = node3;
  
  //Adding a new Node to front of list
  //Print head value of list before and after the addition for verification
  console.log(list1.head.val);
  add_front(list1, 9);
  console.log(list1.head.val);

//   output: 6
// output: 9