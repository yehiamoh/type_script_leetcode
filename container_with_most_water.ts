function maxArea(height: number[]): number {
  let right = height.length - 1;
  let left = 0;
  let max = 0;


  while (right > left) {
    max= Math.max(max, getArea(height, right, left));
    if (height[right] > height[left]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

function getArea(height: number[], right: number, left: number) {
   const width=right-left;
  return Math.min(height[left],height[right])*width
}
