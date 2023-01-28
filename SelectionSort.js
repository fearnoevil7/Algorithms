const a = [7,9,2,0,3,6,9,7,18,1];

function SelectionSort(arr) {
    for(var x = 0; x < arr.length; x++) {
        let _minimum = null;
        if(x != arr.length - 1) {
            let y = x;
            let index = null;
            for( y; y < arr.length; y++) {
                if(_minimum === null) {
                    _minimum = arr[y];
                    index = y;
                } else if(arr[y] < _minimum){
                    _minimum = arr[y];
                    index = y;
                };
            };
            let temp = arr[x];
            arr[x] = _minimum;
            arr[index] = temp;
        };
    };
    return arr;
};

console.log(SelectionSort(a));