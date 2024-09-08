function majorityElement(nums: number[]) {
   let hash=new Map();
    for(let num of nums){
      hash.set(num,((hash.get(num)||0)+1));
    }
    let majority=0;
    for(let [key ,value]of hash){
      majority=Math.max(majority,value);
    }
    for(let [key,value] of hash.entries()){
      if(value===majority){
         return key;
      }
    }
    
};