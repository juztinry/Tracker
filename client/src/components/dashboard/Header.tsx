import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  user: any;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const { logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect will be handled by the protected route
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="dashboard-header">
      <div className="header-title">
        <h1>Tracker Dashboard</h1>
      </div>
      <div className="header-actions">
        <div className="user-profile">
          <button className="profile-button" onClick={toggleDropdown}>
            <div className="avatar">
              {user?.user_metadata?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </div>
            <span className="user-name">{user?.user_metadata?.name || user?.email}</span>
          </button>
          {dropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>
                  <button onClick={() => {}}>Profile</button>
                </li>
                <li>
                  <button onClick={() => {}}>Settings</button>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
