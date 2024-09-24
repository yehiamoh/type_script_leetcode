function calPoints(operations: string[]): number {
   let stack: number[] = [];

   for (const e of operations) {
       if (e === 'C') {
           stack.pop();
       } 
       else if (e === 'D') {
           stack.push(2 * stack[stack.length - 1]);
       } 
       else if (e === '+') {
           let top = stack[stack.length - 1];
           let secondTop = stack[stack.length - 2];
           stack.push(top + secondTop);
       } 
       else {
           stack.push(parseInt(e));
       }
   }

   return stack.reduce((acc, val) => acc + val, 0);
}
