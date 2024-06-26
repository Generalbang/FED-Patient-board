import React from "react";
import { useState, useEffect } from "react";
import PatientList from "./bodyInfo/patient/PatientList";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Record from "./Record";
import Empty from "./bitComp/Empty";

/* CSS */
import styles from "./Body.module.css";

/* CONSTANT VALUE */
import { URL } from "./config";

function Body() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let username = "coalition";
    let password = "skills-test";
    let auth = btoa(`${username}:${password}`);

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${auth}`);

    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
      },
      redirect: "follow",
    };

    let fetchData = async () => {
      let res = await fetch(URL, requestOptions);
      let pat = await res.json();

      setData(pat);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <PatientList data={data} />
        <Routes>
          <Route path="/" element={<Empty />} />
          <Route path="/patient/:id" element={<Record data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Body;
