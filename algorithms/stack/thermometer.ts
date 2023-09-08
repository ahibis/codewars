class Temp {
  value = 0;
  index = 0;
  constructor(value: number, index: number) {
    Object.assign(this, { value, index });
  }
}
function thermometer(temperatures: number[]) {
  const stack: Temp[] = [];
  const res = new Array(temperatures.length).fill(0);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const temperature = temperatures[i];
    //@ts-ignore
    while (stack.length && stack.at(-1).value <= temperature) {
      stack.pop();
    }
    const lastStack = stack.at(-1);
    if (lastStack) {
      res[i] = lastStack.index - i;
    }
    stack.push(new Temp(temperature, i));
  }
  return res;
}
console.log(thermometer([13, 12, 15, 11, 9, 12, 16]));
