import { useEffect } from "react";
import { INIT_VALUE_TITLE } from "@/constants";
import { setTitle } from "@/redux/reducers/config";
import { IMenu } from "@/types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const menu: IMenu[] = [
  {
    id: 1,
    name: "Popular Series",
    link: "series",
  },

  {
    id: 2,
    name: "Popular Movies",
    link: "movie",
  },
];

export const useHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle(INIT_VALUE_TITLE));
  }, [dispatch]);

  const handleLinkMenu = ({ link, name }: IMenu): void => {
    navigate(`/${link}` as string, {
      state: { title: name },
    });
  };

  return {
    menu,
    handleLinkMenu,
  };
};
