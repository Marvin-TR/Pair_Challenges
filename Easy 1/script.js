var nums = [2, 4, 7, 11, 15, 16];

var evens = [];
var odds = [];

function even(nums) {
  for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0) {
      evens.push(nums[i])
    } else {
      odds.push(nums[i])
    };
  }

}

even(nums);
console.log(evens);
console.log(odds);