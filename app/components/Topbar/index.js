import React from 'react';
import './topbar.css';
import { NotificationsNone } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img
              src="https://i2.wp.com/codemi.co.id/wp-content/uploads/2019/08/codemi-394x150.png?fit=394%2C150&ssl=1"
              alt=""
              style={{ width: '30%' }}
            />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">18</span>
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
