function canConstruct(ransomNote: string, magazine: string): boolean {
   /**
    * 
    *  hashransom {
    * 
    * a:2,
    * b:1
    * 
    * }
    * 
    * 
    * 
    * 
    * hashmagaine{
    *       
    * c:3,
    * a:2
    * 
    * 
    * }
    * 
    * 
    * hashrasnom["a"]==hasmagazine["a"] {
    * true}
    * 
    * 
    *  */

   if (ransomNote.length > magazine.length) {
      return false;
   }

   const str1 = ransomNote.split('').sort().join();
   const str2 = magazine.split('').sort().join();

   const ransomHashMap = new Map();
   const magazineHashMap = new Map();

   let ans = true;

   for (const x of str1) {
      ransomHashMap.set(x, (ransomHashMap.get(x) || 0) + 1);
   }
   for (const x of str2) {
      magazineHashMap.set(x, (magazineHashMap.get(x) || 0) + 1);
   }

   for (const [key,value] of ransomHashMap) {
      if ((magazineHashMap.get(key) ||0) < value) {
         return false;
      }
   }
   return true;
};