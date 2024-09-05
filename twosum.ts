function twoSum(nums: number[], target: number) {  // nums= 2 7 15 6    target=9
  const hashMap = new Map();
  for (let i=0;i<nums.length;i++) {
    const diff = target - nums[i]; // the diff is the other number of the array that we are serching about    
    if (hashMap.has(diff)) return [hashMap.get(diff), i]; // if we found the diff appear in the hash that mean we found the number that when we add it to the current number gives the target
    hashMap.set(nums[i], i)  // store the current elemnt with its index
  }
}
