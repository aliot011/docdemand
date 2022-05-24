import { Outlet } from "react-router-dom";

export default function SignupChrome() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eaeaea",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: 24,
          borderRadius: 8,
          background: "#fff",
          border: "1px solid gray",
          flexDirection: "column",
          maxWidth: 600,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
