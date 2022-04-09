import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Signup from "./components/Signup";
import Login from "./components/Login";
import JobListings from "./components/JobListings";
import AddHospital from "./components/AddHospital";
import { getGlobalStateProvider } from "./contexts/GlobalStateContext";
import DashboardChrome from "./components/DashboardChrome";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import AuthorizationRequired from "./components/AuthorizationRequired";

const GlobalStateProvider = getGlobalStateProvider();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route element={<AuthorizationRequired />}>
              <Route path="provider" element={<DashboardChrome />}>
                <Route path="listings" element={<JobListings />} />
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile />}>
                  <Route path="addhospital" element={<AddHospital />} />
                </Route>
                <Route path="" element={<JobListings />} />
                <Route index element={<JobListings />} />
              </Route>
              <Route path="addhospital" element={<AddHospital />} />
            </Route>
            <Route path="" element={<Signup />} />
          </Route>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
