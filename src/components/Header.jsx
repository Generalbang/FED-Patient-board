import Logo from "./bitComp/Logo.jsx";
import Nav from "./bitComp/Nav.jsx";
import Profile from "./bitComp/Profile.jsx";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <Nav />
      <Profile />
    </div>
  );
}

export default Header;
