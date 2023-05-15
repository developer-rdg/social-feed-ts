import styles from "./Header.module.css";
import headerLogo from "../assets/header-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={headerLogo} alt="header logo" />
      <strong>Feed</strong>
    </header>
  );
}
