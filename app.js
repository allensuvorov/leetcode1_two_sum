let nums = [2, 7, 11, 15];
let target = 9; 

var twoSum = function(nums, target) {
    let Map = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement.toString() in Map) {
            let result = [Map[complement.toString()], i];
            return result;
        };
        let Key = nums[i];  
        Map[Key] = i;
    };
    
    console.log(Object.keys(Map));
    console.log(Map);
};
console.log(twoSum(nums, 13));