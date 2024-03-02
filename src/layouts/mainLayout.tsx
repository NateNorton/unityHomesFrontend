import React from 'react';
import { MainNavbar } from '../components/Navbar/Navbar';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  );
};
