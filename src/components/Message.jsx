function Message(props) {
  const { sender, theme, text, time, _id: key } = props.values;
  return (
    <div className="accordion-item rounded">
      <h3 className="accordion-header" id={`flush-heading-${key}`}>
        <button
          className="accordion-button collapsed btn-outline-primary border border-1 border-primary p-3 rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse-${key}`}
          aria-expanded="false"
          aria-controls={`flush-collapse-${key}`}
        >
          <span className="fw-bold">{sender}</span>: {theme}
        </button>
      </h3>
      <div
        id={`flush-collapse-${key}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading-${key}`}
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
