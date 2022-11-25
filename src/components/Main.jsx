function Main() {
  return (
    <form className="d-flex flex-column align-items-center p-3 mt-5 w-50 bg-opacity-50 shadow p-3 mb-5 bg-body position-relative rounded">
      <h1 className="h3 fw-bold text-primary mb-5 mt-3">Новое сообщение</h1>
      <div className="w-75 mb-3">
        <input
          type="text"
          className="form-control p-2"
          id="exampleFormControlInput1"
          placeholder="Имя получателя"
        />
      </div>
      <div className="w-75 mb-3">
        <input
          type="text"
          className="form-control p-2"
          id="exampleFormControlInput1"
          placeholder="Тема"
        />
      </div>
      <div className="w-75 mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Ваше сообщение"
        ></textarea>
      </div>
      <button
        className="w-25 btn btn-outline-primary fw-bold border border-3 border-primary mb-5 p-3"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
}

export default Main;
