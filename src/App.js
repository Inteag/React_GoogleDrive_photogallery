import "./App.css";
import "./css/bootstrap.min.css";
import About from "./About";
import Header from "./components/Header";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
