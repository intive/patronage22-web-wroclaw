import { Loader, LoaderType, useFirebaseService } from "@patronage-web/shared";
import { authSelector } from "@patronage-web/shared-data";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// TODO move to proper directory or apply proper logic for protected routes when will be ready
export const AuthGateway: React.FC = ({ children }) => {
  const { checkAuth } = useFirebaseService();
  const { isLoading } = useSelector(authSelector);

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isLoading ? <Loader type={LoaderType.Circular} /> : <>{children}</>;
};
