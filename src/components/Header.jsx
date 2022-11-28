import { Link } from "react-router-dom";

function Header(props) {
  const { linkAdress, buttonText, onLogoutUserProfile } = props;

  function handleClick() {
    if (onLogoutUserProfile) {
      onLogoutUserProfile();
    } else {
      return null;
    }
  }

  return (
    <header className="w-100 bg-opacity-50 shadow p-3 mb-5 bg-body position-relative">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <a href="/" className="link-primary">
            <i className="bi bi-chat-heart fs-1"></i>
          </a>
          <Link to={linkAdress}>
            <button
              type="button"
              className="btn btn-outline-primary fw-bold border border-3 border-primary"
              style={{ width: "120px" }}
              onClick={() => {
                handleClick();
              }}
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
