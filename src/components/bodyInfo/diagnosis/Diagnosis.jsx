import React from "react";
import DiagHistory from "./DiagHistory";
import DiagList from "./DiagList";

/* CSS */
import styles from "./Diagnosis.module.css";

function Diagnosis({ user }) {
  return (
    <div className={styles.container}>
      <DiagHistory data={user} />
      <DiagList user={user} />
    </div>
  );
}

export default Diagnosis;
