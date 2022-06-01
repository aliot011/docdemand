import { Link } from "@mui/material";
import {
  MdEventNote,
  MdNotificationsActive,
  MdWorkspaces,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { Colors } from "../Colors";
import "../App.css";
import { FaHospitalSymbol, FaStethoscope } from "react-icons/fa";

export default function ProviderMenu() {
  return (
    <div
      style={{
        background: "#FBFBFD",
        paddingInline: 30,
        minHeight: "100vh",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuHeader label="Job Discovery" />
        <MenuLink
          title={"Job Listings"}
          link="listings"
          icon={<MdWorkspaces />}
        />
        <MenuLink title={"My Jobs"} link="jobs" icon={<MdEventNote />} />
        <MenuLink
          title={"Alert Settings"}
          link="settings"
          icon={<MdNotificationsActive />}
        />
        <MenuLink
          title={"My Facilities"}
          link="facilities"
          icon={<FaHospitalSymbol />}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuHeader label="Credentialing Concierge" />
        <MenuLink title={"Coming Soon"} icon={<FaStethoscope />} />
      </div>
    </div>
  );
}

function MenuHeader(props: { label: string }) {
  return (
    <p
      style={{
        margin: 0,
        marginTop: 28,
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "18px",
        color: "#667085",
      }}
    >
      {props.label}
    </p>
  );
}

function MenuLink(props: { title: string; link?: string; icon: any }) {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  return (
    <Link
      onClick={
        props.link === undefined ? undefined : () => navigate(`./${props.link}`)
      }
      underline={"none"}
      component="button"
      style={{
        display: "flex",
        flex: 1,
        padding: 12,
        marginBlock: 8,
        background:
          path === `/provider/${props.link}`
            ? `${Colors.blueBrightPrimary}`
            : "transparent",
        fontWeight: 400,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        color:
          props.link === undefined
            ? "rgba(102, 112, 133, 0.4)"
            : path === `/provider/${props.link}`
            ? `${Colors.bluePrimary}`
            : "#667085",
        fontSize: 16,
        cursor: props.link === undefined ? "default" : "pointer",
      }}
    >
      {props.icon}
      <p style={{ marginLeft: 12 }} className="p.link">
        {props.title}
      </p>
    </Link>
  );
}
