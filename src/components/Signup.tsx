import { useState } from "react";
import { ButtonUnstyled } from "@mui/base";
import { Link } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Signup() {
  const [step, setStep] = useState<number>(0);

  const sampleData: {
    healthSystemId: string;
    name: string;
    active: boolean;
  }[] = [
    {
      healthSystemId: "asdkdfj4dx",
      name: "Wallaby Medical System",
      active: true,
    },
    {
      healthSystemId: "dfewef0980",
      name: "Parakeet Medical System",
      active: true,
    },
    {
      healthSystemId: "asdfsd90980",
      name: "Octopus Medical System",
      active: true,
    },
    {
      healthSystemId: "asdkdfj4dx",
      name: "Wallaby Medical System",
      active: true,
    },
    {
      healthSystemId: "dfewef0980",
      name: "Parakeet Medical System",
      active: true,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(#e9e9e9,#e1e1e1)",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: 16,
          borderRadius: 8,
          background: "#fff",
          boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          minHeight: "80%",
          minWidth: "80%",
          flex: 1,
          margin: 80,
        }}
      >
        {step > 0 ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              display: "contents",
            }}
          >
            <MdChevronLeft
              size={30}
              color={"#00b0f0"}
              style={{ cursor: "pointer" }}
              onClick={() => setStep(step - 1)}
            />
          </div>
        ) : null}
        {step === 0 ? (
          <>
            <div style={{ flex: 2, borderRight: "1px solid #EAEAEA" }} />
            <div style={{ flex: 3, padding: 24 }}>
              <h3>Sign up for DocDemand</h3>
              <label>
                Full Name:
                <input type="text" />
              </label>
              <label>
                Email:
                <input type="text" />
              </label>
              <label>
                Password:
                <input type="password" />
              </label>
              <ButtonUnstyled
                onClick={() => setStep(step + 1)}
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
                Create Account
              </ButtonUnstyled>
              <p style={{ fontSize: 12, margin: 12 }}>
                By signing up you agree to the <Link>Terms and Conditions</Link>{" "}
                and <Link>Privacy Policy</Link>.
              </p>
              <p style={{ fontSize: 12, margin: 12 }}>
                Already have an account? <Link href="./login">Login</Link>.
              </p>
            </div>
          </>
        ) : null}
        {step === 1 ? (
          <div style={{ flex: 1, padding: 24 }}>
            <h3>Where are you credentialed?</h3>
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
                overflow: "scroll",
                maxHeight: 280,
                borderTop: "1px solid lightgray",
                borderBottom: "1px solid lightgray",
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
        ) : null}
      </div>
    </div>
  );
}
