import { ButtonUnstyled } from "@mui/base";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdChevronRight } from "react-icons/md";
import { FaSort, FaStethoscope } from "react-icons/fa";
import { Colors } from "../Colors";

export default function ProviderList() {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      id: "0001111",
      name: "John Smith",
      active: true,
      type: "CRNA",
    },
    {
      id: "0001112",
      name: "Dirk Bigalow",
      active: true,
      type: "MD/DO",
    },
    {
      id: "0001113",
      name: "Eddie Vedder",
      active: false,
      type: "CRNA",
    },
  ]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  const updateWidthAndHeight = () => {
    setWindowWidth(window.innerWidth);
  };

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
          Credentialed Providers
        </h1>
        <p style={{ color: "#667085" }}>
          These are providers that are credentialed at your facility and
          onboarded to Pagerr.
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
                  flexWrap: "wrap",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: 24 }}>{item.name}</p>
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

                      background: "#eaeaea",
                      paddingBlock: 4,
                      paddingInline: 8,
                      borderRadius: 4,
                    }}
                  >
                    <FaStethoscope size={14} style={{ marginRight: 4 }} />
                    <p style={{ fontSize: 16, fontWeight: 500 }}>{item.type}</p>
                  </div>
                </div>
              </div>
              <div
                style={{ height: 1, background: "#eaeaea", marginBlock: 12 }}
              />
              <ButtonUnstyled
                onClick={
                  item.active === false
                    ? () => alert("Change to inactive")
                    : () => alert("Change to active")
                }
                style={{
                  cursor: "pointer",
                  margin: 4,
                  borderRadius: 4,
                  paddingBlock: 6,
                  paddingInline: 8,
                  border:
                    item.active === true
                      ? `1px solid ${Colors.bluePrimary}`
                      : `1px solid ${Colors.border}`,
                  background: item.active === false ? "#ffffff" : Colors.border,
                  color: Colors.bluePrimary,
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  alignSelf: "flex-end",
                }}
              >
                {item.active === true ? <p>MAKE ACTIVE</p> : <p>DEACTIVATE</p>}
                <MdChevronRight size={20} style={{ marginLeft: 8 }} />
              </ButtonUnstyled>
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
              {/* <th
                style={{
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}
              /> */}
              <th
                style={{
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}
              >
                <ButtonUnstyled style={filterButtonStyle}>
                  <p>Name</p> <FaSort style={{ marginLeft: 4 }} />
                </ButtonUnstyled>
              </th>
              <th>
                <ButtonUnstyled style={filterButtonStyle}>
                  <p>Type</p> <FaSort style={{ marginLeft: 4 }} />
                </ButtonUnstyled>
              </th>
              <th
                style={{
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                <ButtonUnstyled style={filterButtonStyle}>
                  <p>Credential Status</p> <FaSort style={{ marginLeft: 4 }} />
                </ButtonUnstyled>
              </th>
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
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>
                    {item.active === true ? (
                      <div
                        style={{
                          padding: 4,
                          background: "lightgreen",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 20,
                          maxWidth: 100,
                        }}
                      >
                        ACTIVE
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: 4,
                          background: "yellow",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 20,
                          maxWidth: 100,
                        }}
                      >
                        PENDING
                      </div>
                    )}
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
