import { useState } from "react";
function Calculator() {
  const [result, setresult] = useState("");
  const clickhandle = (e) => {
    setresult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setresult("");
  };

  const calculate = () => {
    setresult(eval(result).toString());
  };

  const clearLast = () => {
    setresult(result.slice(0, -1));
  };
  return (
    <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
      <div className="Main w-72 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100 ">
        <div className="screen p-2 ">
          <input
            value={result}
            type="text "
            className="text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 rounded-lg bg-gray-100 text-2xl pt-10 outline-none text-right "
            placeholder="0 "
          ></input>

          <div className="brand bg-gray-200 bg-opacity-90 mb-2  ">
            <h1 className="text-gray-900 text-xs font-bold text-center ">
              Calculator
            </h1>
          </div>
          <div className="keyboard">
            <div className="flex justify-between m-2">
              <input
                type="buttom"
                value="AC"
                onClick={clearScreen}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="Dlt"
                onClick={clearLast}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="%"
                onClick={clickhandle}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="/"
                onClick={clickhandle}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium   "
              ></input>
            </div>
            <div className="flex justify-between m-2">
              <input
                type="buttom"
                value="7"
                onClick={clickhandle}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="8"
                onClick={clickhandle}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="9"
                onClick={clickhandle}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="*"
                onClick={clickhandle}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium   "
              ></input>
            </div>
            <div className="flex justify-between m-2">
              <input
                type="buttom"
                value="4"
                onClick={clickhandle}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="5"
                onClick={clickhandle}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="6"
                onClick={clickhandle}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="-"
                onClick={clickhandle}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium   "
              ></input>
            </div>
            <div className="flex justify-between m-2">
              <input
                type="buttom"
                value="1"
                onClick={clickhandle}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="2"
                onClick={clickhandle}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="3"
                onClick={clickhandle}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="+"
                onClick={clickhandle}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium   "
              ></input>
            </div>
            <div className="flex justify-between m-2">
              <input
                type="buttom"
                value="0"
                onClick={clickhandle}
                className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="00"
                onClick={clickhandle}
                className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="."
                onClick={clickhandle}
                className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium "
              ></input>
              <input
                type="buttom"
                value="="
                onClick={calculate}
                className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium   "
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
