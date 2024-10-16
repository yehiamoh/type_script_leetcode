class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
   let following=head;
   let current=head;
   let pervouis=null;

   while(current!==null){
      following=current.next;
      current.next=pervouis;
      pervouis=current
      current=following;
   }

   return pervouis;
  
};