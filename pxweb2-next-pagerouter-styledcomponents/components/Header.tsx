import useTranslation from "../components/Translations";
import LanguageHandler from "./LanguageHandler";

export const Header = () => {
  const translation = useTranslation();
    return (
    <div>
    <span>{translation.changeLanguage}</span>
        <LanguageHandler />
  </div>)
}

