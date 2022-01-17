function isOperand(c) {
  if (c.charCodeAt() >= 48 && c.charCodeAt() <= 57) return true;
  else return false;
}

function evaluatePrefix(exprsn) {
  let Stack = [];

  for (let j = exprsn.length - 1; j >= 0; j--) {
    if (isOperand(exprsn[j])) Stack.push(exprsn[j].charCodeAt() - 48);
    else {
      let o1 = Stack[Stack.length - 1];
      Stack.pop();
      let o2 = Stack[Stack.length - 1];
      Stack.pop();

      switch (exprsn[j]) {
        case "+":
          Stack.push(o1 + o2);
          break;
        case "-":
          Stack.push(o1 - o2);
          break;
        case "*":
          Stack.push(o1 * o2);
          break;
        case "/":
          Stack.push(o1 / o2);
          break;
      }
    }
  }

  return Stack[Stack.length - 1];
}

export const Eva_prefix = (s) => {
  s = s.replace(/ /g, "").trim();

  return evaluatePrefix(s);
};
