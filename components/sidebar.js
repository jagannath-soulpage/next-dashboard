import React from "react";
import "../static/sidebarstyles.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-menu">
          <ul className="list-group">
            <li className="list-group-item">
              <a href="/dashboard">
                <i class="fas fa-chalkboard-teacher"></i>
                <span className="sub-heading">Dashboard</span>
              </a>
            </li>
            {/* <li className="list-group-item">
              <a href="/information">
                <i className="fas fa-th-large"></i>
                <span>Information</span>
              </a>
            </li>
            <li className="list-group-item "></li>
            <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Insights</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Offers and Discount</span>
              </a>
            </li> */}
            <br></br>
            <li className="list-group-item divider">
              <a href="#">
                <i class="fas fa-user-injured"></i>
                <span className="sub-heading">PATIENTS</span>
              </a>
            </li>
            <li className="list-group-item divider">
              <a href="/information">
                <i class="fas fa-universal-access"></i>
                <span>Visits</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="/offersdiscounts">
              <i class="fas fa-diagnoses"></i>
                
                <span>Patients</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="/analytics">
              <i class="far fa-chart-bar"></i>
                
                <span>Analytics</span>
              </a>
            </li>
            {/* <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Payments(Invoice,Taxes)</span>
              </a>
            </li> */}
            <li className="list-group-item divider">
              <a href="#">
                <i class="fas fa-users"></i>
                <span className="sub-heading">MY PROFILE</span>
              </a>
            </li>
            <li className="list-group-item divider">
              <a href="/settings">
              
                <i class="fas fa-cogs"></i>
                <span>Settings</span>
              </a>
            </li>
            <li className="list-group-item">
				          <a href="#">
                  <i class="fas fa-file-upload"></i>
				            <span>Upgrade</span>
				          </a>
				        </li>
				        <li className="list-group-item">
				          <a href="#">
				            <i className="far fa-credit-card"></i> <span>What's New?</span>
				          </a>
				        </li>
				        <li className="list-group-item">
				          <a href="#">
				            <i className="far fa-question-circle"></i> <span>Help</span>
				          </a>
				        </li>
				        <li className="list-group-item sidebar-toggle">
				          <a>
				            <i className="fas fa-chevron-circle-left"></i> <span>Collapse</span>
				          </a>
				        </li>
            {/* <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Reviews and Rating</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
