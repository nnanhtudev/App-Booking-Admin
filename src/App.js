import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav/Nav";
import SideBar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./components/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
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
            <Route path="/login" component={Login}></Route>
          </div>
          <div className="app-info-board col-10">
            <AppRoutes />
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </>
  );
};

export default App;
