function evalRPN(tokens: string[]): number {
   let stack:number[] = [];
   for (const e of tokens) {
     if (isNaN(Number(e))) {
       let n1 = Number(stack.pop());
       let n2 =  Number(stack.pop());
       switch (e) {
         case "+":
           stack.push(n1! + n2!);
           break;
         case "*":
           stack.push(n1! * n2!);
           break;
         case "-":
           stack.push(n2! - n1!);
           break;
         case "/":
           stack.push(n2! / n1!|0);
           break;
         default:
           break;
       }
     } else {
       stack.push(Number(e));
     }
   }
 
   return stack[0];
 }
 