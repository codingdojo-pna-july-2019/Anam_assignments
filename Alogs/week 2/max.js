// SList: Max
// American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list’s largest val.

//Create a Node functions
function List_Node(value) {
    this.val = value;
    this.next = null;
    this.max = function () {
      var max = this.val;
      var N = this.next;
      while (N) {
        if (N.val > max) {
          max = N.val;
        }
        N = N.next;
      }
      console.log("Largest Value: " + max);
      return this;
    }
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
  var node1 = new //Node functions
  function ListNode(value) {
    this.val = value;
    this.next = null;
    this.max = function () {
      var max = this.val;
      var N = this.next;
      while (N) {
        if (N.val > max) {
          max = N.val;
        }
        N = N.next;
      }
      console.log("Maximum value: " + max);
      return this;
    }
  }
  
  function sLinkedList() {
    this.head = null;
    this.display = function () {
      var N = this.head;
      var string = "Node values in this list: ";
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
  var node2 = new List_Node(17);
  var node3 = new List_Node(8);
  list1.head = node1;
  node1.next = node2;
  node2.next = node3;
  
  
  
  node1.max();

//   Largest Value: 17