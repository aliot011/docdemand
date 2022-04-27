import { ButtonUnstyled } from "@mui/base";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import type { User } from "../types";
import { Modal } from "@mui/material";
import {
  MdChevronRight,
  MdClose,
  MdEvent,
  MdMonetizationOn,
  MdOutlineMonetizationOn,
  MdSchedule,
} from "react-icons/md";
import axios from "axios";
import { FaSort } from "react-icons/fa";

function getCancelTokenSource() {
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
  return source;
}

export default function YourJobs() {
  const navigate = useNavigate();
  const globalState = useContext(GlobalStateContext);
  const [modalVisible, setModalVisible] = useState(false);

  const [page, setPage] = useState<number>(1);

  const [data, setData] = useState([
    {
      id: "0001111",
      hospital: "Gottlieb Memorial Hospital",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      created: new Date(),
      type: "Shift",
      open: true,
      time: {
        start: new Date("7/6/2022"),
        end: new Date("7/7/2022"),
      },
      rate: 150,
      providerType: [{ id: 2, label: "CRNA" }],
      specialties: [
        { id: 1, label: "General Anesthesia" },
        { id: 10, label: "Pediatric (5-18 years old)" },
      ],
      certifications: [{ id: 2, label: "Board Eligible" }],
    },
    {
      id: "00022222",
      hospital: "Gottlieb Memorial Hospital",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      created: new Date(),
      type: "Call",
      open: false,
      time: {
        start: new Date("7/12/2022"),
        end: new Date("7/13/2022"),
      },
      rate: 150,
      providerType: [{ id: 1, label: "PhD" }],
      specialties: [
        { id: 3, label: "Cardiac" },
        { id: 4, label: "Pain Management" },
        { id: 5, label: "Regional" },
      ],
      certifications: [{ id: 1, label: "Board Certified" }],
    },
  ]);

  const [modalData, setModalData] = useState({
    id: "0001111",
    hospital: "Gottlieb Memorial Hospital",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    created: new Date(),
    type: "Shift",
    open: true,
    time: {
      start: new Date("7/6/2022"),
      end: new Date("7/7/2022"),
    },
    rate: 150,
    providerType: [{ id: 2, label: "CRNA" }],
    specialties: [
      { id: 1, label: "General Anesthesia" },
      { id: 10, label: "Pediatric (5-18 years old)" },
    ],
    certifications: [{ id: 2, label: "Board Eligible" }],
  });

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

          const errorText: string = `${error}`;
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
      <Modal
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          zIndex: 3,
          maxWidth: 480,
          alignSelf: "center",
        }}
        BackdropProps={{ color: "#fff" }}
        open={modalVisible}
        onBackdropClick={() => setModalVisible(!modalVisible)}
      >
        <div
          style={{
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            borderRadius: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <p style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>
              {modalData.type} at {modalData.hospital}
            </p>
            <MdClose
              size={24}
              onClick={() => setModalVisible(false)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div
            style={{
              borderRadius: 18,
              border: "1px solid #efeff4",
              padding: 20,
              flexDirection: "column",
              listStyle: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#00b0f0",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <MdMonetizationOn size={24} />
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                    }}
                  >
                    ${modalData.rate}/hr
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 4,
                      background: "#eaeaea",
                      paddingBlock: 4,
                      paddingInline: 8,
                      borderRadius: 4,
                    }}
                  >
                    <MdEvent size={18} style={{ marginRight: 4 }} />
                    <p style={{ fontSize: 16, fontWeight: 500 }}>
                      {new Date(modalData.time.start).toLocaleString("en-US", {
                        month: "long",
                        day: "numeric",
                        weekday: "short",
                      })}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 4,
                      background: "#eaeaea",
                      paddingBlock: 4,
                      paddingInline: 8,
                      borderRadius: 4,
                    }}
                  >
                    <MdSchedule size={18} style={{ marginRight: 4 }} />
                    <p style={{ fontSize: 16, fontWeight: 500 }}>
                      {new Date(modalData.time.start).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "numeric",
                          minute: "2-digit",
                        }
                      )}
                      {" to "}
                      {new Date(modalData.time.end).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "numeric",
                          minute: "2-digit",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{ height: 1, background: "#eaeaea", marginBlock: 12 }}
              />
              <p style={{ marginBottom: 12 }}>{modalData.description}</p>
              <div style={{ marginBottom: 12 }}>
                <p style={{ marginBottom: 4, fontWeight: 500, fontSize: 14 }}>
                  Provider Type
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {modalData.providerType.map(function (item) {
                    return (
                      <div
                        style={{
                          background: "#eaeaea",
                          paddingBlock: 4,
                          paddingInline: 12,
                          borderRadius: 40,
                          margin: 2,
                        }}
                      >
                        <p style={{ fontWeight: 500, maxLines: 1 }}>
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <p style={{ marginBottom: 4, fontWeight: 500, fontSize: 14 }}>
                  Specialty Requirements
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {modalData.specialties.map(function (item) {
                    return (
                      <div
                        style={{
                          background: "#eaeaea",
                          paddingBlock: 4,
                          paddingInline: 12,
                          borderRadius: 40,
                          margin: 2,
                        }}
                      >
                        <p style={{ fontWeight: 500, maxLines: 1 }}>
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <p style={{ marginBottom: 4, fontWeight: 500, fontSize: 14 }}>
                  Certification Requirements
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {modalData.certifications.map(function (item) {
                    return (
                      <div
                        style={{
                          background: "#eaeaea",
                          paddingBlock: 4,
                          paddingInline: 12,
                          borderRadius: 40,
                          margin: 2,
                        }}
                      >
                        <p style={{ fontWeight: 500, maxLines: 1 }}>
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "flex-end",
                }}
              >
                <ButtonUnstyled
                  style={{
                    cursor: "pointer",
                    marginTop: 4,
                    border: "0px",
                    borderRadius: 4,
                    paddingBlock: 4,
                    paddingLeft: 12,
                    background: "#9e9e9e",
                    color: "#fff",
                    fontWeight: 600,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>CANCEL JOB</p>
                  <MdChevronRight size={20} style={{ marginLeft: 8 }} />
                </ButtonUnstyled>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          marginBottom: 24,
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
          Your Jobs
        </h1>
        <p style={{ color: "#667085" }}>
          These are jobs that you have signed up for.
        </p>
      </div>
      {windowWidth < 800 ? (
        (data ?? []).map(function (item) {
          return (
            <div
              key={item.id}
              style={{
                padding: 8,
                marginBottom: 16,
                border: "1px solid #eaeaea",
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p style={{ fontWeight: 700, fontSize: 18 }}>
                    {item.type} @ {item.hospital}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#00b0f0",
                    }}
                  >
                    ${item.rate}/hr
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "space-between",
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 4,
                    background: "#eaeaea",
                    paddingBlock: 4,
                    paddingInline: 8,
                    borderRadius: 4,
                  }}
                >
                  <MdEvent size={18} style={{ marginRight: 4 }} />
                  <p style={{ fontSize: 16, fontWeight: 500 }}>
                    {new Date(item.time.start).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      weekday: "short",
                    })}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 4,
                    background: "#eaeaea",
                    paddingBlock: 4,
                    paddingInline: 8,
                    borderRadius: 4,
                  }}
                >
                  <MdSchedule size={18} style={{ marginRight: 4 }} />
                  <p style={{ fontSize: 16, fontWeight: 500 }}>
                    {new Date(item.time.start).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                    {" to "}
                    {new Date(item.time.end).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
              <div
                style={{ height: 1, background: "#eaeaea", marginBlock: 12 }}
              />
              <p style={{ marginBottom: 12 }}>{item.description}</p>
              <div style={{ marginBottom: 12 }}>
                <p style={{ marginBottom: 4, fontWeight: 500, fontSize: 14 }}>
                  Provider Type
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {item.providerType.map(function (item) {
                    return (
                      <div
                        style={{
                          background: "#eaeaea",
                          paddingBlock: 4,
                          paddingInline: 12,
                          borderRadius: 40,
                          margin: 2,
                        }}
                      >
                        <p style={{ fontWeight: 500, maxLines: 1 }}>
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <p style={{ marginBottom: 4, fontWeight: 500, fontSize: 14 }}>
                  Specialty Requirements
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {item.specialties.map(function (item) {
                    return (
                      <div
                        style={{
                          background: "#eaeaea",
                          paddingBlock: 4,
                          paddingInline: 12,
                          borderRadius: 40,
                          margin: 2,
                        }}
                      >
                        <p style={{ fontWeight: 500, maxLines: 1 }}>
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <p style={{ marginBottom: 4, fontWeight: 500, fontSize: 14 }}>
                  Certification Requirements
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {item.certifications.map(function (item) {
                    return (
                      <div
                        style={{
                          background: "#eaeaea",
                          paddingBlock: 4,
                          paddingInline: 12,
                          borderRadius: 40,
                          margin: 2,
                        }}
                      >
                        <p style={{ fontWeight: 500, maxLines: 1 }}>
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <table style={{ borderCollapse: "collapse" }}>
          <thead style={{ marginBottom: 8 }}>
            <tr
              style={{
                display: "table-row",
                textAlign: "left",
              }}
            >
              <th
                style={{
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}
              >
                <ButtonUnstyled style={filterButtonStyle}>
                  <p>Location</p> <FaSort style={{ marginLeft: 4 }} />
                </ButtonUnstyled>
              </th>

              <th>
                <ButtonUnstyled style={filterButtonStyle}>
                  <p>Date / Time</p> <FaSort style={{ marginLeft: 4 }} />
                </ButtonUnstyled>
              </th>

              <th>
                <ButtonUnstyled style={filterButtonStyle}>
                  <p>Compensation</p> <FaSort style={{ marginLeft: 4 }} />
                </ButtonUnstyled>
              </th>
              <th>
                <ButtonUnstyled style={filterButtonStyle}>
                  <p>Job Type</p> <FaSort style={{ marginLeft: 4 }} />
                </ButtonUnstyled>
              </th>
              <th
                style={{
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              />
            </tr>
          </thead>
          <tbody>
            {(data ?? []).map(function (item) {
              return (
                <tr
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #D0D5DD",
                    textAlign: "left",
                  }}
                >
                  <td>{item.hospital}</td>
                  <td>
                    {new Date(item.time.start).toLocaleString([], {
                      month: "numeric",
                      day: "numeric",
                      weekday: "short",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                    {" to "}
                    {new Date(item.time.end).toLocaleString([], {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </td>

                  <td>${item.rate}/hour</td>
                  <td>
                    <p style={{ fontSize: 14 }}>{item.type}</p>
                  </td>
                  {/* <td>
                    <p style={{ fontSize: 14 }}>TBD</p>
                  </td> */}
                  <td>
                    <ButtonUnstyled
                      style={{
                        cursor: "pointer",
                        border: "0px",
                        borderRadius: 30,
                        paddingBlock: 4,
                        paddingLeft: 12,
                        background: "#00b0f0",
                        color: "#fff",
                        fontWeight: 600,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setModalData(item);
                        setModalVisible(true);
                      }}
                    >
                      <p>DETAILS</p>
                      <MdChevronRight size={20} style={{ marginLeft: 8 }} />
                    </ButtonUnstyled>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

const filterButtonStyle = {
  margin: 0,
  borderRadius: 0,
  paddingBlock: 8,
  paddingInline: 0,
  fontSize: 14,
  color: "#8D98AF",
  fontWeight: "600",
  cursor: "pointer",
  flexDirection: "row",
  display: "flex",
  alignItems: "center",
  border: "0px",
  textAlign: "left",
  flex: 1,
  background: "transparent",
};

//here
