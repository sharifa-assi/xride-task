import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Route exact path="/"><Login /></Route>
      <Switch>
        <Route path="/register">{user ? <Write /> : <Register />}</Route>
        <Route path="/login">{user ? <Write /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
    
      </Switch>
    </Router>
  );
}

export default App;
