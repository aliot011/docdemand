import { ButtonUnstyled } from "@mui/base";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import { Account, Provider } from "../types";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { MdChevronRight, MdPending } from "react-icons/md";
import { Colors } from "../Colors";

export default function Facilities() {
  const navigate = useNavigate();

  const [user, setUser] = useState<Account>({
    _id: "1",
    createdAt: 0,
    email: "j.aliot011@gmail.com",
    providerId: "01",
  });

  const [provider, setProvider] = useState<Provider>({
    firstName: "John",
    lastName: "Smith",
    phones: [{ mobile: true, number: "4142346369" }],
    alertPreferences: { contactMethods: [], shiftTypes: [], facilityIds: [] },
    credentialedFacilities: [
      {
        _id: "01",
        active: true,
        address: {
          address1: "111 Happy Street",
          address2: "Apartment 12",
          city: "Winnetka",
          state: "IL",
          zip: "12345",
        },
        entranceProtocol: "Hello",
        name: "Gottlieb Memorial Hospital",
        phone: "414-234-6369",
      },
    ],
    accountId: "1",
    _id: "01",
    address: {
      address1: "111 Happy Street",
      address2: "Apartment 12",
      city: "Winnetka",
      state: "IL",
      zip: "12345",
    },
  });

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
            My Facilities
          </h1>
          <p style={{ color: "#667085", marginBottom: 20 }}>
            These are facilities where you are credentialed to work.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                gridTemplateColumns: windowWidth > 1000 ? "1fr 1fr" : "1fr",
                display: "inline-grid",
                rowGap: 20,
                columnGap: 20,
                flex: 1,
                width: "100%",
              }}
            >
              <li
                style={{
                  cursor: "pointer",
                  borderRadius: 4,
                  paddingBlock: 4,
                  paddingLeft: 12,
                  border: `1px solid ${Colors.bluePrimary}`,
                  background: Colors.border,
                  color: Colors.bluePrimary,
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 20,
                }}
                onClick={() => navigate("/provider/addhospital")}
              >
                Add Facility&nbsp;
                <FaPlusCircle size={20} style={{ marginRight: 12 }} />
              </li>

              {provider.credentialedFacilities.map(function (item) {
                return (
                  <li
                    style={{
                      flex: 1,
                      display: "flex",
                      flexWrap: "wrap",
                      border: "1px solid #eaeaea",
                      borderRadius: 4,
                      padding: 12,
                      alignItems: "stretch",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    key={item._id}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: "700", marginBottom: 0 }}>
                          {item.name}
                        </p>
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            marginTop: 0,
                          }}
                        >
                          {item.address.address1}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          marginBlock: 8,
                          color:
                            item.active === false
                              ? "orange"
                              : Colors.blueMediumPrimary,
                        }}
                      >
                        {item.active === false ? (
                          <MdPending
                            size={20}
                            style={{ marginRight: 4, flexShrink: 0 }}
                          />
                        ) : (
                          <FaCheckCircle
                            size={18}
                            style={{ marginRight: 4, flexShrink: 0 }}
                          />
                        )}
                        {item.active === false ? (
                          <p style={{ fontWeight: 600 }}>Credentials Pending</p>
                        ) : (
                          <p style={{ fontWeight: 600 }}>
                            Credentials Verified
                          </p>
                        )}
                      </div>
                    </div>

                    {item.active === false ? (
                      <div
                        style={{
                          padding: 8,
                          // borderRadius: 4,
                          borderTop: "1px solid #eaeaea",
                          marginTop: 8,
                        }}
                      >
                        <p style={{ fontSize: 12 }}>
                          Pagerr is working to confirm that you are credentialed
                          at {item.name}. You won't be able to schedule jobs at
                          this facility until we've confirmed your credential
                          status.
                        </p>
                      </div>
                    ) : (
                      <ButtonUnstyled
                        style={{
                          cursor: "pointer",
                          marginTop: 12,
                          borderRadius: 4,
                          paddingBlock: 4,
                          paddingLeft: 12,
                          border: `1px solid ${Colors.bluePrimary}`,
                          background: Colors.border,
                          color: Colors.bluePrimary,
                          fontWeight: 600,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                        onClick={() => navigate("/provider/listings")}
                      >
                        <p>See Jobs at {item.name}</p>
                        <MdChevronRight size={20} style={{ marginLeft: 8 }} />
                      </ButtonUnstyled>
                    )}
                  </li>
                );
              })}
            </ul>
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
  children?: any;
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
      {props.children}
    </div>
  );
}
