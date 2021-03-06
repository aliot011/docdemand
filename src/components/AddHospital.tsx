import { ButtonUnstyled } from "@mui/base";
import { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import type { Facility } from "../types";

export default function AddHospital() {
  const [hospitals, setHospitals] = useState<Facility[]>([
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
  ]);

  const [filter, setFilter] = useState<string>("");

  var axios = require("axios");

  //   var config = ;

  // useState(() =>
  //   axios({
  //     method: "get",
  //     url: "https://xma7-7q1q-g4iv.n7.xano.io/api:xv_aHIEN/hospital",
  //     headers: {},
  //   })
  //     .then(function (response: any) {
  //       setHospitals(response.data);
  //       // alert(JSON.stringify(response.data));
  //     })
  //     .catch(function (error: any) {
  //       console.log(error);
  //     })
  // );

  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
      }}
    >
      <div style={{ flex: 1, padding: 24 }}>
        <h3>Add Hospital</h3>
        <div style={{ flex: 1, display: "flex" }}>
          <input
            type="text"
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
            paddingInline: 12,
            flex: 1,
          }}
        >
          {hospitals === undefined
            ? null
            : hospitals.map(function (item: Facility) {
                return (
                  <li
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: 8,
                      marginInline: 4,
                      justifyContent: "space-between",
                      borderTop: "0.5px solid lightgray",
                    }}
                    key={item._id}
                    onClick={() => alert("select hospital")}
                  >
                    <div>
                      <p style={{ fontWeight: "700", marginBottom: 0 }}>
                        {item.name}
                      </p>
                      <p
                        style={{ fontSize: 12, fontWeight: 500, marginTop: 0 }}
                      >
                        {item.address.address1}
                      </p>
                    </div>
                    <MdAddCircle color={"lightgreen"} size={24} />
                  </li>
                );
              })}
        </div>
      </div>
    </div>
  );
}
