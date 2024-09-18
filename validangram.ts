function isAnagram(s: string, t: string): boolean {

   if ((s.length !== t.length)) {
      return false;
   }
   let sHash = new Map();
   let tHash = new Map();
   for (let x of s) {
      sHash.set(x, (sHash.get(x) || 0 + 1))
   }
   for (let x of t) {
      tHash.set(x, (tHash.get(x) || 0 + 1))
   }

   for(let [key,value] of sHash){
      if(tHash.get(key)!==value){
         return false;
      }
   }
   return true;
}