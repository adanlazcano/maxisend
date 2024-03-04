import { IMenu } from "@/types";
import Facebook from "@/assets/social/facebook-white.svg";
import Twitter from "@/assets/social/twitter-white.svg";
import Instagram from "@/assets/social/instagram-white.svg";
import AppStore from "@/assets/store/app-store.svg";
import PlayStore from "@/assets/store/play-store.svg";
import WindowsStore from "@/assets/store/windows-store.svg";

const INIT_VALUE_TITLE: string = "Popular Titles";

const LINKS_MENU: IMenu[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Terms and Conditions",
    link: "/",
  },
  {
    id: 3,
    name: "Privacy Policy",
    link: "/",
  },
  {
    id: 4,
    name: "Collection Statement",
    link: "/",
  },
  {
    id: 5,
    name: "Help",
    link: "/",
  },
  {
    id: 6,
    name: "Manage Account",
    link: "/",
  },
];

const SOCIAL_MEDIA_MENU: IMenu[] = [
  {
    id: 1,
    image: Facebook,
  },
  {
    id: 2,
    image: Twitter,
  },
  {
    id: 3,
    image: Instagram,
  },
];
const APPS_MENU: IMenu[] = [
  {
    id: 1,
    image: AppStore,
  },
  {
    id: 2,
    image: PlayStore,
  },
  {
    id: 3,
    image: WindowsStore,
  },
];

const FILTER_YEAR = 2010;
const RECORDS_PER_PAGE = 20;
export {
  INIT_VALUE_TITLE,
  LINKS_MENU,
  SOCIAL_MEDIA_MENU,
  APPS_MENU,
  FILTER_YEAR,
  RECORDS_PER_PAGE
};
