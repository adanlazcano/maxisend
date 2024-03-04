import { configSelector } from "@/redux/reducers/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLayout = () => {
  const navigate = useNavigate();
  const { title } = useSelector(configSelector);

  const handleLinkToHome = (): void => navigate("/");

  return {
    title,
    handleLinkToHome,
  };
};
