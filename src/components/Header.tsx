import { Link } from "@mui/material";

export default function Header() {
  return (
    <div
      style={{
        background: "#111111",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 99,
        paddingInline: 30,
        color: "lightgreen",
      }}
    >
      <h2>DocDemand</h2>
      <Link underline="none" style={{ cursor: "pointer" }} href="../">
        <h4 style={{ color: "#fff", margin: 0 }}>Log Out</h4>
      </Link>
    </div>
  );
}
