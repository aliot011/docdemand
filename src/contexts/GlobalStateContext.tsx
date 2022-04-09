import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type GlobalStateType = {
  ready: boolean;
  token: string;
};

// export const GlobalStateContext = createContext<GlobalStateType>({
//   token: token,
//   setToken,
// });

/// Shaun's code

export type GlobalStateAccessor = {
  ready: boolean;
  state: Partial<GlobalStateType>;
  setState: React.Dispatch<React.SetStateAction<Partial<GlobalStateType>>>;
};

export function initializeGlobalState(): GlobalStateType {
  return {
    ready: false,
    token: "",
  };
}

const GlobalStateContext = createContext<GlobalStateAccessor>({
  //Temporary data
  ready: false,
  state: initializeGlobalState(),
  setState: () => {},
});

function getGlobalStateProvider() {
  const GlobalStateProvider = (props: { children: ReactNode }) => {
    const globalContext = useContext(GlobalStateContext);
    const [state, setState] = useState<Partial<GlobalStateType>>(
      globalContext.state
    );

    useEffect(() => {
      //Load initial state from device - if it exists.
      const loadState = async () => {
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
          setState({
            ready: true,
            token: authToken,
          });
        } else {
          setState({
            ready: true,
            token: "",
          });
        }

        globalContext.ready = true;
      };

      loadState().catch((error) => {
        console.log("Error loading state: " + error);
      });
    }, []);

    useEffect(() => {
      //The state has changed!
      const saveState = async () => {
        localStorage.setItem("authToken", state.token ?? "");
      };

      saveState().catch((error) => {
        console.log("Error saving state: " + error);
      });
    }, [state]);

    return (
      <GlobalStateContext.Provider
        value={{ ready: false, state: state, setState: setState }}
      >
        {props.children}
      </GlobalStateContext.Provider>
    );
  };

  return GlobalStateProvider;
}

const GlobalStateConsumer = (props: {
  children: (value: GlobalStateAccessor) => ReactNode;
}) => {
  return (
    <GlobalStateContext.Consumer>{props.children}</GlobalStateContext.Consumer>
  );
};

export { getGlobalStateProvider, GlobalStateConsumer, GlobalStateContext };
