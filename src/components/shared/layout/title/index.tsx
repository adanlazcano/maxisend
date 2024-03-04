import { memo } from "react";
import styles from "./styles.module.scss";

interface ITitle {
  title: string;
}

const Title = memo(({ title }: ITitle) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  );
});

export default Title;
