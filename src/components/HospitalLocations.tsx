import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Account, Facility } from "../types";
import {
  FaCheckCircle,
  FaChevronRight,
  FaEdit,
  FaExclamationCircle,
  FaPhone,
  FaPlusCircle,
} from "react-icons/fa";
import { MdClose, MdDescription, MdGroup, MdLocationPin } from "react-icons/md";
import { Colors } from "../Colors";
import { Drawer, Link } from "@mui/material";
import { ButtonUnstyled } from "@mui/base";

export default function HospitalLocations() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const [user, setUser] = useState<Account>({
    _id: "1",
    createdAt: 0,
    email: "j.aliot011@gmail.com",
    providerId: "01",
  });

  const [facilities, setFacilities] = useState<Facility[]>([
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
    {
      _id: "02",
      active: true,
      address: {
        address1: "111 Happy Street",
        address2: "Apartment 12",
        city: "Winnetka",
        state: "IL",
        zip: "12345",
      },
      entranceProtocol:
        "Enter at the southwest door, ask for Ralph at the front desk.",
      name: "Thorac Hospital",
      phone: "414-234-6369",
    },
  ]);

  const [drawerData, setDrawerData] = useState<Facility>();

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
        <Drawer
          open={drawerOpen}
          anchor="right"
          onBackdropClick={() => setDrawerOpen(!drawerOpen)}
          style={{ maxWidth: windowWidth }}
          disableScrollLock
        >
          <div
            style={{
              padding: 12,
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <MdClose
                size={22}
                style={{
                  color: Colors.bluePrimary,
                  cursor: "pointer",
                }}
                onClick={() => setDrawerOpen(false)}
              />
            </div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: Colors.bluePrimary,
              }}
            >
              Providers at
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: Colors.bluePrimary,
                marginBottom: 12,
              }}
            >
              {drawerData?.name}
            </p>

            <ButtonUnstyled
              style={{
                cursor: "pointer",
                marginBottom: 4,
                borderRadius: 4,
                paddingBlock: 6,
                paddingInline: 8,
                background: Colors.blueBrightPrimary,
                color: "gray",
                fontWeight: 600,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                border: "0px",
              }}
            >
              John Smith, PhD
            </ButtonUnstyled>
            <ButtonUnstyled
              style={{
                cursor: "pointer",
                marginBottom: 4,
                borderRadius: 4,
                paddingBlock: 6,
                paddingInline: 8,
                background: Colors.blueBrightPrimary,
                color: "gray",
                fontWeight: 600,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                border: `1px solid orange`,
              }}
            >
              Dolf Lundgren, CRNA
              <FaExclamationCircle
                style={{ marginLeft: 12, color: "orange" }}
              />
            </ButtonUnstyled>
            <ButtonUnstyled
              style={{
                cursor: "pointer",
                borderRadius: 4,
                paddingBlock: 6,
                paddingInline: 8,
                background: Colors.border,
                color: Colors.bluePrimary,
                fontWeight: 600,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                border: `1px solid ${Colors.bluePrimary}`,
                marginTop: 20,
              }}
              onClick={() =>
                alert(
                  "send note to Pagerr team that this person wants more providers"
                )
              }
            >
              Add Providers <FaPlusCircle style={{ marginLeft: 12 }} />
            </ButtonUnstyled>
          </div>
        </Drawer>

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
            These are facilities that you manage.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                gridTemplateColumns: windowWidth > 1000 ? "1fr" : "1fr",
                display: "inline-grid",
                maxWidth: 640,
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

              {facilities.map(function (item) {
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
                      <p style={{ fontWeight: "700", marginBottom: 0 }}>
                        {item.name}
                      </p>
                      <FaEdit
                        style={{ cursor: "pointer", color: Colors.bluePrimary }}
                        onClick={() => alert("Edit")}
                      />
                    </div>

                    <div
                      style={{
                        height: 1,
                        marginBlock: 8,
                        background: "#eaeaea",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginBlock: 4,
                      }}
                    >
                      <MdLocationPin
                        style={{
                          height: 12,
                          width: 12,
                          padding: 4,
                          background: Colors.blueMediumPrimary,
                          color: Colors.blueBrightPrimary,
                          borderRadius: 2,
                          marginRight: 4,
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          marginTop: 2,
                        }}
                      >
                        {item.address.address1}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginBlock: 4,
                      }}
                    >
                      <FaPhone
                        style={{
                          height: 12,
                          width: 12,
                          padding: 4,
                          background: Colors.blueMediumPrimary,
                          color: Colors.blueBrightPrimary,
                          borderRadius: 2,
                          marginRight: 4,
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          marginTop: 2,
                        }}
                      >
                        {item.phone}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginBlock: 4,
                      }}
                    >
                      <MdDescription
                        style={{
                          height: 12,
                          width: 12,
                          padding: 4,
                          background: Colors.blueMediumPrimary,
                          color: Colors.blueBrightPrimary,
                          borderRadius: 2,
                          marginRight: 4,
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          marginTop: 2,
                        }}
                      >
                        {item.entranceProtocol}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginBlock: 4,
                      }}
                    >
                      <MdGroup
                        style={{
                          height: 12,
                          width: 12,
                          padding: 4,
                          background: Colors.blueMediumPrimary,
                          color: Colors.blueBrightPrimary,
                          borderRadius: 2,
                          marginRight: 4,
                          flexShrink: 0,
                        }}
                      />
                      <Link
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          marginTop: 2,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setDrawerOpen(true);
                          setDrawerData(item);
                        }}
                      >
                        12 Pagerr providers <FaChevronRight size={8} />
                        <FaExclamationCircle style={{ color: "orange" }} />
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
}
