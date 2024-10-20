function isPerfectSquare(num: number): boolean {
   let r=num;
   let l=0
   while(r>=l){
      let mid =Math.floor((l+r)/2);
      if(mid*mid===num){
       return true;
      }else if(mid*mid>num){
       r=mid-1
      }else{
       l=mid+1
      }
   }
   return false;
};