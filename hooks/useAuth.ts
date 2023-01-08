import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../pages/_app";

export const useAuth = () => {
  const [isAuthUser, setIsAuthUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthUser(true);
    } else {
      setIsAuthUser(false);
    }
  });

  return isAuthUser;
};
