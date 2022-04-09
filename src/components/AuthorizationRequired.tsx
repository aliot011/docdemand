import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../contexts/GlobalStateContext";

export default function AuthorizationRequired() {
  const navigate = useNavigate();
  const globalContext = useContext(GlobalStateContext);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (globalContext.state.ready) {
      if (globalContext.state.token && globalContext.state.token.length > 0) {
        setAuthorized(true);
      } else {
        //Navigate to the login page
        navigate("/login");
      }
    }
  }, [globalContext.state.ready]);

  useEffect(() => {
    if (
      globalContext.state.ready &&
      authorized &&
      (globalContext.state.token === undefined ||
        globalContext.state.token?.length === 0)
    ) {
      navigate("/login");
    }
  }, [globalContext.state.ready, globalContext.state.token]);

  if (authorized) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return <div></div>;
  }
}
