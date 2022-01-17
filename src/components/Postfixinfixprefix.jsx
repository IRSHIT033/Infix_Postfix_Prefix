import React, { useState } from "react";

import { postfixtoinfix } from "../logic/postfixtoinfix";
import { postfixtoprefix } from "../logic/postfixtoprefix";
const Postfixinfixprefix = () => {
  const [infix, setInfix] = useState("");
  const [prefix, setprefix] = useState("");
  const [postfix, setpostfix] = useState("");

  const convert = (e) => {
    e.preventDefault();
    setInfix(postfixtoinfix(postfix));
    setprefix(postfixtoprefix(postfix));
  };
  const input_event = (e) => {
    const { value } = e.target;
    setpostfix(value);
  };
  return (
    <>
      <form onSubmit={convert}>
        <label>Postfix</label>
        <br></br>
        <input name="prefix" onChange={input_event} value={postfix} />

        <button type="submit" id="convert">
          convert
        </button>
      </form>
      <br />
      <div id="postfix"> prefix : {prefix}</div>
      <div id="prefix">infix : {infix}</div>
    </>
  );
};

export default Postfixinfixprefix;
