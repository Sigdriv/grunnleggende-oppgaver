import React from "react";

const style =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2";

export default function Home() {
  return (
    <div className=" m-auto flex justify-center mb-10 mt-10">
      <div>
        <a href="/hei-verden" className={style}>
          Hello World
        </a>
        <a href="/click-me" className={style}>
          Click Me
        </a>
        <a href="click-multiple-buttons" className={style}>
          Click Multiple Buttons
        </a>
        <a href="button-counter" className={style}>
          Button Counter
        </a>

        <a href="/" className={style}>
          Home
        </a>
      </div>
    </div>
  );
}
