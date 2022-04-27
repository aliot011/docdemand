import { useState } from "react";
import { ButtonUnstyled } from "@mui/base";
import { Link } from "@mui/material";
import { MdChevronRight } from "react-icons/md";
import doc1 from "../assets/doc1.png";

export default function Signup() {
  // const [step, setStep] = useState<number>(0);

  const sampleData: {
    healthSystemId: string;
    name: string;
    active: boolean;
  }[] = [
    {
      healthSystemId: "asdkdfj4dx",
      name: "Wallaby Medical System",
      active: true,
    },
    {
      healthSystemId: "dfewef0980",
      name: "Parakeet Medical System",
      active: true,
    },
    {
      healthSystemId: "asdfsd90980",
      name: "Octopus Medical System",
      active: true,
    },
    {
      healthSystemId: "asdkdfj4dx",
      name: "Wallaby Medical System",
      active: true,
    },
    {
      healthSystemId: "dfewef0980",
      name: "Parakeet Medical System",
      active: true,
    },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function Signup() {
    var axios = require("axios");
    var data = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://xma7-7q1q-g4iv.n7.xano.io/api:xv_aHIEN/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        alert(error);
      });
  }

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
          padding: 16,
          borderRadius: 8,
          background: "#fff",
          border: "1px solid gray",
          flexDirection: "column",
        }}
      >
        <h3 style={{ marginBottom: 24 }}>Sign up for Pagerr</h3>
        <label>
          Full Name:
          <input
            type="text"
            onChange={(evt) => setName(evt.currentTarget.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            onChange={(evt) => setEmail(evt.currentTarget.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            onChange={(evt) => setEmail(evt.currentTarget.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(evt) => setPassword(evt.currentTarget.value)}
          />
        </label>
        {/* <p>
                {name}, {email}, {password}
              </p> */}
        <ButtonUnstyled
          onClick={() => {
            Signup();
          }}
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
        >
          Create Account
        </ButtonUnstyled>
        <p style={{ fontSize: 12, margin: 12 }}>
          By signing up you agree to the <Link>Terms and Conditions</Link> and{" "}
          <Link>Privacy Policy</Link>.
        </p>
        <p style={{ fontSize: 12, margin: 12 }}>
          Already have an account? <Link href="./login">Login</Link>.
        </p>
      </div>
    </div>
  );
}
