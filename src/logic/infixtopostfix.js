import { getPriority } from "./infixtoprefix.js";

export function infixToPostfix(s) {
  s = s.replace(/ /g, "").trim();
  let st = [];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z") ||
      (c >= "0" && c <= "9")
    )
      result += c;
    else if (c == "(") st.push("(");
    else if (c == ")") {
      while (st[st.length - 1] != "(") {
        result += st[st.length - 1];
        st.pop();
      }
      st.pop();
    } else {
      while (
        st.length != 0 &&
        getPriority(s[i]) <= getPriority(st[st.length - 1])
      ) {
        result += st[st.length - 1];
        st.pop();
      }
      st.push(c);
    }
  }
  while (st.length != 0) {
    result += st[st.length - 1];
    st.pop();
  }
  return result;
}
