function isOperator(c) {
  return (
    !(c >= "a" && c <= "z") &&
    !(c >= "0" && c <= "9") &&
    !(c >= "A" && c <= "Z")
  );
}

export function getPriority(C) {
  if (C == "-" || C == "+") return 1;
  else if (C == "*" || C == "/") return 2;
  else if (C == "^") return 3;
  return 0;
}

export function infixToPrefix(Infix) {
  let infix = Infix.replace(/ /g, "").trim();

  let operators = [];
  let operands = [];
  for (let i = 0; i < infix.length; i++) {
    if (infix[i] == "(") {
      operators.push(infix[i]);
    } else if (infix[i] == ")") {
      while (operators.length != 0 && operators[operators.length - 1] != "(") {
        let op1 = operands.pop();
        let op2 = operands.pop();
        let op = operators.pop();
        let tmp = op + op2 + op1;
        operands.push(tmp);
      }
      operators.pop();
    } else if (!isOperator(infix[i])) {
      operands.push(infix[i] + "");
    } else {
      while (
        operators.length &&
        getPriority(infix[i]) <= getPriority(operators[operators.length - 1])
      ) {
        let op1 = operands.pop();

        let op2 = operands.pop();

        let op = operators.pop();

        let tmp = op + op2 + op1;
        operands.push(tmp);
      }

      operators.push(infix[i]);
    }
  }
  while (operators.length != 0) {
    let op1 = operands.pop();

    let op2 = operands.pop();

    let op = operators.pop();

    let tmp = op + op2 + op1;
    operands.push(tmp);
  }
  return operands[operands.length - 1];
}
