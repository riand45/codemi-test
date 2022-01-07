import React from 'react';
import './sidebar.css';
import {
  LineStyle,
  PermIdentity,
  BarChart,
  MailOutline,
  DynamicFeed,
  Usb,
  Settings,
  ShowChartOutlined,
  Announcement,
  Info,
  Email,
  SupervisedUserCircle,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">HOME</h3>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">LEARNING</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Courses
              </li>
            </Link>
            <li className="sidebarListItem">
              <Usb className="sidebarIcon" />
              Learning Plans
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MANAGE</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Settings className="sidebarIcon" />
                Skills
              </li>
            </Link>
            <li className="sidebarListItem">
              <ShowChartOutlined className="sidebarIcon" />
              Reports
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Announcement className="sidebarIcon" />
              Announcements
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">CONFIGURE</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Points
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Rewards
            </li>
            <li className="sidebarListItem">
              <Email className="sidebarIcon" />
              Email Templates
            </li>
            <li className="sidebarListItem">
              <Info className="sidebarIcon" />
              Company Info
            </li>
            <li className="sidebarListItem">
              <SupervisedUserCircle className="sidebarIcon" />
              Billing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
