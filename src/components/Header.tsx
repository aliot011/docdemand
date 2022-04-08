import { Link } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../contexts/GlobalStateContext";

export default function Header(props: { windowTrigger: number }) {
  const navigate = useNavigate();
  const globalState = useContext(GlobalStateContext);

  return (
    <div
      style={{
        background: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        top: 0,
        right: 0,
        left: 0,
        paddingInline: 30,
        color: "lightgreen",
      }}
    >
      <h2>DocDemand</h2>
      {globalState.state.token === "" ? null : (
        <Link
          underline="none"
          style={{ cursor: "pointer" }}
          href="../login"
          onClick={() => globalState.setState({ token: "" })}
        >
          <h4 style={{ color: "black", margin: 0 }}>Log Out</h4>
        </Link>
      )}
    </div>
  );
}
