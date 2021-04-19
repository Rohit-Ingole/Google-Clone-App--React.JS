import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            {/* search page (the result page) */}
            <SearchPage />
          </Route>
          <Route path="/">
            {/* Home page (search page)*/}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
