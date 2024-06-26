import styles from "./Nav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <img src="./home.svg" alt="" />
          <span>overview</span>
        </li>
        <li className={styles.active}>
          <img src="./group_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <span>patients</span>
        </li>
        <li>
          <img src="./calendar.svg" alt="" />
          <span>schedule</span>
        </li>
        <li>
          <img src="./chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <span>message</span>
        </li>
        <li>
          <img src="./credit_card_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <span>transactions</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
