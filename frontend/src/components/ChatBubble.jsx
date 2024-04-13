import React, { useState } from "react";
import {
  FiClipboard,
  FiDelete,
  FiEdit,
  FiMoreVertical,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ChatBubble({ chat }) {
  const [like, setLike] = useState(false);
  const isLike = () => {
    setLike(!like);
  };

  const extractCode = (message) => {
    if (message.includes("```")) {
      const blocks = message.split("```");
      return blocks;
    }
  };
  const isCodeBlock = (str) => {
    if (
      str.includes("=") ||
      str.includes(";") ||
      str.includes("[") ||
      str.includes("]") ||
      str.includes("{") ||
      str.includes("}") ||
      str.includes("#") ||
      str.includes("//")
    ) {
      return true;
    }
    return false;
  };

  const formatMarkdown = (text) => {
    // Bold (**)
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic (*)
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
    // Bold-Italic (**_)
    text = text.replace(/\*\*(.*?)_.*?\*\*/g, "<strong><em>$1</em></strong>");
    // line break (*)
    text = text.replace(/\n/g, "<br>");
    // Inline code (`)
    text = text.replace(/`(.*?)`/g, "<code>$1</code>");
    // Link ([Link](url))
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    // Image (![Alt](url))
    text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">');

    return text;
  };

  const processBlocks = (blocks) => {
    return blocks.map((block, index) => {
      if (isCodeBlock(block)) {
        return (
          <SyntaxHighlighter
            key={index}
            style={coldarkDark}
            language="javascript"
            className="rounded-2xl p-4 m-1"
          >
            {block}
          </SyntaxHighlighter>
        );
      } else {
        return (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: formatMarkdown(block) }}
          />
        );
      }
    });
  };

  return (
    <div className="text-white flex items-center justify-center pb-12">
      <div className="flex flex-col lg:w-[60vw] md:w-[65vw] sm:w-[85vw] w-[85vw]">
        <div className="flex gap-6 items-center bg-zinc-800 rounded-xl rounded-b-none py-4 px-4 border-[1px] border-gray-600">
          <img
            src="https://source.unsplash.com/random/40x40"
            alt="avatar"
            className="rounded-full"
          />
          <p>{chat.query}</p>
        </div>
        <div className="flex gap-6 items-start bg-zinc-900 rounded-xl rounded-t-none py-6 px-4 border-[1px] border-gray-600 border-t-0">
          <img
            src="https://source.unsplash.com/random/40x40"
            alt="avatar"
            className="rounded-full"
          />
          {/* <p>{chat.response}</p> */}
          {/* <p
            dangerouslySetInnerHTML={{ __html: formatMarkdown(chat.response) }}
          /> */}

          {/* <div>
            {codeBlocks ? (
              processBlocks(codeBlocks)
            ) : (
              <p
                dangerouslySetInnerHTML={{
                  __html: formatMarkdown(chat.response),
                }}
              />
            )}
          </div> */}
          <p>{chat.response}</p>
        </div>
        {/* options */}
        <div className="flex gap-4 p-4">
          <button
            onClick={isLike}
            className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700"
          >
            {like ? (
              <div className="text-red-600">
                <FiThumbsUp />
              </div>
            ) : (
              <FiThumbsUp />
            )}
          </button>
          <button className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700">
            <FiThumbsDown />
          </button>
          <button className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700">
            Copy
            <FiClipboard />
          </button>

          <button className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700">
            <FiDelete />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
