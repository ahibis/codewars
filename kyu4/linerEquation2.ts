function parseEquation(equation: string, vars: string[]) {
  const params: number[] = new Array(vars.length).fill(0);

  const tokens = [...equation.matchAll(/\d+|\+|\-|\=|[a-z]+/g)].map(([a]) => a);
  tokens.push("+")
  if(tokens[0] == "-") tokens.unshift("0");

  const varsToIndex = vars.reduce<{ [a: string]: number }>(
    (acc, val, index) => {
      acc[val] = index;
      return acc;
    },
    {}
  );

  let equalFlag = false;
  let negativeFlag = false;
  let count = 1;
  let variable = "";

  for (let token of tokens) {
    if (new Set(["+", "=", "-"]).has(token)) {
      const sign = equalFlag == negativeFlag ? 1 : -1;
      params[varsToIndex[variable]] += count * sign;
      negativeFlag = false;
      count = 1;
      variable = "";
    }
    if (token == "-") negativeFlag = true;
    if (token == "=") equalFlag = true;
    if (token in varsToIndex) variable = token;
    if (/\d+/.test(token)) count = Number(token);
  }
  params[params.length-1] *= -1;
  return params;
}

let solve = function (equations: string[]) {
  const varSet = new Set<string>()
  equations.forEach(equation =>
    [...equation.matchAll(/[a-z]+/g)].forEach(([a]) => varSet.add(a)))
  const vars = Array.from(varSet)
  vars.push("")
  const matrix = equations.map(equation=>parseEquation(equation,vars))
  
  return matrix;
};
console.log(solve(["2x+8y=4","-x+4y=14"]))