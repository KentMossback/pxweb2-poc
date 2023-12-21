// import React, { useState, useContext, FC } from "react";

// interface LanguageContextProps {
//   language: string;
//   changeLanguage: (lang: string) => void;
//   children?: React.ReactNode;
// }

// const LanguageContext = React.createContext<LanguageContextProps | undefined>(undefined);
// export const useLanguageContext = () => useContext(LanguageContext);

// const LanguageContextProvider: FC<LanguageContextProps> = ({ children }) => {
//   const [language, setLanguage] = useState<string>("sv");

//   const changeLanguage = (lang: string) => {
//     setLanguage(lang);
//   };

//   return (
//     <LanguageContext.Provider value={{ language, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export default LanguageContextProvider;


import React, { useState, useContext } from "react";

const LanguageContext = React.createContext();
export const useLanguageContext = () => useContext(LanguageContext);

export default function LanguageContextProvider({ children }) {
  const [language, changeLanguage] = useState("sv");
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
