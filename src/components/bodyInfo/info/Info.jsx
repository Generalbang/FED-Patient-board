import React from "react";
import LabResult from "./LabResult";
import PersonalInfo from "./PersonalInfo";

/* CSS */
import styles from "./Info.module.css";

function Info({ user }) {
  return (
    <div className={styles.container}>
      <PersonalInfo user={user} />
      <LabResult user={user} />
    </div>
  );
}

export default Info;
