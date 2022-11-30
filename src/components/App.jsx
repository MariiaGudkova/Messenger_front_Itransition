import React from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { routes } from "../utils/routes";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Main from "./Main";
import ProtectedRoute from "./ProtectedRoute";
import api from "../utils/api.js";
import { authorize } from "../utils/auth.js";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [allUsers, setAllUsers] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const oldMessages = React.useRef(messages);
  const [show, setShow] = React.useState(false);
  const toggleShow = () => setShow(!show);
  const history = useHistory();
  const intervalId = React.useRef(null);

  React.useEffect(() => {
    if (loggedIn) {
      getApiUserInfo();
      getAllUsers();
      intervalId.current = setInterval(
        () =>
          api.getUserInfo().then(({ messages: newMessages }) => {
            const oldMessagesLength = oldMessages.current.length;
            setMessages(newMessages);
            if (newMessages.length > oldMessagesLength) {
              setShow(true);
            } else {
              setShow(false);
            }
            oldMessages.current = newMessages;
          }),
        5000
      );
    } else {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }, [loggedIn]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  async function hanldeLogin(name) {
    try {
      const response = await authorize(name);
      if (response.token) {
        localStorage.setItem("jwt", response.token);
        setLoggedIn(true);
        api.updateToken(response.token);
        history.push(routes.baseRoute);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function getApiUserInfo() {
    try {
      const { name, messages } = await api.getUserInfo();
      setCurrentUser(name);
      setMessages(messages);
      oldMessages.current = messages;
    } catch (e) {
      console.error(e);
    }
  }

  async function getAllUsers() {
    try {
      const users = await api.getAllUsers();
      setAllUsers(users);
    } catch (e) {
      console.error(e);
    }
  }

  async function sendMessage(currentUser, name, theme, text, time) {
    try {
      const message = await api.sendMessage(
        currentUser,
        name,
        theme,
        text,
        time
      );
    } catch (e) {
      console.error(e);
    }
  }

  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getApiUserInfo()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push(routes.baseRoute);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  function logoutUserProfile() {
    localStorage.removeItem("jwt");
    history.push(routes.signIn);
    setLoggedIn(false);
    clearInterval(intervalId.current);
    intervalId.current = null;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Switch>
        <ProtectedRoute exact path={routes.baseRoute} loggedIn={loggedIn}>
          <Header
            linkAdress={routes.signIn}
            buttonText={"Выйти"}
            onLogoutUserProfile={logoutUserProfile}
            isShown={loggedIn}
          />
          <Main
            messages={messages}
            allUsers={allUsers}
            show={show}
            onToggleShow={toggleShow}
            onSendMessage={sendMessage}
            currentUser={currentUser}
          />
        </ProtectedRoute>
        <Route path={routes.signIn}>
          <Header />
          <LoginForm onLogin={hanldeLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
