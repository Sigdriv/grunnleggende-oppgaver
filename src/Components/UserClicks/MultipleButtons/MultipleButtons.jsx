import React from "react";
import Button from "./Button/Button";
import Home from "../../HomeScreen/Home/Home";

export default function MultipleButtons() {
  function handleClick(id) {
    alert(`Button ${id} was clicked`);
  }

  return (
    <>
      <div>
        <Home />
      </div>
      <div className="flex items-center justify-center">
        <Button onClick={() => handleClick(1)}>Butoon 1</Button>
        <Button onClick={() => handleClick(2)}>Butoon 2</Button>
        <Button onClick={() => handleClick(3)}>Butoon 3</Button>
      </div>
    </>
  );
}
