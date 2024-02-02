import React, { useState } from "react";
import Home from "../../HomeScreen/Home/Home";

export default function CountingButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((oldValue) => oldValue + 1);
  }

  return (
    <div className="text-center">
        <Home />
      <h1 className=" text-2xl">{count}</h1>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Click me to <br /> increment the counter</button>
    </div>
  );
}
