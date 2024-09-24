function isValid(s: string): boolean {

   let hashMap = new Map<string, string>([
      [')', '('],
      [']', '['],
      ['}', '{']
  ]);
  let stack=[]
   for(const c of s){
      if(!(hashMap.has(c))){
         stack.push(c);
      }else{
         if(stack.length===0 || stack.pop()!==hashMap.get(c)){
            return false;
         }
      }
   }

   return stack.length===0;
    
};

