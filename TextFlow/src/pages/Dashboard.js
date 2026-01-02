import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
  FaHouse, 
  FaRegBookmark, 
  FaClockRotateLeft, 
  FaGear, 
  FaCircleQuestion, 
  FaArrowRightFromBracket, 
  FaWandMagicSparkles, 
  FaChevronDown 
} from 'react-icons/fa6';
import '../App.css';

const Dashboard = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Navigate back to Login page
    history.push('/');
  };

  return (
    <div className="dashboard-container">
      {/* Side iconss */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon-small">
            <FaWandMagicSparkles />
          </div>
          <span>TextFlow</span>
        </div>

        <nav className="sidebar-menu">
          <div className="menu-item active">
            <FaHouse className="menu-icon" /> 
            <span>Home</span>
          </div>
          <div className="menu-item">
            <FaRegBookmark className="menu-icon" /> 
            <span>Saved Results</span>
          </div>
          <div className="menu-item">
            <FaClockRotateLeft className="menu-icon" /> 
            <span>History</span>
          </div>
          <div className="menu-item">
            <FaGear className="menu-icon" /> 
            <span>Settings</span>
          </div>
          <div className="menu-item">
            <FaCircleQuestion className="menu-icon" /> 
            <span>Help</span>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="menu-item logout-btn" onClick={handleLogout}>
            <FaArrowRightFromBracket className="menu-icon" /> 
            <span>Logout</span>
          </div>
          
          <div className="help-card">
            <h4>Need help?</h4>
            <p>Check our documentation for guides and tutorials</p>
          </div>
        </div>
      </aside>

      {/* Main*/}
      <main className="main-content">
        <header className="main-header">
          <div className="header-title">
            <h2>Parallel Text Handling Processor</h2>
            <p>Run multiple text operations simultaneously</p>
          </div>
          
          <div className="user-profile">
            <div className="user-avatar">gx</div>
            <div className="user-details">
              <span className="username">gxhhhdhd</span>
              <span className="user-email">gxhhhdhd@gmail.com</span>
            </div>
            <FaChevronDown className="profile-arrow" />
          </div>
        </header>

        <div className="content-body">
          {/* inputt */}
          <div className="glass-card input-section">
            <div className="input-header">
              <label>Input Text</label>
              <div className="char-count">0 characters</div>
            </div>
            <textarea placeholder="Paste or type your text here..."></textarea>
          </div>

          {/* centre..*/}
          <div className="action-center">
             <button className="btn-run">
               <FaWandMagicSparkles /> Run Tasks in Parallel
             </button>
          </div>

          {/* Empty State Placeholder */}
          <div className="empty-state">
            <div className="state-icon">
               <FaWandMagicSparkles />
            </div>
            <h3>Ready to Process</h3>
            <p>Enter your text, select the operations you want to run, and click the button to process your text in parallel.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;