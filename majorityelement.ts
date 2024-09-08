function majorityElement(nums: number[]) {
   let hash=new Map();
    for(let num of nums){
      hash.set(num,((hash.get(num)||0)+1));
    }
    let majority=0;
    for(let [key ,value]of hash){
      majority=Math.max(majority,value);
    }
   return getKeyFromValue(majority,hash)
    
};

function getKeyFromValue(val,hashMap){
   for(let [key,value] of hashMap.entries()){
      if(value===val){
         return key;
      }
    }
}