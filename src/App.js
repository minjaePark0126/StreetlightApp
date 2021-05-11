import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// 페이지
import Main from "./pages/Main";
import Map from "./pages/Map";
import Starts from "./pages/Starts";
import RoadMap from "./pages/RoadMap";
import Arrivegg from "./pages/Arrivegg";
import Startgg from "./pages/Startgg";
import Twogg from "./pages/Twogg";
import Tworoad from "./pages/Tworoad";
import Find from "./pages/Find";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/map" component={Map} />
          <Route path="/starts" component={Starts} />
          <Route path="/roadmap" component={RoadMap} />
          <Route path="/arrivegg" component={Arrivegg} />
          <Route path="/startgg" exact component={Startgg} />
          <Route path="/twogg" component={Twogg} />
          <Route path="/tworoad" component={Tworoad} />
          <Route path="/find" component={Find} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
