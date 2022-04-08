import { ButtonUnstyled } from "@mui/base";
import { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import type { hospital_id } from "../types";

export default function AddHospital() {
  const [hospitals, setHospitals] = useState<hospital_id[]>();

  const [filter, setFilter] = useState<string>("");

  var axios = require("axios");

  //   var config = ;

  useState(() =>
    axios({
      method: "get",
      url: "https://xma7-7q1q-g4iv.n7.xano.io/api:xv_aHIEN/hospital",
      headers: {},
    })
      .then(function (response: any) {
        setHospitals(response.data);
        // alert(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        console.log(error);
      })
  );

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
            // borderBlock: "1px solid #1e1e1e",
            flex: 1,
          }}
        >
          {hospitals === undefined
            ? null
            : hospitals.map(function (item: hospital_id) {
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
                    key={item.id}
                    onClick={() => alert("select hospital")}
                  >
                    <div>
                      <p style={{ fontWeight: "700", marginBottom: 0 }}>
                        {item._Name}
                      </p>
                      <p
                        style={{ fontSize: 12, fontWeight: 500, marginTop: 0 }}
                      >
                        {item.Address}
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
