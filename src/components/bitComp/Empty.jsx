import React from "react";

import styles from "./Empty.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Empty() {
  return (
    <div className={styles.container}>
      <h3>no records yet.</h3>
      <p>click a patient to check their records</p>
    </div>
  );
}

export default Empty;
