var lengthOfLongestSubstring = function(s) {
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
   var mySwitch = false;
 
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
 
      for (var x = 0; x < _misc.length; x++) {
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
     mySwitch = true;
 } else if(isThereMisc === true && isThereCaps === false && isThereNum === false){
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
 }
     if(mySwitch === true){
         return container.length;
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
         if(isThereMisc === true || isThereCaps === true || isThereNum === true) {
             if(subContainer.length <= 62) {
                 subStringArrayBeta.push(subContainer.reverse());
             };
         } else {
             if(subContainer.length <= 26) {
                 subStringArrayBeta.push(subContainer.reverse());
             };
         }
         
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
 
 
     console.log("test", subStringArray);
 
     let whiteSpaceReg = /\s/;
     whiteSpaceReg.test(s);
     if(subStringArray.length === 0 && whiteSpaceReg.test(s) === true) {
         return 1;
     } else {
          return clocker;
     }
 
 };