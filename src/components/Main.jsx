import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import NewMessagePopup from "./NewMessagePopup";
import Message from "./Message";

function Main(props) {
  const { messages, allUsers, onSendMessage, currentUser, show, onToggleShow } =
    props;

  const [name, setName] = React.useState("");
  const [theme, setTheme] = React.useState("");
  const [text, setText] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const now = new Date();
    const time = now.toLocaleString();
    onSendMessage(currentUser, name, theme, text, time);
    setName("");
    setTheme("");
    setText("");
  }

  const handleOnSelect = (result) => {
    setName(result.name);
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <>
      <form
        className="d-flex flex-column align-items-center p-3 mg-5 w-50 bg-opacity-50 shadow p-3 mb-5 bg-body position-relative rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="h3 fw-bold text-primary mb-5 mt-3">Новое сообщение</h1>
        <div className="w-75 mb-3">
          <ReactSearchAutocomplete
            items={allUsers.map((user) => ({ id: user._id, name: user.name }))}
            fuseOptions={{ threshold: 0.0 }}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            showIcon={false}
            styling={{
              borderRadius: "0.375rem",
              height: "40px",
              boxShadow: "rgb(13, 110, 253, 0.28) 0px 0px 0px 4.2px",
            }}
            placeholder={"Имя"}
            inputSearchString={name}
          />
        </div>
        <div className="w-75 mb-3">
          <input
            type="text"
            className="form-control p-2"
            id="exampleFormControlInput1"
            placeholder="Тема"
            value={theme || ""}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
          />
        </div>
        <div className="w-75 mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Ваше сообщение"
            value={text || ""}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          className="w-25 btn btn-outline-primary fw-bold border border-3 border-primary mb-5 p-3"
          type="submit"
        >
          Отправить
        </button>
      </form>
      <div
        className="accordion accordion-flush w-50 bg-opacity-50 shadow p-3 mb-5 mt-5 bg-body rounded text-center"
        id="accordionFlushExample"
      >
        <h2 className="h4 fw-bold text-primary mb-3 mt-3 mx-auto">
          Входящие сообщения
        </h2>
        {[...messages].reverse().map((message) => {
          return <Message values={message} key={message._id} />;
        })}
      </div>
      <NewMessagePopup
        show={show}
        onToggleShow={onToggleShow}
        lastMessage={messages[messages.length - 1]}
      />
    </>
  );
}

export default Main;
