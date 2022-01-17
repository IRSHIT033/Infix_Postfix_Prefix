import React, { useState } from "react";

import { prefixtoinfix } from "../logic/prefixtoinfix";
import { prefixtopostfix } from "../logic/prefixtopostfix";
const PrefixInfixPostfix = () => {
  const [infix, setInfix] = useState("");
  const [prefix, setprefix] = useState();
  const [postfix, setpostfix] = useState();

  const convert = (e) => {
    e.preventDefault();
    setInfix(prefixtoinfix(prefix));
    setpostfix(prefixtopostfix(prefix));
  };
  const input_event = (e) => {
    const { value } = e.target;
    setprefix(value);
  };
  return (
    <>
      <form onSubmit={convert}>
        <label>Prefix</label>
        <br></br>
        <input name="prefix" onChange={input_event} value={prefix} />
        <button type="submit" id="convert">
          convert
        </button>
      </form>
      <br />
      <div id="postfix"> postfix : {postfix}</div>
      <div id="prefix">infix : {infix}</div>
    </>
  );
};

export default PrefixInfixPostfix;
