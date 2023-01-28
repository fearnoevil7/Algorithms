

// const possibleNumberOfOutcomesBasedOnNumberOfNumbersInputed = {
//     2 : 9,
//     3 : 27,
//     4 : 108,
//     5 : 324,
//     6 : 972,
//     7 : 
// };
var letterCombinations = function(digits) {
    const phoneNumbers = [
       {number: "2", values: ['a','b','c']}, 
       {number: "3", values: ['d','e','f']},
       {number: "4", values: ['g', 'h', 'i']},
       {number: "5", values: ['j', 'k', 'l']},
       {number: "6", values: ['m', 'n', 'o']},
       {number: "7", values: ['p', 'q', 'r', 's']},
       {number: "8", values: ['t', 'u', 'v']},
       {number: "9", values: ['w', 'x', 'y', 'z']}
   ];
   
   let string2Digits = [];

   
   function formatDigits(stringer) {
       if(stringer.length === 0) {
           string2Digits = string2Digits.reverse();
           return string2Digits;
       };
       for(var x = 0; x < phoneNumbers.length; x++) {
           if(stringer.charAt(stringer.length-1) === phoneNumbers[x].number) {
               string2Digits.push(phoneNumbers[x].values);
           };
       };
       formatDigits(stringer.slice(0, stringer.length - 1));
   };


   formatDigits(digits);

   console.log(string2Digits);

   if(string2Digits.length === 1) {
       return string2Digits[0];
   };

   function isItRepeating(stringer, _keys) {
       var test = false;
       for(var x = 0; x < _keys.length; x++) {
           // console.log(_keys[x], stringer);
           if(_keys[x] === stringer) {
               test = true;
           } else {
               test = false;
           };
       };
       return test;
   };

   let myCombinations = [];
   let count = 0;
       function makeCombos(_digits, _container, _combos) {
       // let count = 0;

       if(_digits.length === 0) {
           console.log("Finished Recursing!");
           if(_combos.length === 0 && count === 1) {
               _combos = _container;
           }
           return _combos;
       };
       count++;
       // console.log("*", _digits.length, count);
       if(count === 1) {
           var temp = digits;
           console.log(_digits, "\n", _combos, "\n", _container, "@@@@@@!!!!!");
           console.log("123", _digits[_digits.length-1], _digits[_digits.length-2]);
           for(var x = 0; x < _digits[_digits.length-2].length; x++) {
               for(var i = 0; i < _digits[_digits.length-1].length; i++) {
                   // let string1 = _digits[_digits.length-2][x];
                   // let string2 = _digits[_digits.length-1][i];
                   // _container.push([_digits[_digits.length-2][x], _digits[_digits.length-1][i]]);
                   _container.push(_digits[_digits.length-2][x].concat(_digits[_digits.length-1][i]))
               };
           };
           _digits.pop();
           _digits.pop();
           

           console.log("\n", _digits, "\n", _combos, "\n", _container, "$$$$$$$");

       } else if(count > 1) {
           
               console.log(_digits, "\n", _combos, "\n", _container, "@@@@@@2");
           
           let subContainer = [];
           // console.log("%", _digits, "\n", _container, "\n?", _digits[_digits.length-1]);
           for(var x = 0; x < _digits[_digits.length-1].length; x++) {
               // console.log("Test", x , _digits[_digits.length-1][x]);
               for(var i = 0; i < _container.length; i++) {
                   // console.log(_combos, "\n")
                   // console.log("Test", x ,i ,  _digits[_digits.length-1][x], _container[i]);
                   // console.log(_container[i]);
                   // console.log(_digits[_digits.length-1][x].concat(_container[i]));
                   if(_combos != undefined) {
                       // console.log("Fire!")
                       var test = isItRepeating(_digits[_digits.length-1][x].concat(_container[i]), _combos);
                       // console.log(test);
                       if (test === false) {
                           subContainer.push(_digits[_digits.length-1][x].concat(_container[i]));
                       } else {
                           continue;
                       }
                   } else {
                       subContainer.push(_digits[_digits.length-1][x].concat(_container[i]));
                   }
                   // console.log(_container);
               };

               if(_combos != undefined) {
                   // console.log(_digits);
                   console.log("Pushing!!!", x, _combos.length);
                   console.log("Sub", subContainer);
                   _combos = subContainer;
                   console.log("Final", _combos);
               } else {
                   // console.log(_digits);
                   console.log("Initial Push!", x)
                   _combos = subContainer;
                   console.log(_combos);
               }
               // console.log("#", subContainer, _container);
           };
           console.log("#@#", subContainer);
           _container = _container.concat(subContainer);
           _digits.pop();
           // console.log("%%!", _combos, _digits.length);
           // return _combos;
           // console.log(_digits, );
       }

       // _digits
       // console.log("**", _digits.length);
       console.log("@!digits", _digits, "\n",  _container,"\n" , _combos);
       return makeCombos(_digits, _container, _combos);
       console.log("??", ticker);

   };
   let myKeys = [];
   myCombinations = makeCombos(string2Digits, myKeys, myCombinations);
   console.log(myCombinations, "\n", string2Digits);
   let temp = [];
   console.log("&*&", digits.length, myCombinations);
   for(var x = 0; x < myCombinations.length; x++) {
       if(myCombinations[x].length === digits.length) {
           temp.push(myCombinations[x]);
       }
   }
   // console.log("TEMP", temp);
   myCombinations = temp;
   return myCombinations;
   
};

let results = letterCombinations("23")
console.log("\n\n\n****", results);
console.log("\n\n\n", results.length);

// let stringer = "23";

// let test = stringer.substring(-1, stringer.length - 1);
// console.log(test);

// test = test.substring(-1, stringer.length - 1);
// console.log(test);