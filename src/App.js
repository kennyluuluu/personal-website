import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
