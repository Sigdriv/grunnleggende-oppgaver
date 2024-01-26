import React from "react";
import GoBack from "../GoBack/GoBack";
import Home from "../Home/Home";

export default function HelloWorld() {
  return (
    <div className=" m-auto flex items-center justify-center min-h-screen">
      <div>
        <Home />
      </div>
      <div className=" bg-yellow-400 p-40">
        <h1 className=" text-blue-600 text-4xl font-bold">Hello World</h1>
      </div>
    </div>
  );
}
