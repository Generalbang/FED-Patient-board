import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { faSolid, faRegular } from "@fortawesome/fontawesome-free-solid"; */

/* CSS */
import styles from "./PersonalInfo.module.css";

function PersonalInfo({ user }) {
  console.log(FontAwesomeIcon);

  /* let user = data;
  console.log(user); */
  return (
    <div className={styles.container}>
      <div className={styles.picz}>
        <img
          src={user.profile_picture}
          alt="patient image"
          className={styles.image}
        />
        <h2>{user.name}</h2>
      </div>
      <div className={styles.personal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
        </svg>
        <div className={styles.name}>
          <span>date of birth</span>
          <h3>{user.date_of_birth}</h3>
        </div>
      </div>
      <div className={styles.personal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z" />
        </svg>
        <div className={styles.name}>
          <span>gender</span>
          <h3>{user.gender}</h3>
        </div>
      </div>
      <div className={styles.personal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>
        <div className={styles.name}>
          <span>phone number</span>
          <h3>{user.phone_number}</h3>
        </div>
      </div>
      <div className={styles.personal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>
        <div className={styles.name}>
          <span>emergence phone number</span>
          <h3>{user.emergency_contact}</h3>
        </div>
      </div>
      {/* <div className={styles.personal}>
        <img src="/FemaleIcon.svg" alt="" />
      </div> }*/}
      <div className={styles.personal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
        </svg>
        <div className={styles.name}>
          <span>insurance provider</span>
          <h3>{user.insurance_type}</h3>
        </div>
      </div>
      <div className={styles.btn}>
        <button>show all information</button>
      </div>
    </div>
  );
}

export default PersonalInfo;
