// Get Infix for a given postfix
// expression
function getInfix(exp) {
  let stack = [];
  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];

    if (c == "*" || c == "/" || c == "^" || c == "+" || c == "-") {
      let s1 = stack[stack.length - 1];
      stack.pop();
      let s2 = stack[stack.length - 1];
      stack.pop();
      let temp = "(" + s2 + c + s1 + ")";
      stack.push(temp);
    } else {
      stack.push(c + "");
    }
  }
  const res = stack[stack.length - 1];
  return res;

  // There must be a single element
  // in stack now which is the required
  // infix.
}

export function postfixtoinfix(s) {
  s = s.replace(/ /g, "").trim();
  return getInfix(s);
}
