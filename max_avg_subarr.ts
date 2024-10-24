function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  let avg = 0;
  let maxAvg = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  maxAvg = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i];
    sum -= nums[i - k];

    avg = sum / k;

    maxAvg = Math.max(maxAvg, avg);
  }
  return maxAvg;
}
