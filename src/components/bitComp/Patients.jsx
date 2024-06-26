import React from "react";

import styles from "./Patients.module.css";
import CardInfo from "./CardInfo";

function Patients({ data }) {
  /* console.log(data); */
  let patient = data?.map((user, i) => {
    return <CardInfo data={user} key={i} i={i} />;
  });

  return <div className={styles.myCont}>{patient}</div>;
}

export default Patients;
