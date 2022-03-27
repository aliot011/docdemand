import { ButtonUnstyled } from "@mui/base";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

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
        <div style={{ flex: 2, borderRight: "1px solid #EAEAEA" }} />
        <div style={{ flex: 3, padding: 24 }}>
          <h3>Login to DocDemand</h3>
          <label>
            Email:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <ButtonUnstyled
            // onClick={() => setStep(step + 1)}
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
            onClick={() => navigate("/dashboard")}
          >
            Login
          </ButtonUnstyled>
          <p style={{ fontSize: 12, margin: 12 }}>
            Don't have an account? <Link href="./signup">Signup</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
