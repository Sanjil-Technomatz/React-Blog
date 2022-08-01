import "./App.css";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateBlog from "./CreateBlog";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/blog" component={CreateBlog} />
      </Switch>
    </Router>
  );
}

export default App;
