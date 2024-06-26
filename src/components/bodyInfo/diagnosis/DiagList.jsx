import React from "react";

/* CSS */
import styles from "./DiagList.module.css";

function DiagList({ user }) {
  /* console.log(user); */
  let data = user.diagnostic_list;
  let list = data.map((dat, i) => {
    /* console.log(dat);
    console.log(data); */
    return (
      <div className={styles.option} key={i}>
        <span>{dat.name}</span>
        <span>{dat.description}</span>
        <span>{dat.status}</span>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <h2>diagnostic list</h2>
      <div className={styles.list}>
        <div className={styles.listTitle}>
          <span>problem/diagnosis</span>
          <span>description</span>
          <span>status</span>
        </div>
        <div className={styles.listOption}>{list}</div>
      </div>
    </div>
  );
}

export default DiagList;
{
  /* <div className={styles.option}>
            <span>Hypertension</span>
            <span>Chronic high blood pressure</span>
            <span>Under Observation</span>
          </div> */
}
