import React from "react";
import GoBack from "../GoBack/GoBack";

export default function UserClicks() {
  function cliked() {
    alert("You cliked me!");
  }

  return (
    <div className=" m-auto flex items-center justify-center min-h-screen">
      <button onClick={cliked} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me</button>
    </div>
  );
}
