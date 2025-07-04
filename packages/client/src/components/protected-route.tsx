import { useAuth } from '@/hooks/use-auth';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  // If token is initially null, isAuthenticated will be false, leading to /login.
  // Once token is loaded and valid, isAuthenticated becomes true, rendering Outlet.

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
