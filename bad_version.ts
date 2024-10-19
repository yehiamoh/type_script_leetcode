/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
   return function (n: number): number {
     let r = n;
     let l = 0;
     let mid = 0;
     while (r >= l) {
       mid = Math.floor((r + l) / 2);
       if (isBadVersion(mid)) {
         r = mid-1;
        // lastBadVersion=mid;
       } else {
         l = mid+1;
       }
     }
     return l;
   };
 };
 