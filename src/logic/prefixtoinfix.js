function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
  }
  return false;
}

function convert(str) {
  let stack = [];

  // Length of expression
  let l = str.length;

  // Reading from right to left
  for (let i = l - 1; i >= 0; i--) {
    let c = str[i];

    if (isOperator(c)) {
      let op1 = stack[stack.length - 1];
      stack.pop();
      let op2 = stack[stack.length - 1];
      stack.pop();

      // Concat the operands and operator
      let temp = "(" + op1 + c + op2 + ")";
      stack.push(temp);
    } else {
      // To make character to string
      stack.push(c + "");
    }
  }
  return stack[stack.length - 1];
}

export const prefixtoinfix = (s) => {
  s = s.replace(/ /g, "").trim();
  return convert(s);
};
