const a = 'abc12abcbb';
const b = 'bbbbb';
const c = 'pwwkew';
const d = 'dvdf';
const e = 'aab';
const f = 'au';
const g = ' ';




var test = function(s) {
  var subStringArrayBeta = [];
  var container = [];
  var container2 = [];
  count = 0;
  let CapsRegex = /[A-Z]/g;
  let numberRegex = /[0-9]/g;
  let miscRegex = /\W/g;
  var isThereMisc = miscRegex.test(s);
  var isThereCaps = CapsRegex.test(s);
  var isThereNum = numberRegex.test(s);

   if(isThereMisc===false && isThereCaps === false && isThereNum === false) {
    while(count < s.length) {
        for (var x = count; x < s.length; x++) {
            container2.push(s[x]);
            // if(typeof(parseInt(s[x])) === 'number'){
            //   console.log("TEST PASSED");
            // };
        };
        container.push(container2);
        container2 = [];
        count++;
    };
   } else if(isThereMisc === false&&isThereCaps===true&&isThereNum===true) {
        let nonNumsContainer = [];
        let numsContainer = [];
        let subContainer = [];
        let nonNumbers = /(\D+)(?!=\d)/;
        let numeros = /(\d+)(?!=\D)/;
        let _nonNumbers = s.match(nonNumbers);
        let _numbers = s.match(numeros);
        

        for (var x = 0; x < _nonNumbers.length; x++) {
            if(_nonNumbers[x] === _nonNumbers[x+1]) {
                nonNumsContainer.push(_nonNumbers[x]);
                break;
            }
        };

        for (var i = 0; i < _numbers.length; i++) {
            if(_numbers[i] === _numbers[i+1]) {
                numsContainer.push(_numbers[i]);
                break;
            };
        };
        subContainer = nonNumsContainer.concat(numsContainer);
        var reformattedString = subContainer.toString();
        console.log("&&&&&&&&sub", subContainer,"\n",subContainer.toString());
        while(count < reformattedString.length) {
        for (var x = count; x < reformattedString.length; x++) {
            container2.push(s[x]);
            // if(typeof(parseInt(s[x])) === 'number'){
            //   console.log("TEST PASSED");
            // };
        };
        container.push(container2);
        container2 = [];
        count++;
    } 
   }else if(isThereMisc === true && isThereCaps === true && isThereNum === true){
      let nonNumsContainer = [];
     let numsContainer = [];
     let dubContainer = [];
     let nonNumbers = /(\D+)(?!=\d)/;
     let numeros = /(\d+)(?!=\D)/;
     let miscChars = /(\w+)(?!=\W)\W*\w\W*/g;
     let _nonNumbers = s.match(nonNumbers);
     let _numbers = s.match(numeros);
     let _misc = s.match(miscChars);

     for (var x = 0; x < _mis.length; x++) {
      if(_misc[x] === _misc[x+1]) {
          dubContainer.push(_misc[x]);
          break;
      }
  };
  var reformattedString = dubContainer.toString();
  while(count < reformattedString.length) {
    for (var x = count; x < reformattedString.length; x++) {
        container2.push(s[x]);
        // if(typeof(parseInt(s[x])) === 'number'){
        //   console.log("TEST PASSED");
        // };
    };
    container.push(container2);
     container2 = [];
     count++;
  }
    
}

    // console.log(container);

    for(var x = 0; x < container.length; x++) {
      count = 0;
      for(var i = 0; i < container[x].length; i++) {
        var subContainer = [];
        // console.log(x, i, container[x][i]);
        for(var a = i; a >= 0; a--) {
          subContainer.push(container[x][a]);
        };
        // console.log("$", subContainer);
        if(subContainer.length <= 62) {
          subStringArrayBeta.push(subContainer.reverse());
        };
      };
      // console.log("\n");
    };

    // console.log(subStringArrayBeta);

    function isItRepeating(stringer){
      var isRepeating = false;
      for (var x = 0; x < stringer.length; x++) {
        for (var v = 0; v < stringer.length; v++) {
          if(v != x && stringer[v] === stringer[x]) {
            isRepeating = true;
          };
        };
      };
      return isRepeating;
    };

    let subStringArray = [];
    for(var x = 0; x < subStringArrayBeta.length; x++) {
      if(isItRepeating(subStringArrayBeta[x]) === false) {
        subStringArray.push(subStringArrayBeta[x]);
      }
    };

    var clocker = 0;
    for(var x = 0; x < subStringArray.length; x++) {
      var counter = 0;
      for(var i = 0; i < subStringArray[x].length; i++) {
        counter++;
      };
      if(counter > clocker) {clocker = counter};
    };


    console.log(subStringArray);

    return clocker;

};

console.log(test(a));


// function isItRepeating(stringer){
//   var isRepeating = false;
//   for (var x = 0; x < stringer.length; x++) {
//     for (var v = 0; v < stringer.length; v++) {
//       if(v != x && stringer[v] === stringer[x]) {
//         isRepeating = true;
//       };
//     };
//   };
//   return isRepeating;
// };


// console.log(isItRepeating("bcabc"));
// console.log(isItRepeating("bcab"));
// console.log(isItRepeating("cabc"));

console.log("Test", 'a' === 'A');
















