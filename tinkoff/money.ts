function getBanknotes(
  capacity: number,
  banknotes: number[],
  sum = 0,
  take: number[] = []
): number[] {
  if (sum > capacity) return [];
  if (sum == capacity) return take;
  for (let index in banknotes) {
    const value = banknotes[index];
    const sum1 = sum + value;
    const arr = [...take, value];
    const res = getBanknotes(capacity, banknotes.slice(+index + 1), sum1, arr);
    if (res.length) return res;
  }
  return [];
}

console.log(getBanknotes(5, [2,2,1,1]));
