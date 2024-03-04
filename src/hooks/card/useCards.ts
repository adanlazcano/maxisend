/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

export const useCard = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [isVisiblePopUp, setIsVisiblePopUp] = useState<boolean>(showPopUp);
  const popUpRef = useRef<HTMLDivElement>(null);

  const handlePopUpToggle = () => {
    setShowPopUp(!showPopUp);
  };

  useEffect(() => {
    setIsVisiblePopUp(showPopUp);
  }, [showPopUp]);

  const handleClose = () => {
    setIsVisiblePopUp(false);
    handlePopUpToggle();
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (popUpRef.current && !popUpRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isVisiblePopUp) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isVisiblePopUp]);
  return {
    popUpRef,
    isVisiblePopUp,
    handlePopUpToggle,
  };
};
