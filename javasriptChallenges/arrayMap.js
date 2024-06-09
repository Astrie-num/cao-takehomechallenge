//sliding windows technique
function hasSubarrayWithTarget(arr , target){
    let start=0;
    let sum=0;

    for (let end = 0; end <arr.length ; end ++){
        sum+=arr[end];
        //decrease the size of the window if the sum is less than or equal to traget
        while(sum>target && start <= end){
            sum -=arr[start]
            start++;
        }
        //Check if the sum equals the target

        if(sum === target){
            return true
        }
    }
    return false;
}

const arr = [4,2,7,1,9,5];
const target = 17;
console.log(hasSubarrayWithTarget(arr,target))