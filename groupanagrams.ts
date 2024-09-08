function groupAnagrams(strs: string[]): string[][] {
  const hash: Map<string, string[]> = new Map();

  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!hash.has(sortedStr)) {
      hash.set(sortedStr, [str]);
    } else {
      hash.get(sortedStr)?.push(str);
    }
  }
  return Array.from(hash.values());
}
