import { Grid, Link } from "@mui/material";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function AddListing() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    id: "0001111",
    hospital: "Gottlieb Memorial Hospital",
    description: "",
    created: new Date(),
    type: "Shift",
    open: true,
    time: {
      start: new Date("7/6/2022"),
      end: new Date("7/7/2022"),
    },
    rate: 150,
    providerType: [
      { id: 1, label: "PhD" },
      { id: 2, label: "CRNA" },
    ],
    specialties: [
      { id: 1, label: "General Anesthesia" },
      { id: 2, label: "Obstetric" },
      { id: 3, label: "Cardiac" },
      { id: 4, label: "Pain Management" },
      { id: 5, label: "Regional" },
      { id: 6, label: "Critical Care" },
      { id: 7, label: "Pediatric (<1 years old)" },
      { id: 8, label: "Pediatric (<2 years old)" },
      { id: 9, label: "Pediatric (<5 years old)" },
      { id: 10, label: "Pediatric (5-18 years old)" },
    ],
    certifications: [
      { id: 1, label: "Board Certified" },
      { id: 2, label: "Board Eligible" },
      { id: 3, label: "None" },
    ],
  });

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
          Your Job Listings
        </h1>
        <p style={{ color: "#667085" }}>
          These are jobs that you have listed at your locations.
        </p>
      </div>
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
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "flex-start",
              flexDirection: "row",
              marginTop: 24,
            }}
          >
            <MdArrowBack
              size={26}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("..")}
            />
            <div style={{ marginLeft: 12 }}>
              <p style={{ fontSize: 26, fontWeight: 700 }}>Job Detail </p>
            </div>
          </div>
        </div>
        <div style={{ height: 1, background: "#eaeaea", margin: 16 }} />
        <form
          style={{
            margin: 12,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
          }}
        >
          <p style={{ marginBottom: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <DetailContainer label="Location">
            <p>{data.hospital}</p>
          </DetailContainer>
          <DetailContainer label="Date / Time">
            <p>
              {new Date(data.time.start).toLocaleDateString("en-us")},{" "}
              {new Date(data.time.start).toLocaleTimeString("en-us")} to{" "}
              {new Date(data.time.end).toLocaleTimeString("en-us")}
            </p>
          </DetailContainer>
          <DetailContainer label="Hourly Rate">
            <p>${data.rate}</p>
          </DetailContainer>
          <DetailContainer label="Provider Type(s)">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.providerType.map(function (item) {
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
                    <p style={{ fontWeight: 500, maxLines: 1 }}>{item.label}</p>
                  </div>
                );
              })}
            </div>
          </DetailContainer>
          <DetailContainer label="Specialty Requirements">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.specialties.map(function (item) {
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
                    <p style={{ fontWeight: 500, maxLines: 1 }}>{item.label}</p>
                  </div>
                );
              })}
            </div>
          </DetailContainer>
          <DetailContainer label="Certification Requirements">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.certifications.map(function (item) {
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
                    <p style={{ fontWeight: 500, maxLines: 1 }}>{item.label}</p>
                  </div>
                );
              })}
            </div>
          </DetailContainer>
          <div
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              style={{
                cursor: "pointer",
                marginTop: 12,
                border: "0px",
                borderRadius: 4,
                padding: 12,
                background: "#00b0f0",
                color: "#fff",
                fontWeight: 600,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              type={"submit"}
              value="Claim Job"
              onClick={() => navigate("..")}
            />
            <Link
              underline="none"
              style={{ fontWeight: 600, cursor: "pointer" }}
              onClick={() => navigate("..")}
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

function DetailContainer(props: { children: any; label: string }) {
  return (
    <div
      style={{
        marginBottom: 20,
        justifyContent: "flex-start",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <b style={{ marginBottom: 8 }}>{props.label}</b>
      {props.children}
    </div>
  );
}
