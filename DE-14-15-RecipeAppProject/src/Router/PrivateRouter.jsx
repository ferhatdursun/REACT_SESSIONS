import React from "react";

const PrivateRouter = () => {
  return JSON.parse(sessionStorage.getItem("kullanici")) === "osman" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;