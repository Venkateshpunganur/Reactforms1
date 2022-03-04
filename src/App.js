import React, { useState } from "react";

const App = () => {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();

  const [val3, setVal3] = useState();
  const [val4, setVal4] = useState();

  const fun1 = (event) => {
    setVal1(event.target.value);
  };

  const fun2 = (event) => {
    event.preventDefault();
    setVal2(val1);
    setVal4(val3);
  };

  const fun3 = (event) => {
    setVal3(event.target.value);
  };

  return (
    <>
      <form onSubmit={fun2}>
        <div className="div1">
          <h1>
            Hello {val2} {val4}
          </h1>
          <input
            onChange={fun1}
            className="input1"
            type="text"
            placeholder="Enter Your Name"
          />

          <input
            onChange={fun3}
            className="input2"
            type="text"
            placeholder="password"
          />

          <button type="submit">Click Me..!</button>
        </div>
      </form>
    </>
  );
};

export default App;
