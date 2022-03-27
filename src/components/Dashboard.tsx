import { ButtonUnstyled } from "@mui/base";
import "../App.css";
import { MdChevronRight } from "react-icons/md";
import ReactSwitch from "react-switch";
import { Link } from "@mui/material";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWindowWidth(window.innerWidth);
  };

  const sampleData: {
    healthSystemId: string;
    name: string;
    active: boolean;
  }[] = [
    {
      healthSystemId: "asdkdfj4dx",
      name: "Wallaby Medical System",
      active: true,
    },
    {
      healthSystemId: "dfewef0980",
      name: "Parakeet Medical System",
      active: true,
    },
    {
      healthSystemId: "asdfsd90980",
      name: "Octopus Medical System",
      active: true,
    },
  ];

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
      <h1>Hello [name]</h1>
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
                      checked={true}
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
                      checked={true}
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
                      checked={true}
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
                      checked={true}
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
                    <p>[Full Name]</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Email</p>
                  </td>
                  <td>
                    <p>[Email]</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Phone</p>
                  </td>
                  <td>
                    <p>[Phone Number]</p>
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
              {sampleData.map(function (item) {
                return item.active === true ? (
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
                    key={item.healthSystemId}
                    onClick={() => alert("select hospital")}
                  >
                    <div>
                      <p style={{ fontWeight: "500" }}>{item.name}</p>
                    </div>
                    <MdChevronRight />
                  </li>
                ) : null;
              })}
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
