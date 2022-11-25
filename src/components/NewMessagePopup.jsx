import React from "react";
import { ToastContainer, Toast } from "react-bootstrap";

function NewMessagePopup() {
  const [show, setShow] = React.useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <ToastContainer position="middle-end" className="p-2">
      <Toast show={show} onClose={toggleShow}>
        <Toast.Header className="d-flex justify-content-between">
          <i className="bi bi-chat-left-text fw-bold"></i>
        </Toast.Header>
        <Toast.Body className="bg-primary text-white fw-bold">
          У вас новое сообщение
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default NewMessagePopup;