// const possibleNumberOfOutcomesBasedOnNumberOfNumbersInputed = {
//     2 : 9,
//     3 : 27,
//     4 : 108,
//     5 : 324,
//     6 : 972,
//     7 : 
// };
// var letterCombinations = function(digits) {
//   const phoneNumbers = [
//       {number: "2", values: ['a','b','c']}, 
//       {number: "3", values: ['d','e','f']},
//       {number: "4", values: ['g', 'h', 'i']},
//       {number: "5", values: ['j', 'k', 'l']},
//       {number: "6", values: ['m', 'n', 'o']},
//       {number: "7", values: ['p', 'q', 'r', 's']},
//       {number: "8", values: ['t', 'u', 'v']},
//       {number: "9", values: ['w', 'x', 'y', 'z']}
//   ];
  
//   let string2Digits = [];

  
//   function formatDigits(stringer) {
//       // console.log("Test*", stringer);
//       if(stringer.length === 0) {
//           string2Digits = string2Digits.reverse();
//           return string2Digits;
//       };
//       // console.log(stringer, typeof(stringer));
//       for(var x = 0; x < phoneNumbers.length; x++) {
//           // console.log(stringer.charAt(stringer.length-1), phoneNumbers[x].number);
//           if(stringer.charAt(stringer.length-1) === phoneNumbers[x].number) {
//               // console.log("!!!!!!");
//               string2Digits.push(phoneNumbers[x].values);
//           };
//       };
//       // stringer = stringer.slice(0, stringer.length - 1);
//       // console.log("$", stringer)
//       formatDigits(stringer.slice(0, stringer.length - 1));
//   };


//   formatDigits(digits);

//   // console.log("\n", string2Digits, "\n");

//   if(string2Digits.length === 1) {
//       return string2Digits[0];
//   };


//   function isItRepeating(stringer, _keys) {
//       // console.log("!!!!", stringer);
//       var test = false;
//       for(var x = 0; x < _keys.length; x++) {
//           // console.log(_keys[x], stringer);
//           if(_keys[x] === stringer) {
//               test = true;
//           } else {
//               test = false;
//           };
//       };
//       return test;
//   };



//   let count = 0;
//   function makeCombos(_digits, _container, _combos) {
//       // let count = 0;

//       if(_digits.length === 0) {
//           console.log("Finished Recursing!");
//           return _combos;
//       };
//       count++;
//       // console.log("*", _digits.length, count);
//       if(count === 1) {
//           var temp = digits;
//           // console.log(_digits, "\n", _combos, "\n", _container, "@@@@@@!!!!!");
//           // console.log("123", _digits[_digits.length-1], _digits[_digits.length-2]);
//           for(var x = 0; x < _digits[_digits.length-2].length; x++) {
//               for(var i = 0; i < _digits[_digits.length-1].length; i++) {
//                   // let string1 = _digits[_digits.length-2][x];
//                   // let string2 = _digits[_digits.length-1][i];
//                   // _container.push([_digits[_digits.length-2][x], _digits[_digits.length-1][i]]);
//                   _container.push(_digits[_digits.length-2][x].concat(_digits[_digits.length-1][i]))
//               };
//           };
//           _digits.pop();
//           _digits.pop();
          

//           // console.log("\n", _digits, "\n", _combos, "\n", _container, "$$$$$$$");

//       } else if(count > 1) {
          
//               // console.log(_digits, "\n", _combos, "\n", _container, "@@@@@@2");
          
//           let subContainer = [];
//           // console.log("%", _digits, "\n", _container, "\n?", _digits[_digits.length-1]);
//           for(var x = 0; x < _digits[_digits.length-1].length; x++) {
//               // console.log("Test", x , _digits[_digits.length-1][x]);
//               for(var i = 0; i < _container.length; i++) {
//                   // console.log(_combos, "\n")
//                   // console.log("Test", x ,i ,  _digits[_digits.length-1][x], _container[i]);
//                   // console.log(_container[i]);
//                   // console.log(_digits[_digits.length-1][x].concat(_container[i]));
//                   if(_combos != undefined) {
//                       // console.log("Fire!")
//                       var test = isItRepeating(_digits[_digits.length-1][x].concat(_container[i]), _combos);
//                       // console.log(test);
//                       if (test === false) {
//                           subContainer.push(_digits[_digits.length-1][x].concat(_container[i]));
//                       } else {
//                           continue;
//                       }
//                   } else {
//                       subContainer.push(_digits[_digits.length-1][x].concat(_container[i]));
//                   }
//                   // console.log(_container);
//               };

//               if(_combos != undefined) {
//                   // console.log(_digits);
//                   // console.log("Pushing!!!", x, _combos.length);
//                   // console.log("Sub", subContainer);
//                   _combos = subContainer;
//                   // console.log("Final", _combos);
//               } else {
//                   // console.log(_digits);
//                   // console.log("Initial Push!", x)
//                   _combos = subContainer;
//                   // console.log(_combos);
//               }
//               // console.log("#", subContainer, _container);
//           };
//           // _container = _container.concat(subContainer);
//           _digits.pop();
//           // console.log("%%!", _combos, _digits.length);
//           return _combos;
//           // console.log(_digits, );
//       }

//       // _digits
//       // console.log("**", _digits.length);
//       // console.log("@digits", _digits);
//       return makeCombos(_digits, _container);
//       console.log("??", ticker);

//   };

//   let myKeys = [];
//   let myCombinations = [];
//   myCombinations = makeCombos(string2Digits, myKeys, myCombinations);
//   console.log(myCombinations, string2Digits);
//   makeCombos(string2Digits, myCombinations);
  
//   return myCombinations;
// };

// let results = letterCombinations("23")
// console.log("\n\n\n****", results);
// // console.log("\n\n\n", results.length);

// // let stringer = "23";

// // let test = stringer.substring(-1, stringer.length - 1);
// // console.log(test);

// // test = test.substring(-1, stringer.length - 1);
// // console.log(test);