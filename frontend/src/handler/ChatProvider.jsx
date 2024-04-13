import { createContext, useState } from "react";

export const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <ChatContext.Provider value={{ chatMessages, setChatMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <ChatContext.Provider value={{ modal, handleModal }}>
      {children}
    </ChatContext.Provider>
  );
}
