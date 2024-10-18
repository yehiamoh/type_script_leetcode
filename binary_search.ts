function search(nums: number[], target: number): number {
   let r=nums.length-1;
   let l=0;
   while(r>=l){
       let mid = Math.floor((r+l)/2);
       if(nums[mid]===target){
           return mid
       }else if(nums[mid]<target){
           l++;
       }else{
          r--;
       }
   }
   return -1;
};