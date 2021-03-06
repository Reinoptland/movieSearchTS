import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MoviesDetailPage from "./pages/MoviesDetailPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/movies/:imdbID" component={MoviesDetailPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/" component={() => <div>404!</div>} />
      </Switch>
    </div>
  );
}

export default App;
