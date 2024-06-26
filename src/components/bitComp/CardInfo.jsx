import React from "react";
import PatientCard from "./PatientCard";

import { NavLink } from "react-router-dom";

import styles from "./CardInfo.module.css";

function CardInfo({ data, i }) {
  return (
    <div className={styles.container}>
      <NavLink to={`/patient/${i}`}>
        <PatientCard
          key={i}
          name={data /* [i] */.name}
          picture={data /* [i] */.profile_picture}
          age={data /* [i] */.age}
          gender={data /* [i] */.gender}
        />
      </NavLink>
    </div>
  );
}

export default CardInfo;
