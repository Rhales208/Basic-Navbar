import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
//import { BrowserRouter as Router, Switch, Route, Home } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />

        <Route path="/about" component={About} />
      </Routes>
    </Router>
  );
}
<Navbar />;

export default App;
