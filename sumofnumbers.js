const Nums = [1, 2, 3, 4, 5, 6];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

function sumWhile(nums) {
  let total = 0;
  let index = 0;
  while (index < nums.length) {
    total += nums[index];
    index++;
  }
  return total;
}

function sumRec(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRec(nums.slice(1, nums.length));
}

function sumUS(nums) {
  return _.reduce(nums, (memo, n) => memo + n);
}

console.log(sumFor(Nums));
console.log(sumWhile(Nums));
console.log(sumRec(Nums));
console.log(sumUS(Nums));
