nums = [1,7,3,6,5,6];
nums2 = [11,11,5,3,3];
nums3 = [26,6,7,3,3,10,13,4,5,2,2];
nums4 = [2,1,-1];
nums6 = [1,2,3];
nums7 = [-1,-1,-1,-1,-1,0];
nums8 = [-1,-1,0,-1,-1,-1];
nums9 = [-1,-1,0,1,0,-1];


function pivotIndex(arr){
    let mySwitch = false;
    let container2 = 0;
    for(var i = 0; i < arr.length; i++){
        if(i === 0){
            let container = 0;
            for(var z = (i + 1); z < arr.length; z++){
                container += arr[z];
            };
            if(container === 0){
                mySwitch = true;
                // console.log("Pivot Index is: ", arr[i]);
                return arr[i];
                // break;
            }
        } else {
            let container = 0;
            for(var z = (i + 1); z < arr.length; z++){
                container += arr[z];
            };
            // console.log("Finding my bearings", container2, container, container2 === container , "Current Index: ", i);
            if(container === container2) {
                mySwitch = true;
                // console.log(arr[i-1], arr[i], i, "%%%%%%%%tester%%%%%%%%%%\n\n\n");
                // console.log("Pivot Index is: ", arr[i]);
                // if(container === container2){
                //     return i;
                // }

                return i;
                
            }
            // console.log("My Switch", mySwitch, "Current Index: ", i, );
            
        }
        container2 += arr[i];
    }
    if(mySwitch === false) {
        // console.log("Does not have pivot index: ", -1);
        return -1;
    }
}

console.log("Pivot Index: ", pivotIndex(nums));
// console.log("Pivot Index: ", pivotIndex(nums2));
// console.log("Pivot Index: ", pivotIndex(nums3));
// console.log("Pivot Index: ", pivotIndex(nums4));
// console.log("Pivot Index: ", pivotIndex(nums6));
// console.log("Pivot Index: ", pivotIndex(nums7));
// console.log("Pivot Index: ", pivotIndex(nums8));
// console.log("Pivot Index: ", pivotIndex(nums9));