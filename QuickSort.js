const { count } = require("console");
const { finished } = require("stream");

const a = [7,9,2,0,3,6,9,7,18,1];
const b = [17,8,2,4,5,1,6,8,23,53,62,1,5,9];

function QuickSort(arr) {


    if(arr.length === 1) {
        console.log("exiting*", arr);
        return arr
    };

    let pivot = arr[arr.length-1];

    let front = [];
    let back = [];
    for(var x = 0; x < arr.length - 1; x++) {
        if(arr[x] > pivot) {
            back.push(arr[x]);
        } else {
            front.push(arr[x]);
        };
    };



    let _front = [];
    let _back = [];
    for(var x = 0; x < arr.length - 1; x++) {
        if(arr[x] > pivot) {
            _back.push(arr[x]);
        } else {
            _front.push(arr[x]);
        };
        // console.log("front: ", _front);
        // console.log("back: ", _back);
    };

    // console.log("front", _front);
    // console.log("pivot", pivot);
    // console.log("back", _back, "\n");

    if(_front.length > 0 & _back.length > 0) {
        // console.log(QuickSort(_front).concat(pivot).concat(_back));
        let temp = QuickSort(_front).concat(pivot).concat(QuickSort(_back));
        return temp;
    } else if(_front.length > 0) {
        console.log("!!");
        return QuickSort(_front).concat(pivot);
    } else {
        console.log("!!!");
        return [pivot].concat(QuickSort(_back));
    };




    // if(_front.length > 0 & _back.length > 0) {
    //     return [...QuickSort(_front), pivot, ...QuickSort(_back)];
    // } else if(_front.length > 0) { 
    //     return [...QuickSort(_front), pivot];
    // } else {
    //     return [pivot, ...QuickSort(_back)]
    // };

};
console.log("Sorted!!", QuickSort(b));
