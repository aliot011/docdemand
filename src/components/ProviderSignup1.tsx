import { useState } from "react";
import { ButtonUnstyled } from "@mui/base";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Colors } from "../Colors";

export default function ProviderSignup1() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function validateFirstName(): string {
    if (password.length === 0) {
      return "First name is required";
    }

    return "";
  }

  function validateLastName(): string {
    if (password.length === 0) {
      return "Last name is required";
    }

    return "";
  }

  // function validateEmail(): string {
  //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     return "Invalid email address";
  //   }

  //   return "";
  // }

  function validatePassword(): string {
    if (password.length === 0) {
      return "Password is required";
    }

    return "";
  }

  function validateConfirmPassword(): string {
    if (password === confirmPassword) {
      return "";
    }

    return "Passwords must match";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          textAlign: "right",
          fontSize: 12,
          fontWeight: 700,
          color: "#fff",
          paddingBlock: 4,
          paddingInline: 8,
          borderRadius: 8,
          background: Colors.bluePrimary,
          alignSelf: "flex-end",
        }}
      >
        Step 1/3
      </p>
      <h3 style={{ margin: 0 }}>Welcome to Pagerr!</h3>
      <p style={{ marginBottom: 24 }}>
        Fill out your account info below to get signed up.
      </p>
      <label>
        First Name:
        <input
          type="email"
          onChange={(evt) => setFirstName(evt.currentTarget.value)}
          value={firstName}
        />
        <p
          style={{
            height: 12,
            fontWeight: 600,
            color: Colors.bluePrimary,
            marginInline: 8,
          }}
        >
          {validateFirstName()}
        </p>
      </label>
      <label>
        Last name:
        <input
          type="email"
          onChange={(evt) => setLastName(evt.currentTarget.value)}
          value={lastName}
        />
        <p
          style={{
            height: 12,
            fontWeight: 600,
            color: Colors.bluePrimary,
            marginInline: 8,
          }}
        >
          {validateLastName()}
        </p>
      </label>
      {/* <label>
        Email:
        <input
          type="email"
          onChange={(evt) => setEmail(evt.currentTarget.value)}
          value={email}
        />
        <p
          style={{
            height: 12,
            fontWeight: 600,
            color: Colors.bluePrimary,
            marginInline: 8,
          }}
        >
          {validateEmail()}
        </p>
      </label> */}
      <label>
        Password:
        <input
          type="password"
          onChange={(evt) => setPassword(evt.currentTarget.value)}
          value={password}
        />
        <p
          style={{
            height: 12,
            fontWeight: 600,
            color: Colors.bluePrimary,
            marginInline: 8,
          }}
        >
          {validatePassword()}
        </p>
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          onChange={(evt) => setConfirmPassword(evt.currentTarget.value)}
          value={confirmPassword}
        />
        <p
          style={{
            height: 12,
            fontWeight: 600,
            color: Colors.bluePrimary,
            marginInline: 8,
          }}
        >
          {validateConfirmPassword()}
        </p>
      </label>
      <ButtonUnstyled
        onClick={() => {
          navigate("/providersignup/2");
        }}
        style={{
          margin: 12,
          borderRadius: 4,
          padding: 12,
          fontSize: 14,
          color: "#fff",
          fontWeight: "600",
          border: "0px",
          background: "#00b0f0",
          cursor: "pointer",
        }}
        disabled={false}
      >
        Continue
      </ButtonUnstyled>
      <p style={{ fontSize: 12, margin: 12 }}>
        By signing up you agree to the{" "}
        <Link style={{ cursor: "pointer" }}>Terms and Conditions</Link> and{" "}
        <Link style={{ cursor: "pointer" }}>Privacy Policy</Link>.
      </p>
      <p style={{ fontSize: 12, margin: 12 }}>
        Already have an account? <Link href="./login">Login</Link>.
      </p>
    </div>
  );
}
