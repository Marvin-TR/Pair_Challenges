let nums = [1,2,3,4,5,6,7,8,9,10];
let nonPrimeArray = []
let primeArray = []


function prime(nums) {
    for (let i = 0; i < nums.length; i++) {
        for(let k = 2; k < nums[i]; k++){
            if(nums[i] % k === 0) {
                nonPrimeArray.push(nums[i]);}
            // } else {
            //     primeArray.push(nums[i]);
            // }

        }

    }

}

prime(nums);
console.log(nonPrimeArray)
console.log(primeArray)