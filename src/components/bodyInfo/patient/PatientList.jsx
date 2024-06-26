import React from "react";
import Patients from "../../bitComp/Patients";

/* CSS */
import styles from "./PatientList.module.css";

function PatientList({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>patients</h2>
        <img src="./search_FILL0_wght300_GRAD0_opsz24.svg" alt="search" />
      </div>
      <div className={styles.overflow}>
        <Patients data={data} />
      </div>
    </div>
  );
}

export default PatientList;
