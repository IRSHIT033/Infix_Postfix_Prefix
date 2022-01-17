import Reac, { useState } from "react";
import { eva_postfix } from "./logic/Evaluationpostfix";
import { Eva_prefix } from "./logic/EvaluationPrefix";

const Stringtype = () => {
  const [prefix, setprefix] = useState();
  const [postfix, setpostfix] = useState();
  const [Ans, setAns] = useState();
  const [Ans2, setAns2] = useState();
  const input_event = (e) => {
    e.preventDefault();
    setAns(Eva_prefix(prefix));
  };
  const input_event2 = (e) => {
    e.preventDefault();
    setAns2(eva_postfix(postfix));
  };
  const postfixsetter = (e) => {
    const { value } = e.target;
    setpostfix(value);
  };

  const prefixsetter = (e) => {
    const { value } = e.target;
    setprefix(value);
  };
  return (
    <>
      <label>Prefix</label>
      <br></br>
      <input name="prefix" onChange={prefixsetter} value={prefix} />
      <button type="submit" id="convert" onClick={input_event}>
        result
      </button>
      <br />
      <div id="postfix"> Result is : {Ans}</div>
      <label>Postfix</label>
      <br></br>
      <input name="prefix" onChange={postfixsetter} value={postfix} />
      <button type="submit" id="convert" onClick={input_event2}>
        result
      </button>
      <br />
      <div id="postfix"> Result is : {Ans2}</div>
    </>
  );
};

export default Stringtype;
