'use client'
// hooks/useLogout.js
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const useLogout = () => {
  const router = useRouter();

  const logout = useCallback(() => {
    // Clear userData from localStorage
    localStorage.removeItem('userData');
    
    // Redirect to login or home page after logout
    router.push('/login'); // Adjust the route if needed
  }, [router]);

  return logout;
};

export default useLogout;
