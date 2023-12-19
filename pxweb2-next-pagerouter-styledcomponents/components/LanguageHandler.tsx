import React, { ChangeEvent, FC } from "react";
import { useLanguageContext } from "./LanguageContext";

const LanguageHandler: FC = () => {
  const { language, changeLanguage } = useLanguageContext();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">En- English</option>
      <option value="sv">Sv- Svenska</option>
    </select>
  );
};

export default LanguageHandler;



// import React from "react";
// //import { useLanguageContext } from "../contexts/LanguageContext";
// import { useLanguageContext } from "./LanguageContext";

// export default function LanguageHandler() {
//   const { language, changeLanguage } = useLanguageContext();
  
//   return (
//     <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
//       <option value="en">En- English</option>
//       <option value="sv">Sv- Svenska</option>      
//     </select>
//   );
// }
