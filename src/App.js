import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./components/Nav/Nav";
import SideBar from "./components/Sidebar/Sidebar";
import InfoBoard from "./components/InfoBoard/InfoBoard";
const App = () => {
  return (
    <>
      <Router>
        <div className="app row">
          <div className="col-12">
            <Nav />
          </div>
          <div className="app-sidebar col-2">
            <SideBar />
          </div>
          <div className="app-info-board col-10">
            <InfoBoard />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
