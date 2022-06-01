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
import Profile from "./components/Facilities";
import AuthorizationRequired from "./components/AuthorizationRequired";
import YourJobs from "./components/ProviderJobs";
import HospitalJobListings from "./components/HospitalJobListings";
import AddListing from "./components/AddListing";
import HospitalChrome from "./components/HospitalChrome";
import ProviderChrome from "./components/ProviderChrome";
import ProviderJobDetails from "./components/ProviderJobDetails";
import HospitalPastJobs from "./components/HospitalPastJobs";
import ScrollToTop from "./helpers/ScrollToTop";
import ProviderSignup1 from "./components/ProviderSignup1";
import SignupChrome from "./components/SignupChrome";
import ProviderSignup2 from "./components/ProviderSignup2";
import ProviderSignup3 from "./components/ProviderSignup3";
import ProviderList from "./components/ProviderList";
import HospitalLocations from "./components/HospitalLocations";

const GlobalStateProvider = getGlobalStateProvider();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<App />}>
              {/* <Route path="signup" element={<Signup />} /> */}
              <Route path="login" element={<Login />} />
              <Route path="providersignup" element={<SignupChrome />}>
                <Route index element={<ProviderSignup1 />} />
                <Route path="2" element={<ProviderSignup2 />} />
                <Route path="3" element={<ProviderSignup3 />} />
              </Route>
              <Route path="provider" element={<ProviderChrome />}>
                <Route path="listings" element={<ProviderJobListings />} />
                <Route path="detail" element={<ProviderJobDetails />} />
                <Route path="jobs" element={<YourJobs />} />
                <Route path="settings" element={<Settings />} />
                <Route path="facilities" element={<Profile />} />
                <Route path="addhospital" element={<AddHospital />} />
                <Route index element={<ProviderJobListings />} />
              </Route>
              <Route path="facility" element={<HospitalChrome />}>
                <Route path="listings" element={<Outlet />}>
                  <Route index element={<HospitalJobListings />} />
                  <Route path="addlisting" element={<AddListing />} />
                </Route>
                {/* <Route path="credentials" element={<ProviderList />} /> */}
                <Route path="addlisting" element={<AddListing />} />
                <Route path="jobs" element={<HospitalPastJobs />} />
                <Route path="locations" element={<HospitalLocations />} />
                <Route index element={<HospitalJobListings />} />
              </Route>
              <Route index element={<Login />} />
            </Route>
            <Route path="*" element={<App />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
