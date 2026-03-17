import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ?children: <Navigate to="/" />;
};

export default Private;