import React from "react";

import styles from "./Profile.module.css";
function Profile() {
  return (
    <div className={styles.container}>
      <img
        src="./senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
        alt=""
        className={styles.image}
      />
      <div className={styles.name}>
        <h3>dr. jose simmons</h3>
        <span>general practional</span>
      </div>
      <div className={styles.line}></div>
      <img src="./settings_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
      <img src="./more_vert_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
    </div>
  );
}

export default Profile;
