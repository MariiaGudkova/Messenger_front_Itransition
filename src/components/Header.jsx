function Header() {
  return (
    <header className="w-100 bg-opacity-50 shadow p-3 mb-5 bg-body position-relative">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <a href="/" className="link-primary">
            <i className="bi bi-chat-heart fs-1"></i>
          </a>
          <button
            type="button"
            className="btn btn-outline-primary fw-bold border border-3 border-primary"
            style={{ width: "120px" }}
          >
            Войти
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;