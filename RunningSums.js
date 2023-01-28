let nums = [1,2,3,4];

function RunningSum(arr){
    var container = null;
    for(var x = 0; x < arr.length; x++){
        if (container == null) {
            container = arr[x];
        } else {
            arr[x] += container;
            container = arr[x];
        }
    };

};

RunningSum(nums);
console.log(nums);

nums = [1,1,1,1,1];
RunningSum(nums);
console.log(nums);

nums = [3,1,2,10,1];
RunningSum(nums);
console.log(nums);
