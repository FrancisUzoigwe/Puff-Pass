import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const PrivateRouter: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.mainState);
  return <div>{user ? <div>{children}</div> : <Navigate to="/signin" />}</div>;
};

export default PrivateRouter;
