import React, { useState } from "react";
import { infixToPrefix } from "./logic/infixtoprefix.js";
import { infixToPostfix } from "./logic/infixtopostfix";

const NumericType = () => {
  const [infix, setInfix] = useState("");
  const [prefix, setprefix] = useState();
  const [postfix, setpostfix] = useState();

  const convert = (e) => {
    e.preventDefault();
    setpostfix(infixToPostfix(infix));
    setprefix(infixToPrefix(infix));
  };

  const input_event = (e) => {
    const { value } = e.target;
    setInfix(value);
  };
  return (
    <>
      <form onSubmit={convert}>
        <label>Infix</label>
        <br></br>
        <input name="infix" onChange={input_event} value={infix} />
        <button type="submit" id="convert">
          convert
        </button>
      </form>
      <br />
      <div id="postfix"> postfix : {postfix}</div>
      <div id="prefix">prefix : {prefix}</div>
    </>
  );
};

export default NumericType;
