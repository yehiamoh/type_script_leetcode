/**
 *
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
   let dummy:ListNode = new ListNode(0,head);
   let p=head;
   let length=0;
   while(p){ 
       length++;
       p=p.next;
   }
   p=dummy;
   length=length-n;
   while(length>0){
    length--;
    p=p.next!;
   } 
   p.next=p.next!.next;   

   return dummy.next;
};