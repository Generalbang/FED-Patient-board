import React from 'react';
import more from '/more_vert_FILL0_wght300_GRAD0_opsz24.svg'
import styles from '../../bitComp/PatientCard.module.css';
import { NavLink } from 'react-router-dom';

function Testing() {
  return (
    <div>
      <NavLink to={`/patient`}>
        <div className={styles.profile}>
          <img src={more} alt="patients" />
            <div className={styles.name} style={{color: "black"}}>
            <h3>dare johnson</h3>
            <span>male, 12</span>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Testing
