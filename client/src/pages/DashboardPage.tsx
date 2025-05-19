import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const userName = user?.user_metadata?.name || 'there';

  return (
    <DashboardLayout>
      <div className="dashboard-overview">
        <h2>Welcome, {userName}!</h2>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Projects</h3>
            <p className="stat-number">5</p>
            <p className="stat-description">Active projects</p>
          </div>
          <div className="stat-card">
            <h3>Tasks</h3>
            <p className="stat-number">12</p>
            <p className="stat-description">Tasks pending</p>
          </div>
          <div className="stat-card">
            <h3>Completed</h3>
            <p className="stat-number">8</p>
            <p className="stat-description">Tasks completed this week</p>
          </div>
          <div className="stat-card">
            <h3>Time</h3>
            <p className="stat-number">24h</p>
            <p className="stat-description">Tracked this week</p>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="dashboard-section">
            <h3>Recent Tasks</h3>
            <div className="task-list">
              <div className="task-item">
                <div className="task-status completed"></div>
                <div className="task-content">
                  <h4>Complete project proposal</h4>
                  <p>Project: Marketing Campaign</p>
                </div>
                <div className="task-date">Today</div>
              </div>
              <div className="task-item">
                <div className="task-status in-progress"></div>
                <div className="task-content">
                  <h4>Design new landing page</h4>
                  <p>Project: Website Redesign</p>
                </div>
                <div className="task-date">Tomorrow</div>
              </div>
              <div className="task-item">
                <div className="task-status pending"></div>
                <div className="task-content">
                  <h4>Review client feedback</h4>
                  <p>Project: Mobile App</p>
                </div>
                <div className="task-date">May 22</div>
              </div>
            </div>
          </div>

          <div className="dashboard-section">
            <h3>Project Progress</h3>
            <div className="project-progress">
              <div className="project-item">
                <div className="project-info">
                  <h4>Website Redesign</h4>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="project-percentage">75%</div>
              </div>
              <div className="project-item">
                <div className="project-info">
                  <h4>Mobile App Development</h4>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="project-percentage">45%</div>
              </div>
              <div className="project-item">
                <div className="project-info">
                  <h4>Marketing Campaign</h4>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="project-percentage">90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
