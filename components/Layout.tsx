import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Footer } from './Shared';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-display">
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
};
