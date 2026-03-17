import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ?children: <Navigate to="/" />;
};

export default PrivateRoutes;