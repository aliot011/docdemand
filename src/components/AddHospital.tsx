import { ButtonUnstyled } from "@mui/base";
import { MdCancel, MdChevronRight, MdDelete } from "react-icons/md";

export default function AddHospital() {
  const sampleData: {
    healthSystemId: string;
    name: string;
    city: string;
    active: boolean;
  }[] = [
    {
      healthSystemId: "asdkdfj4dx",
      name: "Wallaby Medical System",
      city: "Chicago",
      active: true,
    },
    {
      healthSystemId: "dfewef0980",
      name: "Parakeet Medical System",
      city: "Chicago",
      active: true,
    },
    {
      healthSystemId: "asdfsd90980",
      name: "Octopus Medical System",
      city: "Chicago",

      active: true,
    },
    {
      healthSystemId: "asdkdfj4dx",
      name: "Wallaby Medical System",
      city: "Chicago",

      active: true,
    },
    {
      healthSystemId: "dfewef0980",
      name: "Parakeet Medical System",
      city: "Chicago",
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
      <div style={{ flex: 1, padding: 24 }}>
        <h3>Your Hospitals</h3>
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
                borderBottom: "0.5px solid lightgray",
              }}
              key={item.healthSystemId}
              onClick={() => alert("select hospital")}
            >
              <div>
                <p style={{ fontWeight: "700", marginBottom: 0 }}>
                  {item.name}
                </p>
                <p style={{ fontSize: 12, fontWeight: 500, marginTop: 0 }}>
                  {item.city}
                </p>
              </div>
              <MdCancel color={"red"} size={24} />
            </li>
          ) : null;
        })}
      </div>
      <div style={{ flex: 1, padding: 24 }}>
        <h3>Add Hospital</h3>
        <div style={{ flex: 1, display: "flex" }}>
          <input
            type="text"
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
            marginTop: 12,
            paddingInline: 12,
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
                  borderBottom: "0.5px solid lightgray",
                }}
                key={item.healthSystemId}
                onClick={() => alert("select hospital")}
                // tabIndex={1}
              >
                <div>
                  <p style={{ fontWeight: "500" }}>{item.name}</p>
                </div>
                <MdChevronRight />
              </li>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
