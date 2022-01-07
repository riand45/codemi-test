import React from 'react';
import './widgetsmall.css';

export default function WidgetSmall() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Who courses do you users visit?</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <p>
            <b>Courses</b>
          </p>
          <p className="widgetSmUsername">Completed</p>
          <p>
            <b>Completion</b>
          </p>
        </li>

        <li className="widgetSmListItem">
          <p>
            <b>Digital Marketing</b>
          </p>
          <p className="widgetSmUsername">15.243</p>
          <p>
            <b>86%</b>
          </p>
        </li>

        <li className="widgetSmListItem">
          <p>
            <b>Getting Starter Marketing</b>
          </p>
          <p className="widgetSmUsername">15.243</p>
          <p>
            <b>86%</b>
          </p>
        </li>

        <li className="widgetSmListItem">
          <p>
            <b>Marketing Fundamental</b>
          </p>
          <p className="widgetSmUsername">15.243</p>
          <p>
            <b>86%</b>
          </p>
        </li>
      </ul>
    </div>
  );
}
