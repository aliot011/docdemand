import { Link } from "@mui/material";
import { useState } from "react";
import { MdChevronRight, MdClose, MdLogout } from "react-icons/md";
import { Drawer } from "@mui/material";
import { Colors } from "../Colors";

export default function ProfileDrawer() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [data, setData] = useState<{
    id: string;
    hospital: string;
    name: string;
    email: string;
  }>({
    id: "000111",
    hospital: "Gottlieb Memorial Hospital",
    name: "John Smith",
    email: "john.smith@test.com",
  });

  return (
    <>
      <Link
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
          cursor: "pointer",
        }}
        underline={"none"}
        onClick={() => setProfileOpen(true)}
      >
        <div
          style={{
            display: "flex",
            height: 28,
            width: 28,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
            background: "rgba(238, 244, 255, 1)",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: Colors.bluePrimary,
              fontWeight: 600,
            }}
          >
            {data.name.charAt(0)}
          </p>
        </div>
        <p style={{ marginLeft: 4, marginRight: 12 }}>{data.name}</p>
        <MdChevronRight color={Colors.blueMediumPrimary} />
      </Link>
      <Drawer
        anchor="right"
        open={profileOpen}
        onBackdropClick={() => setProfileOpen(false)}
      >
        <div
          style={{
            // width: 280,
            padding: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            background: "#FBFBFD",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 22,
                fontWeight: "700",
                color: Colors.bluePrimary,
              }}
            >
              Profile
            </p>
            <MdClose
              size={22}
              style={{
                color: Colors.bluePrimary,
                cursor: "pointer",
              }}
              onClick={() => setProfileOpen(false)}
            />
          </div>
          <ProfileComponent label={"Name"} value={data.name} />
          <ProfileComponent label={"Email"} value={data.email} />
        </div>
        <Link
          href={"../login"}
          underline={"none"}
          style={{
            display: "flex",
            padding: 8,
            marginBlock: 12,
            background: Colors.bluePrimary,
            fontWeight: "400",
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: Colors.blueBrightPrimary,
            fontSize: 16,
            cursor: "pointer",
            margin: 12,
          }}
        >
          <MdLogout
            style={{
              marginRight: 8,
              height: 20,
              width: 20,
              borderRadius: 13,
            }}
          />
          <p className="p.link">Log Out</p>
        </Link>
      </Drawer>
    </>
  );
}

function ProfileComponent(props: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBlock: 12,
      }}
    >
      <p style={{ fontWeight: "700", fontSize: 16, margin: 4 }}>
        {props.label}
      </p>
      <div
        style={{
          display: "flex",
          flex: 1,
          padding: 12,
          border: `1px solid ${Colors.border}`,
          borderRadius: 8,
        }}
      >
        <p>{props.value}</p>
      </div>
    </div>
  );
}
