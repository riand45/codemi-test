import React from 'react';
import './widgetlarge.css';

export default function WidgetLarge() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Users</th>
          <th className="widgetLgTh">Completed</th>
          <th className="widgetLgTh">Points</th>
        </tr>
        <br />
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Anthony Jackson</span>
          </td>
          <td className="widgetLgDate">15,243</td>
          <td className="widgetLgAmount">17,650</td>
        </tr>
        <br />
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Lionel Mcmilan</span>
          </td>
          <td className="widgetLgDate">14,243</td>
          <td className="widgetLgAmount">13,343</td>
        </tr>
        <br />
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Edan Randal</span>
          </td>
          <td className="widgetLgDate">10,243</td>
          <td className="widgetLgAmount">23,343</td>
        </tr>
        <br />
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Jasper Cason</span>
          </td>
          <td className="widgetLgDate">10,243</td>
          <td className="widgetLgAmount">23,343</td>
        </tr>
      </table>
    </div>
  );
}
