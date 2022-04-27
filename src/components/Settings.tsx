import { ButtonUnstyled } from "@mui/base";
import "../styles/Settings.css";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import type { User } from "../types";
import axios from "axios";
import { Modal } from "@mui/material";
import AddHospital from "./AddHospital";
import { strictEqual } from "assert";

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

  const [data, setData] = useState([
    {
      id: 1,
      label: "Contact Methods",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      options: [
        {
          label: "Email",
          active: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        },
        {
          label: "Text",
          active: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        },
      ],
    },
    {
      id: 2,
      label: "Job Types",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      options: [
        {
          label: "Call",
          active: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        },
        {
          label: "Shift",
          active: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        },
      ],
    },
    {
      id: 3,
      label: "Location Types",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      options: [
        {
          label: "Hospital",
          active: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        },
        {
          label: "Surgery Center",
          active: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        },
      ],
    },
  ]);

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
        // setEmailAlerts(response.data!.alert_preferences.email);
        // setTextAlerts(response.data!.alert_preferences.text);
        // setCall(response.data!.job_preferences.call);
        // setShift(response.data!.job_preferences.shift);
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
          Let us know when you want to be alerted of a new job listing.
        </p>
      </div>
      <div
        style={{
          border: "1px solid #eaeaea",
          borderRadius: 16,
          paddingInline: 12,
          borderCollapse: "collapse",
        }}
      >
        <table>
          {data.map(function (item, index) {
            return (
              <tr>
                <td
                  style={{
                    alignItems: "flex-start",
                    width: "40%",
                    borderCollapse: "collapse",
                    borderBottom:
                      index + 1 === data.length
                        ? undefined
                        : "1px solid #eaeaea",
                  }}
                >
                  <div>
                    <p style={{ fontSize: 20, fontWeight: 600 }}>
                      {item.label}
                    </p>
                    <p style={{ color: "#667085", marginBottom: 32 }}>
                      {item.description}
                    </p>
                  </div>
                </td>
                <td
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    display: "flex",
                    borderBottom:
                      index + 1 === data.length
                        ? undefined
                        : "1px solid #eaeaea",
                  }}
                >
                  {item.options.map(function (i) {
                    return (
                      <label
                        style={{
                          fontSize: 16,
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 16,
                        }}
                      >
                        <input type="checkbox" style={{ marginRight: 8 }} />
                        <div>
                          <p>{i.label}</p>
                          <p
                            style={{
                              fontWeight: 400,
                              fontSize: 12,
                              color: "#667085",
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
