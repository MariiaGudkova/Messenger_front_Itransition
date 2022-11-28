function Message(props) {
  const { sender, theme, text, time } = props.values;
  return (
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
          {sender}: {theme}
        </button>
      </h3>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body text-start">
          <p>{text}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
