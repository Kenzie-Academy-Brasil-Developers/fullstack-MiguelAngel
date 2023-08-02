import { ContactProvider } from "../contexts/contactContext";
import { LoginProvider } from "../contexts/loginContext";
import { UserProvider } from "../contexts/userContext";
import { ChildProps } from "../interfaces/interfaces";

export const Providers = ({ children }: ChildProps) => {
  return (
    <LoginProvider>
      <UserProvider>
        <ContactProvider>{children}</ContactProvider>
      </UserProvider>
    </LoginProvider>
  );
};
