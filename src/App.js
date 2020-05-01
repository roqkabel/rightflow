import React from "react";
import logo from "./assets/Group 1203.svg";
// import "./App.css";
import Overview from "./components/dashboard/Home/Overview";
import Navbar from "./layouts/Navbar";
import DashboardLayout from "./layouts/DashboardLayout";
import Footer from "./layouts/Footer";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="bg-light">
      {/* // NAVBAR */}
      <Navbar />
      {/* //DASHBOARD COMPONENTS */}

      <Overview />
      {/* //FOOTER  */}
      <Footer />
    </div>
  );
}

export default App;
