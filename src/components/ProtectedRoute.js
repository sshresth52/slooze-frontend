import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute ensures only users with allowed roles
 * can access specific routes.
 *
 * @param {JSX.Element} children - Component to render if access is granted
 * @param {string[]} allowedRoles - List of roles permitted to access the route
 */
export default function ProtectedRoute({ children, allowedRoles }) {
  const currentUserRole = localStorage.getItem("userRole");

  //  Redirect if no valid role or not authorized
  if (!currentUserRole || !allowedRoles.includes(currentUserRole)) {
    return <Navigate to="/" replace />;
  }

  //  Allow access if role is permitted
  return children;
}
