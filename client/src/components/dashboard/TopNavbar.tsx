import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface TopNavbarProps {
  user: any;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ user }) => {
  const { logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="top-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/dashboard">Tracker</Link>
        </div>

        {/* Mobile menu toggle button */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="menu-icon">☰</span>
        </button>

        {/* Navigation links */}
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/dashboard" className="nav-link">
                <span className="nav-icon">📊</span>
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/projects" className="nav-link">
                <span className="nav-icon">📁</span>
                <span className="nav-text">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/tasks" className="nav-link">
                <span className="nav-icon">✓</span>
                <span className="nav-text">Tasks</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/calendar" className="nav-link">
                <span className="nav-icon">📅</span>
                <span className="nav-text">Calendar</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reports" className="nav-link">
                <span className="nav-icon">📈</span>
                <span className="nav-text">Reports</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings" className="nav-link">
                <span className="nav-icon">⚙️</span>
                <span className="nav-text">Settings</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* User profile */}
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
    </nav>
  );
};

export default TopNavbar;
