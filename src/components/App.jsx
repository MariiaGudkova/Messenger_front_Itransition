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
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [messages, setMessages] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    if (loggedIn) {
      getApiUserInfo();
      getAllUsers();
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
      const userInfo = await api.getUserInfo();
      setCurrentUser(userInfo.name);
      setMessages(userInfo.messages);
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
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Switch>
        <ProtectedRoute exact path={routes.baseRoute} loggedIn={loggedIn}>
          <Header
            linkAdress={routes.signIn}
            buttonText={"Выйти"}
            onLogoutUserProfile={logoutUserProfile}
          />
          <Main
            messages={messages}
            allUsers={allUsers}
            onSendMessage={sendMessage}
            currentUser={currentUser}
          />
        </ProtectedRoute>
        <Route path={routes.signIn}>
          <Header linkAdress={routes.signIn} buttonText={"Войти"} />
          <LoginForm onLogin={hanldeLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
