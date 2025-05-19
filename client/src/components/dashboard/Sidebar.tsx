import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-header">
        <h2>Tracker</h2>
      </div>
      <nav className="sidebar-nav">
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
      </nav>
      <div className="sidebar-footer">
        <p>© 2025 Tracker</p>
      </div>
    </aside>
  );
};

export default Sidebar;
