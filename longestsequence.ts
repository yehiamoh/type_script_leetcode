function longestConsecutive(nums: number[]): number {
   const set= new Set(nums);
   let longestSequence=0;

   for(const num of nums){
      if(!set.has(num-1)){ // the condition means that the number we are in is the first num in the seq
         let length=1;
         let next =num+1;
         while(set.has(next)){ // while the set have the next number we will increment it to move to the next one and increment the lenght
            next++;
            length++;
         }
      longestSequence=Math.max(length,longestSequence);
      }
   }
   return longestSequence;
    
};