class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
   let newNode :ListNode= new ListNode();
   let dummy:ListNode =newNode;

   while(list1&&list2){
       if(list1.val<=list2.val){
           dummy.next=list1;
           list1=list1.next;
       }else{
           dummy.next=list2;
           list2=list2.next;
       }
       dummy=dummy.next;
   }
   if (list1 != null) {
   dummy.next = list1;
 } else if (list2 != null) {
   dummy.next = list2;
 }

   return newNode.next; // to get the next number after the default val of zero of the initializing the new node
};