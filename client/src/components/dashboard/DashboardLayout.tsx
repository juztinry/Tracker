import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import TopNavbar from './TopNavbar';
import '../../styles/dashboard.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <TopNavbar user={user} />
      <div className="dashboard-content">
        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
