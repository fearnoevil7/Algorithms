const binary = (val, arr) => {
    let lower = 0;
    let upper = arr.length - 1;
    let count = 0;

    while(lower <= upper) {
        const middle = lower + Math.floor((upper - lower) / 2);
        
        if (val === arr[middle]) {
            return arr[middle]
        }

        if(val < arr[middle]) {
            upper = middle - 1;
        } else {
            lower = middle + 1;
        }
        count++;
        console.log("Try", middle);
        console.log("Iterating: ", count);
    }
    return -1;

};

const value = [0,1,2,3,4,5,6,7,8,9,10];

console.log(binary(7,value));