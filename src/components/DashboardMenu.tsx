import { Link, Menu } from "@mui/material";
import { purple } from "@mui/material/colors";
import { MdNoDrinks, MdOutlinePerson, MdPerson } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Colors } from "../Colors";
import "../App.css";

export default function DashboardMenu() {
  return (
    <>
      <div
        style={{
          background: "#FBFBFD",
          width: 256,
          paddingInline: 30,
          minHeight: "100vh",
          zIndex: 1,
        }}
      >
        <div
          style={{
            height: 2,
            background: "#EFEFF4",
            marginBottom: 20,
          }}
        />
        <div>
          <MenuHeader label="Purchase Feedback" />
          <MenuLink title={"Job Listings"} link="./listings" />
          <MenuLink title={"Settings"} link="./settings" />
          <MenuLink title={"Profile"} link="./profile" />
        </div>
        <div>
          <MenuHeader label="Credentialing Concierge" />
          <MenuLink title={"Coming Soon"} />
        </div>
      </div>
    </>
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

function MenuLink(props: { title: string; link?: string }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Link
      href={props.link === undefined ? "" : `./${props.link}`}
      underline={"none"}
      style={{
        display: "flex",
        flex: 1,
        padding: 12,
        marginBlock: 12,
        background:
          path === `/dashboard/${props.link}`
            ? `${Colors.blueBrightPrimary}`
            : "transparent",
        fontWeight: 400,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        color:
          props.link == undefined
            ? "rgba(102, 112, 133, 0.4)"
            : path === `/dashboard/${props.link}`
            ? `${Colors.bluePrimary}`
            : "#667085",
        fontSize: 16,
        cursor: props.link === undefined ? "default" : "pointer",
      }}
    >
      <MdPerson
        style={{
          marginRight: 8,
          height: 20,
          width: 20,
          borderRadius: 13,
        }}
      />
      <p className="p.link">{props.title}</p>
    </Link>
  );
}
