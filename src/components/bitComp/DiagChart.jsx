import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import React from "react";

import styles from "./DiagChart.module.css";

function DiagChart({ sys, dias, years, months, systolics, diastolics }) {
  let mon = [];
  let yea = [];
  let year;
  let sym;
  systolics = systolics.reverse();
  diastolics = diastolics.reverse();
  mon = months.slice(0, 6);
  mon = mon.reverse();
  yea = years.slice(0, 6);
  yea = yea.reverse();
  let symbol = mon.map((el, i) => {
    sym = el.slice(0, 3);
    year = yea.map((y) => {
      return y;
    });
    return `${sym}, ${year[i]}`;
  });

  sys = sys.reverse().slice(0, 6);
  dias = dias.reverse().slice(0, 6);

  let max1 = systolics.slice(0, 6);
  let max2 = diastolics.slice(0, 6);
  max1 = Math.max(...max1);
  max2 = Math.max(...max2);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.head}>
          <h3>Blood Pressure</h3>
          <div className={styles.month}>
            <span>Last 6 months</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.646"
              height="6"
              viewBox="0 0 10.646 6"
            >
              <path
                id="expand_more_FILL0_wght300_GRAD0_opsz24"
                d="M271.741-608.384a.958.958,0,0,1-.335-.057.827.827,0,0,1-.3-.2l-4.478-4.479a.722.722,0,0,1-.212-.52.7.7,0,0,1,.212-.53.715.715,0,0,1,.525-.217.715.715,0,0,1,.525.217l4.059,4.059,4.059-4.059a.722.722,0,0,1,.52-.212.7.7,0,0,1,.53.212.715.715,0,0,1,.217.525.715.715,0,0,1-.217.525l-4.478,4.479a.826.826,0,0,1-.3.2A.958.958,0,0,1,271.741-608.384Z"
                transform="translate(-266.42 614.384)"
              />
            </svg>
          </div>
        </div>
        <Line
          datasetIdKey="id"
          data={{
            labels: [...symbol],
            datasets: [
              {
                id: 1,
                data: [...systolics],
              },
              {
                id: 2,
                data: [...diastolics],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <div className={styles.pressure}>
        <div className={styles.systo}>
          <div>
            <div className={styles.circle}></div>
            <span>Systolics</span>
          </div>
          <div className={styles.number}>{max1}</div>
          <div>{sys[0]}</div>
        </div>
        <hr />
        <div className={styles.diasto}>
          <div>
            <div className={styles.circle}></div>
            <span>Diastolics</span>
          </div>
          <div className={styles.number}>{max2}</div>
          <div>{dias[4]}</div>
        </div>
      </div>
    </div>
  );
}

export default DiagChart;
