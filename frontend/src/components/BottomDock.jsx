import React from "react";
import { FiImage, FiMic } from "react-icons/fi";

function BottomDock() {
  return (
    <div className="fixed bottom-10 w-full text-white flex justify-center">
      <form
        action=""
        className="text-white bg-zinc-800 rounded-full flex justify-center"
      >
        <input
          type="text"
          placeholder="Enter Prompt Here..."
          className="bg-zinc-800 rounded-full p-4 w-[45vw]"
          style={{ overflow: "auto", resize: "vertical", maxHeight: "300px" }}
        />
        <button type="button" className="m-2 text-xl">
          <FiMic />
        </button>

        <button type="button" className="mx-4 text-xl">
          <FiImage />
        </button>
      </form>
    </div>
  );
}

export default BottomDock;
