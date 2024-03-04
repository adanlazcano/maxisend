import { memo } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { APPS_MENU, LINKS_MENU, SOCIAL_MEDIA_MENU } from "@/constants";
import { IMenu } from "@/types";

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <ul>
          {LINKS_MENU.map(({ id, name, link }: IMenu, index: number) => {
            return (
              <li key={id}>
                <Link to={link as string}>{name}</Link>
                {index !== LINKS_MENU.length - 1 && <span>|</span>}
              </li>
            );
          })}
        </ul>
        <small className={styles.contentCopyRight}>
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </small>

        <div className={styles.menu}>
          <ul>
            {SOCIAL_MEDIA_MENU.map(({ id, image }: IMenu) => {
              return (
                <li key={id}>
                  <img className={styles.mediaImg} src={image} alt={image} />
                </li>
              );
            })}
          </ul>
          <ul>
            {APPS_MENU.map(({ id, image }: IMenu) => {
              return (
                <li key={id}>
                  <img src={image} alt={image} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
