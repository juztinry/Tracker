import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const ProjectsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="projects-page">
        <div className="page-header">
          <h2>Projects</h2>
          <button className="primary-button">New Project</button>
        </div>
        
        <div className="projects-list">
          <div className="project-card">
            <div className="project-header">
              <h3>Website Redesign</h3>
              <span className="project-badge in-progress">In Progress</span>
            </div>
            <p className="project-description">
              Redesign the company website with modern UI/UX principles.
            </p>
            <div className="project-meta">
              <div className="project-deadline">
                <span className="meta-label">Deadline:</span>
                <span className="meta-value">June 15, 2025</span>
              </div>
              <div className="project-tasks">
                <span className="meta-label">Tasks:</span>
                <span className="meta-value">8/12 completed</span>
              </div>
            </div>
            <div className="project-actions">
              <button className="action-button">View Details</button>
              <button className="action-button">Edit</button>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-header">
              <h3>Mobile App Development</h3>
              <span className="project-badge in-progress">In Progress</span>
            </div>
            <p className="project-description">
              Develop a mobile application for both iOS and Android platforms.
            </p>
            <div className="project-meta">
              <div className="project-deadline">
                <span className="meta-label">Deadline:</span>
                <span className="meta-value">August 30, 2025</span>
              </div>
              <div className="project-tasks">
                <span className="meta-label">Tasks:</span>
                <span className="meta-value">5/15 completed</span>
              </div>
            </div>
            <div className="project-actions">
              <button className="action-button">View Details</button>
              <button className="action-button">Edit</button>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-header">
              <h3>Marketing Campaign</h3>
              <span className="project-badge almost-complete">Almost Complete</span>
            </div>
            <p className="project-description">
              Plan and execute a marketing campaign for the new product launch.
            </p>
            <div className="project-meta">
              <div className="project-deadline">
                <span className="meta-label">Deadline:</span>
                <span className="meta-value">May 25, 2025</span>
              </div>
              <div className="project-tasks">
                <span className="meta-label">Tasks:</span>
                <span className="meta-value">9/10 completed</span>
              </div>
            </div>
            <div className="project-actions">
              <button className="action-button">View Details</button>
              <button className="action-button">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectsPage;
