import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ProviderMenu from "./ProviderMenu";
// import Footer from "./Footer";
import Header from "./Header";

export default function ProviderChrome() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWindowWidth(window.innerWidth);
  };

  const windowTrigger = 900;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          zIndex: 0,
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            background: "#FBFBFD",
          }}
        >
          <Header windowTrigger={windowTrigger} />
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
            }}
          >
            {windowWidth > windowTrigger ? <ProviderMenu /> : null}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
                padding: windowWidth > windowTrigger ? 32 : 12,
                boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
                zIndex: 3,
                borderTopLeftRadius: windowWidth > windowTrigger ? 48 : 0,
                background: "#fff",
              }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
