function findMin(nums: number[]): number {
    let r=nums.length-1;
    let l=0;
    while(l<=r){
      let mid=Math.floor((l+r)/2);
      if(nums[mid]>nums[r]){
         l=mid+1;
      }
      else{
         r=mid;
      }
    }
    return nums[l];
};