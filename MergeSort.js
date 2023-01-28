const a = [7,9,2,0,3,6,9,7,18,1];
const b = [17,8,2,4,5,1,6,8,23,53,62,1,5,9];


function mergeSort(arr) {

    let _container = [];

    function sortInOrder(number) {
        if(_container.length > 0) {
            for(var x = 0; x < _container.length; x++) {
    
                if(_container[x] > number) {
                    let _front = _container.slice(0, x);
                    _front.push(number);
                    let _back = _container.slice(x, _container.length);
                    _container = _front.concat(_back);
                    break;
                };
            };
        } else {
            _container = [number];
            // return _container;
        };
    };


    function split(arr) {
        if(arr.length === 1) {
            sortInOrder(arr[0]);
            // console.log("Finishing", arr);
            return arr;
        };
    
        if(arr.length % 2 === 0) {
            if(arr.length > 1) {
                let front = arr.slice(0, arr.length / 2);
                let back = arr.slice(arr.length / 2, arr.length);
                return split(front), split(back);
            } else {
                return split(arr);
            };
        };
        if(arr.length % 2 === 1) {
            if(arr.length > 1) {
                let front = arr.slice(0, (arr.length + 1) / 2);
                let back = arr.splice((arr.length + 1) / 2, arr.length);
                return split(front), split(back);
            } else {
                return split(arr);
            }
        };  
    };

    split(arr);
    return _container;

};






console.log("Sorted!", mergeSort(a));