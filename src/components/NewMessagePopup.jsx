import React from "react";
import { ToastContainer, Toast } from "react-bootstrap";

function NewMessagePopup(props) {
  const { show, onToggleShow, lastMessage } = props;

  if (!lastMessage?.sender) {
    return null;
  }
  return (
    <ToastContainer
      className="p-2 position-fixed"
      style={{ top: "350px", right: "0" }}
    >
      <Toast show={show} onClose={onToggleShow}>
        <Toast.Header className="d-flex justify-content-between">
          <i className="bi bi-chat-left-text fw-bold"></i>
        </Toast.Header>
        <Toast.Body className="bg-primary text-white">
          <p className="fw-bold">
            У вас новое сообщение oт {lastMessage.sender} {lastMessage.time}
          </p>
          <p>{lastMessage.text}</p>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default NewMessagePopup;
