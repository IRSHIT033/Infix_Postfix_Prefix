import { useState } from "react";
import StringType from "./StringType";
import Convertion from "./Convertion";
import "./App.css";

function App() {
  const [type, setType] = useState(true);
  const click = () => {
    setType(!type);
  };
  return (
    <>
      <div className="text">
        <p>Toggle the button to change the mode</p>
        <p>
          current mode : -
          <span>{type ? " numeric Calculation" : " string convertion"}</span>
        </p>
      </div>
      <div className="textcenter">
        <button onClick={click}>Toggle</button>
      </div>
      {type ? <StringType /> : <Convertion />}
    </>
  );
}

export default App;
