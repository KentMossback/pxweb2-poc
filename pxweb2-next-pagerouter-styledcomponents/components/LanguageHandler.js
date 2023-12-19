import React from "react";
//import { useLanguageContext } from "../contexts/LanguageContext";
import { useLanguageContext } from "./LanguageContext";

export default function LanguageHandler() {
  const { language, changeLanguage } = useLanguageContext();
  
  return (
    <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">En- English</option>
      <option value="sv">Sv- Svenska</option>      
    </select>
  );
}
