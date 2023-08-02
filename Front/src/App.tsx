import { ContactProvider } from "./contexts/contactContext";
import { LoginProvider } from "./contexts/loginContext";
import { UserProvider } from "./contexts/userContext";
import { RoutesApp } from "./routes";
import { ResetCss } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <LoginProvider>
      <UserProvider>
        <ContactProvider>
          <ResetCss />
          <RoutesApp />
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ContactProvider>
      </UserProvider>
    </LoginProvider>
  );
};

export default App;
