import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// 페이지
import Popup from "./components/Popup";
import Popup2 from "./components/Popup2";
import Main from "./pages/Main";
import Map from "./pages/Map";
import Starts from "./pages/Starts";

// 구현예정
// import RoadMap from "./pages/RoadMap";
// import Arrivegg from "./pages/Arrivegg";
// import Startgg from "./pages/Startgg";
// import Twogg from "./pages/Twogg";
// import Find from "./pages/Find";
// import Roading from "./pages/Roading";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/popup2" exact component={Popup2} />
          <Route path="/map" component={Map} />
          <Route path="/starts" component={Starts} />
          <Route path="/main" exact component={Main} />
          <Route path="/" exact component={Popup} />
          {/* <Route path="/roadmap" component={RoadMap} /> */}
          {/* <Route path="/arrivegg" component={Arrivegg} /> */}
          {/* <Route path="/startgg" exact component={Startgg} /> */}
          {/* <Route path="/twogg" component={Twogg} /> */}
          {/* <Route path="/find" component={Find} /> */}
          {/* <Route path="/roading" component={Roading} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
