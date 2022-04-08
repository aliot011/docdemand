import { ButtonUnstyled } from "@mui/base";
import "../App.css";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import type { User } from "../types";
import { Link } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";

function getCancelTokenSource() {
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
  return source;
}

export default function JobListings() {
  const navigate = useNavigate();
  const globalState = useContext(GlobalStateContext);
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const [data, setData] = useState([
    {
      id: "0001111",
      hospital: "Gottlieb Memorial Hosptial",
      time: {
        start: new Date("7/6/2022"),
        end: new Date("7/7/2022"),
      },
      rate: 150,
    },
  ]);

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
      headers: {
        Authorization: `Bearer ${globalState.state.token}`,
      },
    })
      .then(function (response: any) {
        // alert(JSON.stringify(`Token: ${globalState.state.token}`));
        setUser(response.data);
        // alert(user);
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

          console.log(error.response?.data ?? "Unknown server error.");
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

  //if (!user)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  const updateWidthAndHeight = () => {
    setWindowWidth(window.innerWidth);
  };

  if (!user) return <p>loading... {globalState.state.token}</p>;
  //here
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
            Available Jobs
          </h1>
          <p style={{ color: "#667085" }}>
            These are jobs that fit your criteria.
          </p>
        </div>
        {/* <div
          style={{
            padding: 12,
            flexDirection: "row",
            display: "flex",
            marginBottom: 12,
            borderRadius: 12,
            background: "#FBFBFD",
          }}
        >
          <input
            type={"search"}
            style={{
              background: "#FFFFFF",
              border: "1px solid #D0D5DD",
              boxSizing: "border-box",
              borderRadius: 8,
              flex: 1,
              maxWidth: 480,
            }}
            placeholder={"Search by Customer Name or ID. . ."}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div> */}
        <table>
          <tr
            style={{
              padding: 12,
              flexDirection: "row",
              justifyContent: "flex-start",
              display: "flex",
              borderRadius: 12,
              background: "#FBFBFD",
              textAlign: "left",
            }}
          >
            <th style={{ display: "flex", width: "20%" }}>
              <ButtonUnstyled style={filterButtonStyle}>
                <p>Start Time</p>
              </ButtonUnstyled>
            </th>
            <th style={{ display: "flex", width: "20%" }}>
              <ButtonUnstyled style={filterButtonStyle}>
                <p>End Time</p>
              </ButtonUnstyled>
            </th>
            <th style={{ display: "flex", width: "20%" }}>
              <ButtonUnstyled style={filterButtonStyle}>
                <p>Hospital</p>
              </ButtonUnstyled>
            </th>
            <th style={{ display: "flex", width: "20%" }}>
              <ButtonUnstyled style={filterButtonStyle}>
                <p>Compensation ($)</p>
              </ButtonUnstyled>
            </th>
            <th style={{ display: "flex", width: "20%" }}></th>
          </tr>

          {data.map(function (item) {
            return (
              <tr
                style={{
                  paddingInline: 20,
                  paddingBlock: 40,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  display: "flex",
                  borderBottom: "1px solid #D0D5DD",
                  textAlign: "left",
                }}
              >
                <td style={{ display: "flex", width: "20%" }}>
                  {item.time.start.toLocaleDateString("en-US")},{" "}
                  {item.time.end.toLocaleTimeString("en-US")}
                </td>
                <td style={{ display: "flex", width: "20%" }}>
                  {item.time.start.toLocaleDateString("en-US")},{" "}
                  {item.time.end.toLocaleTimeString("en-US")}
                </td>
                <td style={{ display: "flex", width: "20%" }}>
                  {item.hospital}
                </td>
                <td style={{ display: "flex", width: "20%" }}>
                  ${item.rate}/hour
                </td>
                <td style={{ display: "flex", width: "20%" }}>
                  <Link
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("./detail")}
                  >
                    Claim Job <MdChevronRight />
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
        <div
          style={{ display: "flex", marginTop: 24, justifyContent: "flex-end" }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ButtonUnstyled
              style={{
                margin: 4,
                borderRadius: 8,
                paddingBlock: 8,
                fontSize: 14,
                color: "#8D98AF",
                fontWeight: "600",
                cursor: "pointer",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                background: "transparent",
                border: "1px solid #D0D5DD",
              }}
              onClick={
                page < 2 ? () => null : () => setPage((prev) => prev - 1)
              }
            >
              <MdChevronLeft />
            </ButtonUnstyled>
            <div
              style={{
                margin: 4,
                borderRadius: 8,
                fontSize: 14,
                color: "#8D98AF",
                fontWeight: "600",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flex: 1,
                background: "transparent",
                border: "1px solid #D0D5DD",
                width: 80,
              }}
            >
              <p style={{ margin: 0 }}>{page}</p>
            </div>
            <ButtonUnstyled
              style={{
                margin: 4,
                borderRadius: 8,
                paddingBlock: 8,
                fontSize: 14,
                color: "#8D98AF",
                fontWeight: "600",
                cursor: "pointer",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                background: "transparent",
                border: "1px solid #D0D5DD",
              }}
              onClick={() => {
                //setPage(page + 1);
                setPage((prev) => prev + 1);
                //alert(page);
              }}
            >
              <MdChevronRight />
            </ButtonUnstyled>
          </div>
        </div>
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
