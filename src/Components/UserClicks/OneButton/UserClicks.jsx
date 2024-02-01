import Home from "../../HomeScreen/Home/Home";

export default function UserClicks() {
  function cliked() {
    alert(`You cliked me!`);
  }

  return (
    <div>
      <div>
        <Home />
      </div>
      <div className=" flex items-center justify-center">
        <button
          onClick={cliked}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click me
        </button>
      </div>
    </div>
  );
}
