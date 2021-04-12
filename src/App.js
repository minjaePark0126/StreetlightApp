import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
// 페이지
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Map from "./pages/Map";
import Last from "./pages/Last";
import Starts from "./pages/Starts";
import RoadMap from "./pages/RoadMap";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/map" component={Map} />
          <Route path="/last" component={Last} />
          <Route path="/starts" component={Starts} />
          <Route path="/roadmap" component={RoadMap} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
