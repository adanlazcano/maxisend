import { RefObject, memo } from "react";
import { Entry } from "@/types";
import styles from "./styles.module.scss";

interface IPopUp {
  entry: Entry;
  popUpRef: RefObject<HTMLDivElement>;
}

const PopUp = memo(({ entry, popUpRef }: IPopUp) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      ref={popUpRef}
      className={styles.popUp}
    >
      <p>
        <b>Title</b>
      </p>
      <p>{entry?.title}</p>
      <p>
        <b>Description</b>
      </p>
      <p>{entry?.description}</p>
      <p>
        <b>Release year</b>
      </p>
      <p>{entry?.releaseYear}</p>
      <p>
        <b>Poster Art</b>
      </p>
      <p>
        <a target="_BLANK" href={entry?.images?.["Poster Art"]?.url}>
          {entry?.images?.["Poster Art"]?.url}
        </a>
      </p>
    </div>
  );
});

export default PopUp;
