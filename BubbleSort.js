const a = [1,3,7,4,2];

function BubbleSort(arr) {
    var count = 0

    for(var i = 0; i < arr.length; i++) {
        for(var x = 0; x <= arr.length - 1 - i; x++) {
            let temp = null;
            if(arr[x] > arr[x + 1]) {
                temp = arr[x];
                arr[x] = arr[x + 1];
                arr[x + 1] = temp;
            };
            count++
        };
        count++
    };


    // var index = arr.length;
    // for(var i = 0; i < index; i++) {
    //     for(var x = 0; x <= arr.length - 2; x++) {
    //         let temp = null;
    //         if(arr[x] > arr[x + 1]) {
    //             temp = arr[x];
    //             arr[x] = arr[x + 1];
    //             arr[x + 1] = temp;
    //         };
    //         count++
    //     };
    //     count++
    //     index--
    // };
    


    console.log(count);
    return arr;
}

console.log(BubbleSort(a));