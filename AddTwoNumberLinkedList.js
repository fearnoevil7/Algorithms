
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {

  console.log(l1);
  console.log(l2);

  var sum = BigInt(0);
  // console.log(typeof(l1));
  // console.log(l1.next, "\n\n\n");
  var _l1_Temp = new ListNode(l1.val, l1.next);
  var _l2_Temp = new ListNode(l2.val, l2.next);


  function makeCopies(_linkedList, storage) {
      storage = _linkedList;
      // while(_currentNode.next != null) {
      //     var _myNode = _linkedList.next;
      //     _linkedList.next = _myNode.next;
      //     _linkedList.val = _myNode.val;
      // }
  }
  

  function formatter(myList) {
      var count = 0;
      var arr = [];
      while(myList.next != null) {
          var nextNode = myList.next;
          // console.log(myList.val);
          arr.push(myList.val);
          myList.next = nextNode.next;
          myList.val = nextNode.val;
          count++;
      };
      console.log(myList.val);
      arr.push(myList.val);
      count++;
      console.log(arr);
      var _reformatted;
      _reformatted = BigInt(arr.reverse().join(""));
      console.log(_reformatted, typeof(_reformatted));
      // console.log("Current sum: ", sum);
      sum += _reformatted;
      console.log("Current sum: ", sum, typeof(sum));

      return arr;
  };

  makeCopies(l2, _l2_Temp);
  makeCopies(l1, _l1_Temp);

  formatter(l1);
  formatter(l2);

  console.log("\n", _l1_Temp, "\n");
  console.log(_l2_Temp, "\n", "\n");


  

  console.log("\n", sum);
  var myString = sum + "";
  var resultArr = [];
  console.log(myString);
  for(var x = 0; x < myString.length; x++) {
      // console.log(myString[x]);
      resultArr.push(parseInt(myString[x]));
  };
  resultArr = resultArr.reverse();
  console.log("*", resultArr, resultArr.length);

  var result = new ListNode(0);
  for(var i = 0; i < resultArr.length; i++) {
      if(i === 0) {
          result.val = resultArr[i];
      } else {
          var currentNode = result;
          if(currentNode.next === null) {
              currentNode.next = new ListNode(resultArr[i]);
              currentNode = currentNode.next;
              result.next = currentNode;
              console.log("TEsting!!", result.next, "\n", i, "\n", currentNode);
          } else {
              // console.log("Do something", i, "\n\n", currentNode, "\n\n");
              while(currentNode.next != null) {
                  currentNode = currentNode.next;
              }
              currentNode.next = new ListNode(resultArr[i]);
              console.log("TEsting1234567", currentNode);
          }
      }
  };
  console.log("hello", result.next);
  console.log("\n", result);
  return result;


};