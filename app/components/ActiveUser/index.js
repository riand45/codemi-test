import React from 'react';

import ItemActiveUser from '../ItemActiveUser';
import { BarChart } from '../BarChart';

export default function ActiveUser() {
  return (
    <div
      className="card"
      style={{
        backgroundColor: '#2C8CE6',
        color: 'white',
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 10,
        position: 'relative',
      }}
    >
      <div className="active-user">
        <h3>Active User Right Now</h3>
        <p className="total-user">479</p>
        <p className="title">Page view per minutes</p>
        <BarChart />
        <br />
        <ItemActiveUser
          isTitle
          pageActive="Top Active Page"
          activeUser="Active User"
        />
        <ItemActiveUser
          isTitle={false}
          pageActive="/#/learner/my_course"
          activeUser="45"
        />
        <ItemActiveUser
          isTitle={false}
          pageActive="/#/learner/cou...912asfu9f913"
          activeUser="23"
        />
        <ItemActiveUser
          isTitle={false}
          pageActive="/#/learner/lec...8391d12m91d2"
          activeUser="23"
          isLast
        />
        <ItemActiveUser
          isTitle={false}
          pageActive="/#/learner/qui...418j2812jd812"
          activeUser="23"
          isLast
        />
        <div style={{ height: 60 }} />
        <a href="##" style={{ position: 'absolute', bottom: 20, right: 25 }}>
          REAL TIME SUPPORT <span style={{ fontSize: 20 }}>&#8250;</span>
        </a>
      </div>
    </div>
  );
}
