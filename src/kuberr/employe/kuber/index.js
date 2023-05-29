
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../src/Kuber/App";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";
import "./Index.css";
import Signform from "./author/Signform";



ReactDOM.render(
<>
<BrowserRouter>
{/* <App/> */}
{/* <Sidebar/> */}
<Signform/>
</BrowserRouter>
</>
, document.getElementById("root"));

