/*
Finally, Tad and Sam reach the front of the line
to get movie tickets. There is only one seat left.
Who was earlier in line? Return the value (not the node)
at the head of the list. If list is empty, return null.
*/

//Node functions
function List_Node(value) {
    this.val = value;
    this.next = null;
  }
  function sLinkedList() {
    this.head = null;
  }
  
  //Who is front function
  function front(LL) {
    return LL.head.val;
  }
  
  //Create the list(s)
  var list1 = new sLinkedList();
  var node1 = new List_Node(6);
  var node2 = new List_Node(7);
  var node3 = new List_Node(8);
  list1.head = node1;
  node1.next = node2;
  node2.next = node3;
  
  console.log(front(list1));
//   output: 6