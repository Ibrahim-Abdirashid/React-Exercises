import Greeting from "./Greeting";
import LanguageContext from "./LanguageContext";
import { useState } from 'react';

 

 function App() {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = ()=>{
    setLanguage((prevLang) => prevLang === 'en' ? 'so' : 'en');
  }
  return (
    <LanguageContext.Provider value={language}>

      <button onClick={toggleLanguage}>Switch {language === 'en' ? 'Somali' : 'English' }</button>
      <Greeting />
    </LanguageContext.Provider>
  );
}

export default App;