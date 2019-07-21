// // SList: Back
// Create a function that accepts a ListNode pointer and returns the last value in the list.

//Node functions
function List_Node(value) {
    this.val = value;
    this.next = null;
    //Find the max value
    this.max = function () {
      var max = this.val;
      var N = this.next;
      while (N) {
        if (N.val > max) {
          max = N.val;
        }
        N = N.next;
      }
      console.log("Largest value: " + max);
      return this;
    }
    //Find the min value
    this.min = function () {
      var min = this.val;
      var N = this.next;
      while (N) {
        if (N.val < min) {
          min = N.val;
        }
        N = N.next;
      }
      console.log("Smallest value: " + min);
      return this;
    }
    //Find the average value
    this.average = function () {
      var sum = this.val;
      var count = 1;
      var N = this.next;
      while (N) {
        count++;
        sum += N.val;
        N = N.next;
      }
      console.log("Avg: " + (sum/count));
      return this;
    }
  }
  
  function sLinkedList() {
    this.head = null;
    //Display all node values
    this.display = function () {
      var N = this.head;
      var string = "The Node values in this list: ";
      while (N.next) {
        string += N.val + ", ";
        N = N.next;
      }
      string += N.val
      console.log(string);
      return this;
    }
    //Display the last value in the list
    this.lastVal = function () {
      var N = this.head;
      while (N.next) {
        N = N.next
      }
      console.log("The last value in the list: ", N.val);
      return this;
    }
  }
  
  //Create the list(s)
  var list1 = new sLinkedList();
  var node1 = new List_Node(6);
  var node2 = new List_Node(17);
  var node3 = new List_Node(8);
  list1.head = node1;
  node1.next = node2;
  node2.next = node3;
  
 
  
  list1.lastVal();
// output: The last value in the list:  8