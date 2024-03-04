import { memo } from "react";
import Layout from "../shared/layout";
import { useHome } from "@/hooks/home/useHome";
import { IMenu } from "@/types";
import PlaceHolder from "@/assets/placeholder.png";
import styles from "./styles.module.scss";

const HomeComponent = memo(() => {
  const { menu, handleLinkMenu } = useHome();
  return (
    <Layout>
      <div className={styles.home}>
        {menu.map(({ id, name, link }: IMenu) => (
          <div
            className={styles.menu}
            key={id}
            onClick={() => handleLinkMenu({ link,name })}
          >
            <div className={styles.placeholder}>
              <img src={PlaceHolder} alt={PlaceHolder} />
              <span>{name?.split(" ")[1]}</span>
            </div>
            <small>{name}</small>
          </div>
        ))}
      </div>
    </Layout>
  );
});

export default HomeComponent;
