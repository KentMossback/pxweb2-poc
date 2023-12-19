import { useContext } from "react";
//import { AppContext } from "../context/AppContext";
import useTranslation from "../components/Translations";
import LanguageHandler from "./LanguageHandler";

export const Header = () => {
//    const { theme } = useContext(AppContext);
const translation = useTranslation();
    
    return (
    <div>
    <span>{translation.changeLanguage}</span>
    <LanguageHandler />
  </div>)
}

