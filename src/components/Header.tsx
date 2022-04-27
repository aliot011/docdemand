import { Drawer, Link } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import ProfileDrawer from "./HospitalDrawer";
import ProviderMenu from "./ProviderMenu";

export default function Header(props: { windowTrigger: number }) {
  const navigate = useNavigate();
  const globalState = useContext(GlobalStateContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWindowWidth(window.innerWidth);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Drawer anchor="left" open={menuOpen} variant="persistent">
        <div style={{ background: "#FBFBFD", padding: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              alignSelf: "stretch",
            }}
          >
            <MdClose
              size={28}
              style={{
                color: "#26390F",
                cursor: "pointer",
              }}
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: 12,
            }}
          >
            <div
              style={{
                background: "purple",
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
              }}
            >
              <FaStethoscope style={{ color: "#FBFBFD" }} />
            </div>
            <h2 style={{ color: "purple", fontSize: 28 }}>Pagerr</h2>
          </div>
          <ProviderMenu />
        </div>
      </Drawer>

      <div
        style={{
          background: "#FBFBFD",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          top: 0,
          right: 0,
          left: 0,
          paddingInline: 30,
        }}
      >
        {windowWidth < 800 ? (
          <MdOutlineMenu
            size={28}
            style={{
              color: "#26390F",
              cursor: "pointer",
            }}
            onClick={() => setMenuOpen(true)}
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingBlock: 4,
              borderRadius: 2,
            }}
          >
            <div
              style={{
                background: "purple",
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
              }}
            >
              <FaStethoscope style={{ color: "#FBFBFD" }} />
            </div>
            <h2 style={{ color: "purple", fontSize: 28 }}>Pagerr</h2>
          </div>
        )}
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
        <ProfileDrawer />
      </div>
    </>
  );
}
