import { ButtonUnstyled } from "@mui/base";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Colors } from "../Colors";
import type { hospital_id } from "../types";

export default function ProviderSignup3() {
  const [hospitals, setHospitals] = useState<hospital_id[]>([
    {
      id: 0,
      name: "Gottlieb Memorial Hospital",
      address: "123 Happy Street, Melrose Park, IL",
      phone: "555-123-1234",
      active: true,
    },
    {
      id: 1,
      name: "Gottlieb Memorial Hospital",
      address: "123 Happy Street, Melrose Park, IL",
      phone: "555-123-1234",
      active: true,
    },
    {
      id: 2,
      name: "Gottlieb Memorial Hospital",
      address: "123 Happy Street, Melrose Park, IL",
      phone: "555-123-1234",
      active: true,
    },
    {
      id: 3,
      name: "Gottlieb Memorial Hospital",
      address: "123 Happy Street, Melrose Park, IL",
      phone: "555-123-1234",
      active: true,
    },
    {
      id: 4,
      name: "Gottlieb Memorial Hospital",
      address: "123 Happy Street, Melrose Park, IL",
      phone: "555-123-1234",
      active: true,
    },
    {
      id: 5,
      name: "Gottlieb Memorial Hospital",
      address: "123 Happy Street, Melrose Park, IL",
      phone: "555-123-1234",
      active: true,
    },
    {
      id: 6,
      name: "Gottlieb Memorial Hospital",
      address: "123 Happy Street, Melrose Park, IL",
      phone: "555-123-1234",
      active: true,
    },
    {
      id: 7,
      name: "Gottlieb Memorial Hospital",
      address: "123 Happy Street, Melrose Park, IL",
      phone: "555-123-1234",
      active: true,
    },
  ]);

  const [filter, setFilter] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p
        style={{
          textAlign: "right",
          fontSize: 12,
          fontWeight: 700,
          color: "#fff",
          paddingBlock: 4,
          paddingInline: 8,
          borderRadius: 8,
          background: Colors.bluePrimary,
          alignSelf: "flex-end",
        }}
      >
        Step 3/3
      </p>
      <h3 style={{ margin: 0 }}>Add Facilities</h3>
      <p style={{ marginBottom: 24 }}>
        Add facilities where you are credentialed. Please note that for each
        facility where you are credentialed, we will need to verify your
        credentialed status.
      </p>
      <div style={{ flex: 1, display: "flex" }}>
        <input
          type="text"
          placeholder="Start typing to search for facilities..."
          onChange={(event) => setFilter(event.target.value)}
          style={{
            margin: 0,
            borderRadius: 0,
            flex: 1,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
          }}
        />
        <ButtonUnstyled
          style={{
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            padding: 12,
            alignSelf: "flex-start",
            fontSize: 14,
            color: "#fff",
            fontWeight: "600",
            border: "0px",
            background: "#00b0f0",
            cursor: "pointer",
          }}
        >
          Search
        </ButtonUnstyled>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 12,
          paddingInline: 4,
          flex: 1,
          overflow: "scroll",
          maxHeight: 320,
          border: "1px solid lightgray",
          padding: 8,
          borderRadius: 4,
        }}
      >
        {hospitals.map(function (item: hospital_id) {
          return (
            <li
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: 8,
                justifyContent: "space-between",
                borderTop: "0.5px solid lightgray",
                listStyle: "none",
              }}
              key={item.id}
              onClick={() => alert("select hospital")}
            >
              <div>
                <p style={{ fontWeight: "700", marginBottom: 0 }}>
                  {item.name}
                </p>
                <p style={{ fontSize: 12, fontWeight: 500, marginTop: 0 }}>
                  {item.address}
                </p>
              </div>
              <MdAddCircle color={"lightgreen"} size={24} />
            </li>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        <ButtonUnstyled
          onClick={() => {
            navigate("/provider/listings");
          }}
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
        >
          Continue
        </ButtonUnstyled>
      </div>
    </div>
  );
}
