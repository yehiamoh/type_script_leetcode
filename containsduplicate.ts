function containsDuplicate(nums: number[]) {
   /*
   hashmap={
   
   1:2,
   2:1,
   3:1
   }
   if key is more than 1 so true have duplicates
   
   */


   let hashMap = new Map();
   let boolAnswer = false;

   for (const e of nums) {
      hashMap.set(e, (hashMap.get(e) || 0) + 1);
   }
   for (const count of hashMap.values()) {
      if (count > 1) {
         boolAnswer = true;
         break;
      }

   }

   return boolAnswer;
}