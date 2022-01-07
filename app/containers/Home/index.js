import React from 'react';

import './home.css';
import { userData } from '../../dummyData';
import ActiveUser from '../../components/ActiveUser';
import Chart from '../../components/Chart';
import WidgetSmall from '../../components/WidgetSmall';
import WidgetLarge from '../../components/WidgetLarge';

export default function Home() {
  return (
    <div className="home">
      <div className="homeWidgets">
        <div style={{ flex: 2 }}>
          <Chart
            data={userData}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ActiveUser />
        </div>
      </div>
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
