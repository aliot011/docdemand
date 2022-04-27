import { Grid, Link } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function AddListing() {
  const navigate = useNavigate();

  const Specialties = [
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
  ];

  const Providers = [
    { id: 1, label: "PhD" },
    { id: 2, label: "CRNA" },
  ];

  const Certifications = [
    { id: 1, label: "Board Certified" },
    { id: 2, label: "Board Eligible" },
    { id: 3, label: "None" },
  ];

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
              <p style={{ fontSize: 26, fontWeight: 700 }}>Add Job Listing </p>
              <p
                style={{
                  color: "#667085",
                }}
              >
                Add enough detail so providers can quickly decide whether or not
                they want to pick up a job.
              </p>
            </div>
          </div>
        </div>
        <div style={{ height: 1, background: "#eaeaea", margin: 16 }} />
        <form style={{ margin: 12, display: "flex", flexDirection: "column" }}>
          <DetailContainer label="Job Details">
            <label>
              Location
              <input type={"text"} />
            </label>
            <label>
              Start Time
              <input type={"datetime-local"} />
            </label>
            <label>
              End Time
              <input type={"datetime-local"} />
            </label>
            <label>
              Hourly Rate
              <input type={"text"} />
            </label>
          </DetailContainer>
          <DetailContainer label="Provider Type">
            {Providers.map(function (item) {
              return (
                <label
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                >
                  <input type={"checkbox"} />
                  {item.label}
                </label>
              );
            })}
          </DetailContainer>
          <DetailContainer label="Specialty Requirements">
            {Specialties.map(function (item) {
              return (
                <label
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                >
                  <input type={"checkbox"} />
                  {item.label}
                </label>
              );
            })}
          </DetailContainer>
          <DetailContainer label="Certification Requirements">
            {Certifications.map(function (item) {
              return (
                <label
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                >
                  <input type={"radio"} />
                  {item.label}
                </label>
              );
            })}
          </DetailContainer>
          <DetailContainer label="Description">
            <textarea rows={4} />
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
              value="Add Listing"
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
        // alignItems: "flex-start",
      }}
    >
      <b style={{ marginBottom: 8 }}>{props.label}</b>
      {props.children}
    </div>
  );
}
