import React from "react";

export default function Home() {
  return (
    <div className=" m-auto flex items-center justify-center min-h-screen">
      <div>
        <a
          href="/hei-verden"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Hello World
        </a>
        <a
          href="/click-me"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Click Me
        </a>
      </div>
    </div>
  );
}
