function lengthOfLongestSubstring(s: string): number {
  let l = 0;
  let longest = 0;
  let w = 0;
  let set = new Set();

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    w = r - l + 1;
    longest=Math.max(w,longest);
    set.add(s[r]);
  }
  return longest;
}
