import { ButtonUnstyled } from "@mui/base";
import "../settings.css";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import type { User } from "../types";
import axios from "axios";
import { Modal } from "@mui/material";
import AddHospital from "./AddHospital";

function getCancelTokenSource() {
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
  return source;
}

export default function Settings() {
  const navigate = useNavigate();
  const globalState = useContext(GlobalStateContext);

  // var getUser = {
  //   method: "get",
  //   url: "https://xma7-7q1q-g4iv.n7.xano.io/api:xv_aHIEN/auth/me",
  //   headers: {
  //     Authorization: `Bearer ${globalState.state.token}`,
  //   },
  // };

  const [user, setUser] = useState<User>();

  const [emailAlerts, setEmailAlerts] = useState<boolean>(false);
  const [textAlerts, setTextAlerts] = useState<boolean>(false);
  const [call, setCall] = useState<boolean>(false);
  const [shift, setShift] = useState<boolean>(false);

  useEffect(() => {
    const cancelTokenSource = getCancelTokenSource();

    axios({
      method: "GET",
      url: "https://xma7-7q1q-g4iv.n7.xano.io/api:xv_aHIEN/auth/me",
      cancelToken: cancelTokenSource.token,
      headers: {
        Authorization: `Bearer ${globalState.state.token}`,
      },
    })
      .then(function (response: any) {
        setUser(response.data);
        setEmailAlerts(response.data!.alert_preferences.email);
        setTextAlerts(response.data!.alert_preferences.text);
        setCall(response.data!.job_preferences.call);
        setShift(response.data!.job_preferences.shift);
      })
      .catch(function (error: any) {
        if (axios.isCancel(error)) {
          //React no longer cares
        } else if (axios.isAxiosError(error)) {
          //The server most likely said something was wrong (i.e. we got
          //something other than a 200 OK response).
          if (error.response?.status === 401) {
            globalState.setState((prev) => {
              return {
                ...prev,
                token: "",
              };
            });
          } else {
            console.log(error.response?.data ?? "Unknown server error.");
          }
        } else {
          //This is some error that happened that doesn't directly have to do
          //with the request (such as you passed a bad parameter).

          console.log(error);
        }
      });

    return () => {
      cancelTokenSource.cancel();
    };
  }, [axios, globalState.state.token]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  const updateWidthAndHeight = () => {
    setWindowWidth(window.innerWidth);
  };

  // if (!user) return <p>Loading...</p>;
  // else
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 32,
            marginBottom: 12,
            fontWeight: "700",
          }}
        >
          Alert Settings
        </h1>
        <p style={{ color: "#667085", marginBottom: 20 }}>
          These are jobs that fit your criteria.
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <table
            style={{
              flex: 1,
              flexDirection: "column",
              borderCollapse: "collapse",
              borderRadius: 8,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    background: "#eaeaea",
                    padding: 8,
                  }}
                >
                  Contact Method
                </th>
                <th
                  style={{
                    textAlign: "right",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    background: "#eaeaea",
                    padding: 8,
                  }}
                >
                  Active?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Email alerts</p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <ReactSwitch
                    checked={emailAlerts}
                    offColor="#6e6e6e"
                    onColor="#1ee383"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    width={50}
                    onChange={(checked) => {
                      setEmailAlerts(checked);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Text alerts</p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <ReactSwitch
                    checked={textAlerts}
                    offColor="#6e6e6e"
                    onColor="#1ee383"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    width={50}
                    onChange={(checked) => {
                      setTextAlerts(checked);
                      // alert("ok");
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {windowWidth > 400 ? <div style={{ width: 12 }} /> : null}
          <table
            style={{
              flex: 1,
              flexDirection: "column",
              borderCollapse: "collapse",
              borderRadius: 8,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    background: "#eaeaea",
                    padding: 8,
                  }}
                >
                  Job Type
                </th>
                <th
                  style={{
                    textAlign: "right",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    background: "#eaeaea",
                    padding: 8,
                  }}
                >
                  Active?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Call</p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <ReactSwitch
                    checked={call}
                    offColor="#6e6e6e"
                    onColor="#1ee383"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    width={50}
                    onChange={(checked) => {
                      setCall(checked);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Shift</p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <ReactSwitch
                    checked={shift}
                    offColor="#6e6e6e"
                    onColor="#1ee383"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    width={50}
                    onChange={(checked) => {
                      setShift(checked);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function DashboardSection(props: {
  title: string;
  button?: boolean;
  buttonTitle?: string;
  handleButton?: any;
  content?: any;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 28,
        }}
      >
        <h2 style={{ marginBottom: 16 }}>{props.title}</h2>
        {props.button === undefined || false ? null : (
          <ButtonUnstyled
            style={{
              margin: 12,
              borderRadius: 4,
              padding: 12,
              alignSelf: "flex-start",
              fontSize: 14,
              color: "#fff",
              fontWeight: "600",
              border: "0px",
              background: "#00b0f0",
              cursor: "pointer",
            }}
            onClick={props.handleButton}
          >
            {props.buttonTitle}
          </ButtonUnstyled>
        )}
      </div>
      <div>{props.content}</div>
    </div>
  );
}
