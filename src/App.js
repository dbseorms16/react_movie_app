import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/about";
import NavigationBar from "./NavigationBar";
import Detail from "./routes/MovieDetail";
function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
