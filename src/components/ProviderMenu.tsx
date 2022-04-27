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
    <>
      <div
        style={{
          background: "#FBFBFD",
          paddingInline: 30,
          minHeight: "100vh",
          zIndex: 1,
        }}
      >
        {/* <div
          style={{
            height: 2,
            background: "#EFEFF4",
            marginBottom: 20,
          }}
        /> */}
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
            title={"My Hospitals"}
            link="profile"
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

function CustomerIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5658 5.77972C10.7299 5.56912 10.6912 5.26579 10.4793 5.1022C10.2674 4.93733 9.96375 4.97662 9.79967 5.1885L8.20595 7.23844L6.38419 5.81192C6.28277 5.73142 6.15486 5.69535 6.02436 5.7121C5.89645 5.7282 5.77952 5.79453 5.70071 5.89693L3.76719 8.40219C3.60375 8.61343 3.6438 8.91677 3.8557 9.07971C3.94355 9.14669 4.04756 9.17953 4.15092 9.17953C4.29628 9.17953 4.43969 9.11448 4.5353 8.99083L6.17036 6.87263L7.99083 8.2985C8.0929 8.37772 8.22081 8.41507 8.35001 8.39768C8.47792 8.38223 8.59421 8.31589 8.67302 8.21414L10.5658 5.77972Z"
        fill={Colors.bluePrimary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.6666 4.26218C13.6666 1.91241 12.1553 0.333496 9.90597 0.333496H4.09387C1.84457 0.333496 0.333252 1.91241 0.333252 4.26218V9.73815C0.333252 12.0879 1.84457 13.6668 4.09387 13.6668H9.90597C12.1553 13.6668 13.6666 12.0879 13.6666 9.73815V4.26218ZM4.09387 1.26373H9.90597C11.6257 1.26373 12.7364 2.44016 12.7364 4.26218V9.73815C12.7364 11.5602 11.6257 12.7366 9.90597 12.7366H4.09387C2.3748 12.7366 1.26348 11.5602 1.26348 9.73815V4.26218C1.26348 2.44016 2.3748 1.26373 4.09387 1.26373Z"
        fill={Colors.bluePrimary}
      />
    </svg>
  );
}

function OrderDateicon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.80862 0.666504C12.1164 0.666504 13.6666 2.25251 13.6666 4.61273V11.3869C13.6666 13.7678 12.1641 15.3162 9.83871 15.331L4.19195 15.3332C1.88422 15.3332 0.333252 13.7472 0.333252 11.3869V4.61273C0.333252 2.23114 1.83578 0.683447 4.16113 0.66945L9.80788 0.666504H9.80862ZM9.80862 1.77148L4.1648 1.77442C2.45602 1.78474 1.43427 2.84551 1.43427 4.61273V11.3869C1.43427 13.166 2.46556 14.2282 4.19122 14.2282L9.83504 14.226C11.5438 14.2157 12.5656 13.1534 12.5656 11.3869V4.61273C12.5656 2.83372 11.535 1.77148 9.80862 1.77148ZM9.66703 10.5919C9.97091 10.5919 10.2175 10.8394 10.2175 11.1444C10.2175 11.4493 9.97091 11.6969 9.66703 11.6969H4.36746C4.06358 11.6969 3.81695 11.4493 3.81695 11.1444C3.81695 10.8394 4.06358 10.5919 4.36746 10.5919H9.66703ZM9.66703 7.5079C9.97091 7.5079 10.2175 7.75542 10.2175 8.06039C10.2175 8.36536 9.97091 8.61288 9.66703 8.61288H4.36746C4.06358 8.61288 3.81695 8.36536 3.81695 8.06039C3.81695 7.75542 4.06358 7.5079 4.36746 7.5079H9.66703ZM6.38944 4.43107C6.69332 4.43107 6.93995 4.67859 6.93995 4.98356C6.93995 5.28853 6.69332 5.53604 6.38944 5.53604H4.36724C4.06336 5.53604 3.81673 5.28853 3.81673 4.98356C3.81673 4.67859 4.06336 4.43107 4.36724 4.43107H6.38944Z"
        fill={Colors.bluePrimary}
      />
    </svg>
  );
}

function EngagementIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.90597 0.333496C12.1553 0.333496 13.6666 1.91241 13.6666 4.26218V9.73815C13.6666 12.0879 12.1553 13.6668 9.90597 13.6668H4.09387C1.84457 13.6668 0.333252 12.0879 0.333252 9.73815V4.26218C0.333252 1.91241 1.84457 0.333496 4.09387 0.333496H9.90597ZM9.90597 1.26373H4.09387C2.3748 1.26373 1.26348 2.44016 1.26348 4.26218V9.73815C1.26348 11.5602 2.3748 12.7366 4.09387 12.7366H9.90597C11.6257 12.7366 12.7364 11.5602 12.7364 9.73815V4.26218C12.7364 2.44016 11.6257 1.26373 9.90597 1.26373ZM4.12928 5.42032C4.38603 5.42032 4.5944 5.62869 4.5944 5.88543V10.1397C4.5944 10.3964 4.38603 10.6048 4.12928 10.6048C3.87254 10.6048 3.66417 10.3964 3.66417 10.1397V5.88543C3.66417 5.62869 3.87254 5.42032 4.12928 5.42032ZM7.02355 3.38373C7.28029 3.38373 7.48866 3.5921 7.48866 3.84885V10.1391C7.48866 10.3958 7.28029 10.6042 7.02355 10.6042C6.7668 10.6042 6.55843 10.3958 6.55843 10.1391V3.84885C6.55843 3.5921 6.7668 3.38373 7.02355 3.38373ZM9.87024 7.66838C10.127 7.66838 10.3354 7.87675 10.3354 8.1335V10.1391C10.3354 10.3958 10.127 10.6042 9.87024 10.6042C9.6135 10.6042 9.40513 10.3958 9.40513 10.1391V8.1335C9.40513 7.87675 9.6135 7.66838 9.87024 7.66838Z"
        fill="rgba(102, 112, 133, 0.4)"
      />
    </svg>
  );
}

function InsightsIcon() {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.3489 0.333496C13.6205 0.333496 15.3334 2.19127 15.3334 4.65486V9.35093C15.3334 10.6118 14.8886 11.7509 14.0803 12.5591C13.3551 13.2832 12.4144 13.6668 11.3598 13.6668H4.63834C3.58576 13.6668 2.64572 13.2839 1.9199 12.5591C1.11152 11.7509 0.666748 10.6118 0.666748 9.35093V4.65486C0.666748 2.19127 2.37968 0.333496 4.65131 0.333496H11.3489ZM11.3489 1.35914H4.65131C2.93565 1.35914 1.69 2.74512 1.69 4.65486V9.35093C1.69 10.3376 2.02836 11.219 2.64231 11.8323C3.17168 12.3622 3.86272 12.6412 4.64039 12.6412H11.3489C11.3502 12.6398 11.3557 12.6412 11.3598 12.6412C12.1381 12.6412 12.8285 12.3622 13.3578 11.8323C13.9725 11.219 14.3102 10.3376 14.3102 9.35093V4.65486C14.3102 2.74512 13.0645 1.35914 11.3489 1.35914ZM12.424 4.52413C12.602 4.74362 12.5686 5.06635 12.3496 5.2455L9.31803 7.71524C8.93466 8.0202 8.47624 8.17268 8.0185 8.17268C7.56213 8.17268 7.10712 8.02156 6.72647 7.71934L3.66693 5.24686C3.44659 5.06909 3.41248 4.74567 3.58917 4.5255C3.76721 4.30601 4.0892 4.27114 4.30886 4.44823L7.36566 6.91798C7.74972 7.22293 8.29069 7.22293 8.67748 6.91524L11.7036 4.4496C11.9232 4.26977 12.2452 4.30396 12.424 4.52413Z"
        fill="rgba(102, 112, 133, 0.4)"
      />
    </svg>
  );
}
