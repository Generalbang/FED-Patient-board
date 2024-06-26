import React from "react";

/* CSS */
import styles from "./PatientCard.module.css";

function PatientCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={props.picture} alt="patients" className={styles.picture} />
        <div className={styles.name}>
          <h3>{props.name}</h3>
          <span>
            {props.gender}, {props.age}
          </span>
        </div>
      </div>
      {/* <div className={styles.profile}>
        <img src={more} alt="patients" />
        <div className={styles.name}>
          <h3>dare johnson</h3>
          <span>male, 12</span>
        </div>
      </div> */}
      {/* <div>
        
        <div className="name">
          
          <span>
            
          </span>
        </div>
        </div> */}
      <img src="./more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="more" />
    </div>
  );
}

export default PatientCard;
