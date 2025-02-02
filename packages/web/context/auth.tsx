import { createContext, useReducer, useContext } from "react";

type Dispatch = (action: Action) => void;
type Action = { type: string };

type State = {
  display: string;
  title: string;
};

type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext = createContext<State | undefined>(undefined);
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "email":
      return {
        ...state,
        display: "email",
        title: "Log in or sign up",
      };
    case "phone":
      return {
        ...state,
        display: "phone",
        title: "Log in or sign up",
      };
    case "signup":
      return {
        ...state,
        display: "signup",
        title: "Finish signing up",
      };
    case "forgot_password":
      return {
        ...state,
        display: "forgot_password",
        title: "Forgot password",
      };
    case "exists":
      return {
        ...state,
        display: "exists",
        title: "Account exists",
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    display: "phone",
    title: "Log in and sign up",
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useAuthState must be used within a ToggleProvider");
  }
  return context;
};

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (!context) {
    throw new Error("useAuthDispatch must be used within a ToggleProvider");
  }
  return context;
};

export { useAuthDispatch, useAuthState, AuthProvider };
