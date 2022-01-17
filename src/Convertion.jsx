import React, { useState } from "react";
import PrefixInfixPostfix from "./components/PrefixInfixPostfix.js";
import Postfixinfixprefix from "./components/Postfixinfixprefix.jsx";
import NumericType from "./NumericType.jsx";

const Convertion = () => {
  const [infix, setinfix] = useState(false);
  const [postfix, setpostfix] = useState(false);
  const [prefix, setprefix] = useState(false);
  const clicked1 = () => {
    setinfix(!infix);
  };
  const clicked2 = () => {
    setprefix(!prefix);
  };
  const clicked3 = () => {
    setpostfix(!postfix);
  };
  return (
    <>
      <div className="flex">
        <div className="flex-child">
          <button onClick={clicked1}> {"Infix -> postfix/ prefix"} </button>
          {infix ? <NumericType /> : <></>}
        </div>
        <div className="flex-child">
          <button onClick={clicked2}> {"prefix -> postfix/ infix"} </button>
          {prefix ? <PrefixInfixPostfix /> : <></>}
        </div>
        <div className="flex-child">
          <button onClick={clicked3}> {"Postfix -> prefix/ infix"} </button>
          {postfix ? <Postfixinfixprefix /> : <></>}
        </div>
      </div>
    </>
  );
};

export default Convertion;
