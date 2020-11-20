let nums = [1,2,3,4,5,6,7,8,9,10];
let primeArray = []


function prime(nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let prime = true;

        if (num === 1){
            prime = false;
        } else if (num === 2){
            prime = true;
        }else {
            for(var x = 2; x < num; x++) {
                if(num % x === 0) {
                    prime = false;
                }
            }
        }
        if (prime) {
            primeArray.push(nums[i]);
        }
    }

}

prime(nums);
console.log(primeArray)