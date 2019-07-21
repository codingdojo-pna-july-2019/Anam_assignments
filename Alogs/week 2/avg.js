// Create average(node) to return the average value.
// */

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
}

//Create the list(s)
var list1 = new sLinkedList();
var node1 = new List_Node(1);
var node2 = new List_Node(17);
var node3 = new List_Node(8);
list1.head = node1;
node1.next = node2;
node2.next = node3;

var list2 = new sLinkedList();
var node25 = new List_Node(25);
list2.head = node25;

node1.average();
node25.average();

// output: Avg: 8.666666666666666
// output: Avg: 25 