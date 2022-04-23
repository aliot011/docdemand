import { ButtonUnstyled } from "@mui/base";
import "../App.css";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import type { User } from "../types";
import { FaHospital, FaHospitalAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

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

  const [user, setUser] = useState<User>({
    id: 1,
    created_at: 0,
    name: "John Smith",
    email: "j.aliot011@gmail.com",
    phone: "4142346369",
    alert_preferences: { email: true, text: false },
    job_preferences: { call: true, shift: true },
    hospital_id: [
      {
        id: 1,
        _Name: "Gottlieb Memorial Hospital",
        Address: "701 W North Ave, Melrose Park, IL 60160",
        Phone: "414-234-6369",
      },
      {
        id: 2,
        _Name: "Gottlieb Memorial Hospital",
        Address: "701 W North Ave, Melrose Park, IL 60160",
        Phone: "414-234-6369",
      },
    ],
  });

  const [emailAlerts, setEmailAlerts] = useState<boolean>(false);
  const [textAlerts, setTextAlerts] = useState<boolean>(false);
  const [call, setCall] = useState<boolean>(false);
  const [shift, setShift] = useState<boolean>(false);

  // if (!user)
  //   axios(getUser)
  //     .then(function (response: any) {
  //       // alert(JSON.stringify(`Token: ${globalState.state.token}`));
  //       setUser(response.data);
  //       // alert(user);
  //     })
  //     .then(function (user: User) {
  //       setEmailAlerts(user!.alert_preferences.email);
  //       setTextAlerts(user!.alert_preferences.text);
  //       setCall(user!.job_preferences.call);
  //       setShift(user!.job_preferences.shift);
  //     })
  //     .catch(function (error: any) {
  //       console.log(error);
  //     });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWindowWidth(window.innerWidth);
  };

  if (!user) return <p>loading... </p>;
  else
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
            Profile
          </h1>
        </div>
        <div style={{ flex: 1 }}>
          <DashboardSection
            title={"Your Credentialed Hospitals"}
            buttonTitle="Add Hospital"
            button
            handleButton={() => navigate("./addhospital")}
            content={
              <div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {user.hospital_id.map(function (item) {
                    return (
                      <li
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          paddingBlock: 24,
                          paddingInline: 12,
                          justifyContent: "space-between",
                          borderTop: "0.5px solid lightgray",
                        }}
                        key={item.id}
                        // onClick={() => alert("select hospital")}
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
                        <ButtonUnstyled
                          style={{
                            // margin: 12,
                            borderRadius: 4,
                            paddingBlock: 4,
                            paddingInline: 12,
                            alignSelf: "flex-start",
                            fontSize: 14,
                            color: "#fff",
                            fontWeight: "600",
                            border: "0px",
                            background: "#eaeaea",
                            cursor: "pointer",
                          }}
                          onClick={() => alert("ok")}
                        >
                          REMOVE HOSPITAL
                        </ButtonUnstyled>
                        {/* <ReactSwitch
                          checked={user.alert_preferences.email}
                          offColor="#6e6e6e"
                          onColor="#1ee383"
                          uncheckedIcon={false}
                          checkedIcon={false}
                          width={50}
                          onChange={(checked) => {
                            alert("ok");
                          }}
                        /> */}
                      </li>
                    );
                  })}
                </ul>
              </div>
            }
          />
          <DashboardSection
            title="Your Information"
            content={
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
    <div
      style={{
        marginBottom: 28,
        border: "1px solid #eaeaea",
        borderRadius: 8,
        padding: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ marginBottom: 16 }}>{props.title}</h2>
        {props.button === undefined || false ? null : (
          <ButtonUnstyled
            style={{
              // margin: 12,
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
      <div style={{ height: 1, background: "#eaeaea" }} />
      <div>{props.content}</div>
    </div>
  );
}
