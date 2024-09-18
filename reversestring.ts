function reverseString(s: string[]): void {
    let right=s.length-1;
    let left=0;
    let temp="";
    while(left<right){
      temp=s[left];
      s[left]=s[right];
      s[right]=temp;
      temp="";
      left++;
      right--;
    }
};