import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../utils/routes";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Main from "./Main";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div className="d-flex flex-column align-items-center">
      <Switch>
        <ProtectedRoute exact path={routes.baseRoute} loggedIn={loggedIn}>
          <Header linkAdress={routes.signIn} buttonText={"Выйти"} />
          <Main />
        </ProtectedRoute>
        <Route path={routes.signIn}>
          <Header linkAdress={routes.signIn} buttonText={"Войти"} />
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
