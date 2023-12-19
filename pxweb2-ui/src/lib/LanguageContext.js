import React, { useState, useContext } from "react";

const LanguageContext = React.createContext("en");
export const useLanguageContext = () => useContext(LanguageContext);

export default function LanguageContextProvider({ children }) {
  const [language, changeLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}


// import React, { useState, useContext } from "react";

// interface LanguageContextProps {
//   language?: string;
//   changeLanguage?: (lang: string) => void;
//   children?: React.ReactNode;
// }

// const LanguageContext = React.createContext<LanguageContextProps | undefined>(undefined);
// export const useLanguageContext = () => useContext(LanguageContext);

// const LanguageContextProvider: React.FC<LanguageContextProps> = ({ children }) => {
//   const [language, changeLanguage] = useState<string>("en");
//   return (
//     <LanguageContext.Provider value={{ language, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export default LanguageContextProvider;

