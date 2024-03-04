import { memo } from "react";
import styles from "./styles.module.scss";
import { Entry } from "@/types";
import { useCard } from "@/hooks/card/useCards";
import PopUp from "@/components/popup";

interface ICard {
  entry: Entry;
}

const Card = memo(({ entry }: ICard) => {
  const { popUpRef, isVisiblePopUp, handlePopUpToggle } = useCard();
  return (
    <>
      <div className={styles.container}>
        <img src={entry?.images?.["Poster Art"].url} alt="poster art" />
        <small onClick={handlePopUpToggle} title={entry?.title}>
          {entry?.title}
        </small>

        {isVisiblePopUp && <PopUp entry={entry} popUpRef={popUpRef} />}
      </div>
    </>
  );
});

export default Card;
