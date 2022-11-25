import NewMessagePopup from "./NewMessagePopup";

function Main() {
  return (
    <>
      <form className="d-flex flex-column align-items-center p-3 mg-5 w-50 bg-opacity-50 shadow p-3 mb-5 bg-body position-relative rounded">
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
      <div
        className="accordion accordion-flush w-50 bg-opacity-50 shadow p-3 mb-5 mt-5 bg-body rounded text-center"
        id="accordionFlushExample"
      >
        <h2 className="h4 fw-bold text-primary mb-3 mt-3 mx-auto">
          Входящие сообщения
        </h2>
        <div className="accordion-item rounded">
          <h3 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed btn-outline-primary border border-1 border-primary p-3 rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Миша: Встреча с Мишаней
              {/* {`${sender className="fw-bold"}: ${title}`} */}
            </button>
          </h3>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-start">
              <p>Очень хочу вернуть тебе долги</p>
              <p>25.11.2022</p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded">
          <h3 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed btn-outline-primary border border-1 border-primary rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Маша: В ресторан с Машей
            </button>
          </h3>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-start">
              <p>Маша очень голодна</p>
              <p>25.11.2022</p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded">
          <h3 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed tn-outline-primary border border-1 border-primary rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Сережа: Сережа звонил
            </button>
          </h3>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-start">
              <p>Сережа очень хочет поболтать</p>
              <p>25.11.2022</p>
            </div>
          </div>
        </div>
      </div>
      <NewMessagePopup />
    </>
  );
}

export default Main;
