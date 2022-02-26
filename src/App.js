import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Calculator from "./Calculator";
import Tic from "./Tic";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path=""><Home/></Route>
          <Route exact path=""></Route>
          <Route exact path=""></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
