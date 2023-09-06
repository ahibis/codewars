import { times,  } from "lodash";
type good = [number, number]; // вместимость, цена

function backpack(size: number, goods: good[]) {
  const cash1 = times(size + 1, () => 0);
  const cash2 = times(size + 1, () => 0);
  const items1: good[][] = times(size + 1, () => []);
  const items2: good[][] = times(size + 1, () => []);
  for (let [capacity, value] of goods) {
    for (let i = capacity; i < size + 1; i += 1) {
      const newValue = cash1[i - capacity] + value;
      if (newValue > cash1[i]) {
        cash2[i] = newValue;
        items2[i] = [...items1[i - capacity], [capacity, value]];
      }
    }
    Object.assign(cash1,cash2)
    Object.assign(items1,items2)
  }
  console.log(items1)
  console.log(cash1)
  return cash1.at(-1)
}
console.log(
  backpack(30, [
    [1, 5],
    [3, 7],
    [20, 9],
    [4, 6],
    [13, 5],
  ])
);
