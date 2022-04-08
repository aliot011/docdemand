import { ButtonUnstyled } from "@mui/base";
import "../App.css";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import type { User } from "../types";

export default function Profile() {
  const navigate = useNavigate();
  const globalState = useContext(GlobalStateContext);

  var axios = require("axios");

  var getUser = {
    method: "get",
    url: "https://xma7-7q1q-g4iv.n7.xano.io/api:xv_aHIEN/auth/me",
    headers: {
      Authorization: `Bearer ${globalState.state.token}`,
    },
  };

  const [user, setUser] = useState<User>();

  const [emailAlerts, setEmailAlerts] = useState<boolean>(false);
  const [textAlerts, setTextAlerts] = useState<boolean>(false);
  const [call, setCall] = useState<boolean>(false);
  const [shift, setShift] = useState<boolean>(false);

  if (!user)
    axios(getUser)
      .then(function (response: any) {
        // alert(JSON.stringify(`Token: ${globalState.state.token}`));
        setUser(response.data);
        // alert(user);
      })
      .then(function (user: User) {
        setEmailAlerts(user!.alert_preferences.email);
        setTextAlerts(user!.alert_preferences.text);
        setCall(user!.job_preferences.call);
        setShift(user!.job_preferences.shift);
      })
      .catch(function (error: any) {
        console.log(error);
      });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWindowWidth(window.innerWidth);
  };

  if (!user) return <p>loading... {globalState.state.token}</p>;
  else
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <h1>Hello {user.name}</h1>
        <div style={{ flex: 1 }}>
          <DashboardSection
            title={"Your Hospitals"}
            buttonTitle="Add Hospital"
            button
            handleButton={() => navigate("./addhospital")}
            content={
              <div
                style={{
                  border: "1px solid",
                  borderRadius: 8,
                  padding: 12,
                }}
              >
                {user.hospital_id.map(function (item) {
                  return (
                    <li
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        padding: 4,
                        marginInline: 4,
                        justifyContent: "space-between",
                      }}
                      key={item.id}
                      onClick={() => alert("select hospital")}
                    >
                      <div>
                        <p style={{ fontWeight: "700", marginBottom: 0 }}>
                          {item._Name}
                        </p>
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            marginTop: 0,
                          }}
                        >
                          {item.Address}
                        </p>
                      </div>
                      <ReactSwitch
                        checked={user.alert_preferences.email}
                        offColor="#6e6e6e"
                        onColor="#1ee383"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={50}
                        onChange={(checked) => {
                          alert("ok");
                        }}
                      />
                    </li>
                  );
                })}
              </div>
            }
          />
          <DashboardSection
            title="Your Information"
            content={
              <div
                style={{
                  border: "1px solid",
                  borderRadius: 8,
                  padding: 12,
                }}
              >
                <table>
                  <tr>
                    <td>
                      <p>Name</p>
                    </td>
                    <td>
                      <p>{user.name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Email</p>
                    </td>
                    <td>
                      <p>{user.email}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Phone</p>
                    </td>
                    <td>
                      <p>{user.phone}</p>
                    </td>
                  </tr>
                </table>
              </div>
            }
          />
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
