import { ButtonUnstyled } from "@mui/base";
import "../App.css";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export type User = {
  id: number;
  created_at: number;
  name: string;
  email: string;
  phone: string;
  alert_preferences: alert_preferences;
  job_preferences: job_preferences;
  hospital_id: hospital_id[];
};

export type hospital_id = {
  id: string;
  created_at: string;
  name: string;
  city: string;
};

export type alert_preferences = { email: boolean; text: boolean };
export type job_preferences = { call: boolean; shift: boolean };

export default function Dashboard() {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWindowWidth(window.innerWidth);
  };

  const [user, setUser] = useState<User>({
    id: 1,
    created_at: 1,
    name: "Joe Alioto",
    email: "j.aliot011@gmail.com",
    phone: "414-234-6369",
    alert_preferences: { email: true, text: false },
    job_preferences: { call: false, shift: true },
    hospital_id: [
      {
        id: "1",
        created_at: "9999999",
        name: "Medical College of Wisconsin",
        city: "Wauwatosa",
      },
      {
        id: "2",
        created_at: "9999999",
        name: "Gottlieb Memorial Hospital",
        city: "Melrose Park, IL",
      },
    ],
  });

  // const sampleData: {
  //   healthSystemId: string;
  //   name: string;
  //   active: boolean;
  // }[] = [
  //   {
  //     healthSystemId: "asdkdfj4dx",
  //     name: "Wallaby Medical System",
  //     active: true,
  //   },
  //   {
  //     healthSystemId: "dfewef0980",
  //     name: "Parakeet Medical System",
  //     active: true,
  //   },
  //   {
  //     healthSystemId: "asdfsd90980",
  //     name: "Octopus Medical System",
  //     active: true,
  //   },
  // ];

  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        padding: 20,
        paddingBottom: 300,
      }}
    >
      <h1>Hello {user.name}</h1>
      <div style={{ flex: 1 }}>
        <DashboardSection
          title="Alert Preferences"
          content={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <table
                style={{
                  flex: 1,
                  flexDirection: "column",
                  border: "1px solid",
                  borderRadius: 8,
                  padding: 12,
                  marginBottom: 12,
                }}
              >
                <th>Contact Method</th>
                <tr>
                  <td>
                    <p>Email alerts</p>
                  </td>
                  <td style={{ textAlign: "right" }}>
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
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Text alerts</p>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <ReactSwitch
                      checked={user.alert_preferences.text}
                      offColor="#6e6e6e"
                      onColor="#1ee383"
                      uncheckedIcon={false}
                      checkedIcon={false}
                      width={50}
                      onChange={(checked) => {
                        alert("ok");
                      }}
                    />
                  </td>
                </tr>
              </table>
              {windowWidth > 400 ? <div style={{ width: 12 }} /> : null}
              <table
                style={{
                  flex: 1,
                  flexDirection: "column",
                  border: "1px solid",
                  borderRadius: 8,
                  padding: 12,
                  marginBottom: 12,
                }}
              >
                <th>Job Type</th>
                <tr>
                  <td>
                    <p>Call</p>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <ReactSwitch
                      checked={user.job_preferences.call}
                      offColor="#6e6e6e"
                      onColor="#1ee383"
                      uncheckedIcon={false}
                      checkedIcon={false}
                      width={50}
                      onChange={(checked) => {
                        alert("ok");
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
                      checked={user.job_preferences.shift}
                      offColor="#6e6e6e"
                      onColor="#1ee383"
                      uncheckedIcon={false}
                      checkedIcon={false}
                      width={50}
                      onChange={(checked) => {
                        alert("ok");
                      }}
                    />
                  </td>
                </tr>
              </table>
            </div>
          }
        />
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
                        {item.name}
                      </p>
                      <p
                        style={{ fontSize: 12, fontWeight: 500, marginTop: 0 }}
                      >
                        {item.city}
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
                    />{" "}
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
          marginTop: 24,
        }}
      >
        <h2 style={{}}>{props.title}</h2>
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
