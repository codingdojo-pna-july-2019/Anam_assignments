// Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If the list is empty, return null.

// first create node function
function List_Node(value) {
    this.val = value;
    this.next = null;
    return this;
  }
  function sLinkedList() {
    this.head = null;
    return this;
  }
  
  //than Remove Front function
  function remove_Front(LL) {
      LL.head = LL.head.next;
      return LL.head;
  }
  
  //Create the list
  var list1 = new sLinkedList();
  var node1 = new List_Node(6);
  var node2 = new List_Node(7);
  var node3 = new List_Node(8);
  list1.head = node1;
  node1.next = node2;
  node2.next = node3;
  
  var list2 = new sLinkedList();
  var node100 = new List_Node(100);
  list2.head = node100;
  
  console.log(remove_Front(list1));
  console.log(remove_Front(list2));

//   output: List_Node { val: 7, next: List_Node { val: 8, next: null } }
// output: null