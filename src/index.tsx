import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProviderJobListings from "./components/ProviderJobListings";
import AddHospital from "./components/AddHospital";
import { getGlobalStateProvider } from "./contexts/GlobalStateContext";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import AuthorizationRequired from "./components/AuthorizationRequired";
import YourJobs from "./components/YourJobs";
import HospitalJobListings from "./components/HospitalJobListings";
import AddListing from "./components/AddListing";
import HospitalChrome from "./components/HospitalChrome";
import ProviderChrome from "./components/ProviderChrome";
import ProviderJobDetails from "./components/ProviderJobDetails";

const GlobalStateProvider = getGlobalStateProvider();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            {/* <Route element={<AuthorizationRequired />}> */}
            <Route path="provider" element={<ProviderChrome />}>
              <Route path="listings" element={<ProviderJobListings />} />
              <Route path="detail" element={<ProviderJobDetails />} />
              <Route path="jobs" element={<YourJobs />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<Outlet />}>
                <Route index element={<Profile />} />
                <Route path="addhospital" element={<AddHospital />} />
              </Route>
              <Route path="" element={<ProviderJobListings />} />
              <Route index element={<ProviderJobListings />} />
            </Route>
            <Route path="addhospital" element={<AddHospital />} />
            {/* </Route> */}
            <Route path="hospital" element={<HospitalChrome />}>
              <Route path="listings" element={<HospitalJobListings />} />
              <Route path="addlisting" element={<AddListing />} />
              <Route path="" element={<HospitalJobListings />} />
              <Route index element={<HospitalJobListings />} />
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
