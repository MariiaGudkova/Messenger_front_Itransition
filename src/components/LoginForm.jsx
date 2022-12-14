import React from "react";

function LoginForm(props) {
  const { onLogin } = props;
  const [name, setName] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(name);
  }

  return (
    <form
      className="d-flex flex-column align-items-center p-3 mt-5 w-50 bg-opacity-50 shadow p-3 mb-5 bg-body position-relative rounded"
      onSubmit={handleSubmit}
    >
      <h1 className="h3 fw-bold text-primary mb-5 mt-3">Пожалуйста, войдите</h1>
      <input
        type="text"
        className="w-75 form-control mb-4 p-2"
        id="floatingInput"
        placeholder="Пожалуйста, введите ваше имя"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="w-25 btn btn-outline-primary fw-bold border border-3 border-primary mb-5 p-3"
        type="submit"
      >
        Войти
      </button>
    </form>
  );
}
export default LoginForm;
