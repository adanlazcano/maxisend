import { memo } from "react";
import styles from "./styles.module.scss";
import Button from "../../button";

interface IHeader {
  handleLinkToHome: () => void;
}

const Header = memo(({ handleLinkToHome }: IHeader) => {
  return (
    <header className={styles.header}>
      <h1 onClick={handleLinkToHome}>DEMO Streaming</h1>
      <div className={styles.login}>
        <small>Log in</small>
        <Button className={styles.btn} title="Start your free trial" />
      </div>
    </header>
  );
});

export default Header;
