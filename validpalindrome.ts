function isPalindrome(s: string): boolean {
   s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   let r=s.length-1;
   let l=0;
    s=s.trim();
   while(r>l){
      if(s[r]===s[l]){
         l++;
         r--;
      }else{
         return false;
      }
   }
   return true;
};    
