import React, { useRef } from "react";
import { FiImage, FiMic, FiSend } from "react-icons/fi";
import { chatHandler } from "./../handler/chatHandler";

function BottomDock() {
  const inputRef = useRef();
  const formRef = useRef();

  const { handleChatSubmit } = chatHandler();

  const handleSend = async (e) => {
    e.preventDefault();
    const message = inputRef.current.value;
    console.log("Sending Message : ", message);
    handleChatSubmit(inputRef);
  };

  return (
    <div className="fixed bottom-10 w-full text-white flex justify-center">
      <form
        ref={formRef}
        onSubmit={handleSend}
        className="text-white bg-zinc-800 rounded-full flex justify-center"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Prompt Here..."
          className="bg-zinc-800 rounded-full p-4 w-[45vw]"
          style={{ overflow: "auto", resize: "vertical", maxHeight: "300px" }}
        />
        <button type="button" className="m-2 text-xl">
          <FiMic />
        </button>

        <button type="button" className="mx-4 text-xl" onClick={handleSend}>
          <FiSend />
        </button>
      </form>
    </div>
  );
}

export default BottomDock;
