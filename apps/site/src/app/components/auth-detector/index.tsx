import { Loader, LoaderType } from "@patronage-web/shared";
import { userAuth } from "@patronage-web/shared-data";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useFirebaseService } from "../../hooks";

export const AuthDetector: React.FC = ({ children }) => {
  const { checkAuth } = useFirebaseService();
  const {
    auth: { isLoading }
  } = useSelector(userAuth);

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader type={LoaderType.Circular} />}
      {!isLoading && children}
    </>
  );
};
