import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearLast = () => {
    setResult(result.slice(0, -1));
  };

  const handlePercentage = () => {
    try {
      setResult((parseFloat(result) / 100).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
      <div className="Main w-72 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="screen p-2">
          <input
            value={result}
            type="text"
            className="text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 rounded-lg bg-gray-100 text-2xl pt-10 outline-none text-right"
            placeholder="0"
            readOnly
          ></input>

          <div className="brand bg-gray-200 bg-opacity-90 mb-2">
            <h1 className="text-gray-900 text-xs font-bold text-center">
              Calculator
            </h1>
          </div>
          <div className="keyboard">
            <div className="flex justify-between m-2">
              <button
                value="AC"
                onClick={clearScreen}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                AC
              </button>
              <button
                value="Dlt"
                onClick={clearLast}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                Dlt
              </button>
              <button
                value="%"
                onClick={handlePercentage}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                %
              </button>
              <button
                value="/"
                onClick={clickHandle}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                /
              </button>
            </div>
            <div className="flex justify-between m-2">
              <button
                value="7"
                onClick={clickHandle}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                7
              </button>
              <button
                value="8"
                onClick={clickHandle}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                8
              </button>
              <button
                value="9"
                onClick={clickHandle}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                9
              </button>
              <button
                value="*"
                onClick={clickHandle}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                *
              </button>
            </div>
            <div className="flex justify-between m-2">
              <button
                value="4"
                onClick={clickHandle}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                4
              </button>
              <button
                value="5"
                onClick={clickHandle}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                5
              </button>
              <button
                value="6"
                onClick={clickHandle}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                6
              </button>
              <button
                value="-"
                onClick={clickHandle}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                -
              </button>
            </div>
            <div className="flex justify-between m-2">
              <button
                value="1"
                onClick={clickHandle}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                1
              </button>
              <button
                value="2"
                onClick={clickHandle}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                2
              </button>
              <button
                value="3"
                onClick={clickHandle}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                3
              </button>
              <button
                value="+"
                onClick={clickHandle}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                +
              </button>
            </div>
            <div className="flex justify-between m-2">
              <button
                value="0"
                onClick={clickHandle}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                0
              </button>
              <button
                value="00"
                onClick={clickHandle}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                00
              </button>
              <button
                value="."
                onClick={clickHandle}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                .
              </button>
              <button
                value="="
                onClick={calculate}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
