import React from "react";
import Home from "../HomeScreen/Home/Home";

export default function MappingArray() {
  const animals = ["Dog", "Cat", "Chicken", "Cow", "Sheep", "Horse"];

  return (
    <div className=" bg-yellow-200">
      <Home />
      <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-200 text-center">
        <h1 className="text-4xl mb-8">Animals</h1>
        {animals.map((animal, index) => (
          <div key={index} className="mb-4">
            <h1 className="text-2xl text-blue-600">{animal}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
