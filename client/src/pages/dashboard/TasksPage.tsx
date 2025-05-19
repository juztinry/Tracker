import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

interface Task {
  id: number;
  title: string;
  project: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

const TasksPage: React.FC = () => {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Complete project proposal',
      project: 'Marketing Campaign',
      status: 'completed',
      priority: 'high',
      dueDate: '2025-05-19'
    },
    {
      id: 2,
      title: 'Design new landing page',
      project: 'Website Redesign',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2025-05-20'
    },
    {
      id: 3,
      title: 'Review client feedback',
      project: 'Mobile App',
      status: 'pending',
      priority: 'low',
      dueDate: '2025-05-22'
    },
    {
      id: 4,
      title: 'Implement user authentication',
      project: 'Mobile App',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-05-25'
    },
    {
      id: 5,
      title: 'Create social media graphics',
      project: 'Marketing Campaign',
      status: 'pending',
      priority: 'medium',
      dueDate: '2025-05-28'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <DashboardLayout>
      <div className="tasks-page">
        <div className="page-header">
          <h2>Tasks</h2>
          <button className="primary-button">Add Task</button>
        </div>
        
        <div className="tasks-filter">
          <button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button 
            className={`filter-button ${filter === 'in-progress' ? 'active' : ''}`}
            onClick={() => setFilter('in-progress')}
          >
            In Progress
          </button>
          <button 
            className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
        
        <div className="tasks-list">
          <div className="tasks-header">
            <div className="task-column task-title">Task</div>
            <div className="task-column task-project">Project</div>
            <div className="task-column task-status">Status</div>
            <div className="task-column task-priority">Priority</div>
            <div className="task-column task-due-date">Due Date</div>
            <div className="task-column task-actions">Actions</div>
          </div>
          
          {filteredTasks.map(task => (
            <div key={task.id} className="task-row">
              <div className="task-column task-title">{task.title}</div>
              <div className="task-column task-project">{task.project}</div>
              <div className="task-column task-status">
                <span className={`status-badge ${task.status}`}>
                  {task.status.replace('-', ' ')}
                </span>
              </div>
              <div className="task-column task-priority">
                <span className={`priority-badge ${task.priority}`}>
                  {task.priority}
                </span>
              </div>
              <div className="task-column task-due-date">{task.dueDate}</div>
              <div className="task-column task-actions">
                <button className="action-icon">✏️</button>
                <button className="action-icon">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TasksPage;
