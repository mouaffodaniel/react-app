import { Navigate } from "react-router-dom";

  function PrivateRoute({ children }) {
const privateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return !isAuthenticated ? <Navigate to="/control" /> : children;  

};
export default privateRoute;