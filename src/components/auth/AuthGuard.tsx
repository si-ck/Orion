
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRole?: 'student' | 'teacher';
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, requiredRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
      toast.error('Please log in to access this page');
      navigate('/login');
      return;
    }
    
    // If a specific role is required, check for it
    if (requiredRole) {
      const user = JSON.parse(currentUser);
      if (user.role !== requiredRole && user.role !== 'teacher') { // Teachers can access everything
        toast.error(`Only ${requiredRole}s can access this page`);
        navigate('/dashboard');
        return;
      }
    }
  }, [navigate, requiredRole]);

  return <>{children}</>;
};

export default AuthGuard;
