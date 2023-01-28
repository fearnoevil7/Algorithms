const a = [11,7,9,2,0,3,6,9,7,18,1];
const b = [1,2,3,4,2,6,7,]

function InsertSort(arr) {
    let container = [];
    for(var a = 0; a < arr.length; a++) {
        if(arr[a+1] < arr[a]) {
            for(var b = a + 1; b >= 0; b--) {
                if(arr[b] < arr[b-1]) {
                    let temp = arr[b-1];
                    arr[b-1] = arr[b];
                    arr[b] = temp;
                };
            };
        };
    };
    console.log(container);
    return arr;
};

console.log(InsertSort(a));

