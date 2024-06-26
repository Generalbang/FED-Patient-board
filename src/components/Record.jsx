import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Daignosis from "./bodyInfo/diagnosis/Diagnosis";
import Info from "./bodyInfo/info/Info";

import styles from "./Record.module.css";
/* CONSTANT VALUE */
import { URL } from "./config";

function Record({ data }) {
  let pageId = useParams();
  let user = data[pageId.id];
  return (
    <div className={styles.container}>
      <Daignosis user={user} />
      <Info user={user} />
    </div>
  );
}

export default Record;
