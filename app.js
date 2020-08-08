let nums = [2, 7, 11, 15];
let target = 9; 

var twoSum = function(nums, target) {
    let Map = {}; // declare an object to build hash map for nums
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // calculate what value of the second number that matches the condition
        // check if the second number is already a key in the current hash map
        if (complement.toString() in Map) {
            return [Map[complement.toString()], i]; // return value of matching key and current increment
        };
        Map[nums[i].toString()] = i; // add key nums[i] with value i
    };
};
console.log(twoSum(nums, target));