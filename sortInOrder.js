function _order(arr, clocker) {
    if (clocker === 0) {
        // console.log("Finished!!!!!", arr);
        return arr;
    };
    let counter = 0;
    for(var x = 0; x < arr.length; x++) {
        if(arr[x] > arr[x+1]) {
            counter++;
            let temp = arr[x];
            arr[x] = arr[x+1];
            arr[x+1] = temp;
        };
    };
    return _order(arr, counter);
};