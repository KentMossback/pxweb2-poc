//import React, { useState, useContext } from "react";
import LocalizedStrings from "react-localization";
import localization from "../localization";
import { useLanguageContext } from "./LanguageContext";

export default function useTranslation() {
  const { language } = useLanguageContext();
  let translation = new LocalizedStrings(localization);

  translation.setLanguage(language);
  return translation;
}



// import LocalizedStrings from "react-localization";
// import localization from "../localization";
// import { useLanguageContext } from "./LanguageContext";

// export default function useTranslation() {
//   //const { language } = useLanguageContext();   
//   let translation = new LocalizedStrings(localization);
 
//   translation.setLanguage("sv");
//   //translation.setLanguage(language);
//   return translation;
// }

// import LocalizedStrings from "react-localization";
// import localization from "../localization";
// import { useLanguageContext } from "./LanguageContext";

// import { createContext, useContext } from 'react';
// const LangContext = createContext('en');



// export default function useTranslation() {
//   const { language } = useLanguageContext();
  
//   const lang = useContext(LangContext);
//   const translation = new LocalizedStrings(localization);
//   translation.setLanguage(lang);
//   translation.setLanguage(language);

//   return translation;
// }
  
