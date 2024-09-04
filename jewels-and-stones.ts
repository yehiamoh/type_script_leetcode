function numJewelsInStones(jewels, stones) { 
   let sum=0;  
   let stonesHashMap=new Map();

   for (const str of stones) {   
      stonesHashMap.set(str, (stonesHashMap.get(str) || 0) + 1);
   } 

   for(const e of jewels){
      if(stonesHashMap.has(e))
         sum+=stonesHashMap.get(e);
   }

   return sum;
  
};

console.log(numJewelsInStones("aA","aAAbbbb"));