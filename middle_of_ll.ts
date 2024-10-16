/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
   let count=0;
   let p=head; 
   let p2=head;
   while(p!.next){
       count++;
       p=p!.next;
   } 
   let i=0;

   if(count===0){
       return head;
   }

   while(i<Math.floor(count/2)){
       p2=p2!.next;
       i++;
   }
   return count%2===0?p2:p2!.next;
};