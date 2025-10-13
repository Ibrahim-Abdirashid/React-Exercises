
import LanguageContext from "./LanguageContext";
import { useContext } from 'react';



function Greeting() {
    const language = useContext(LanguageContext);

    const message = {
        en: 'Hello World',
        so: 'salaama adduunkow',
    }
  return (
    <h1>{message[language]}</h1>
  );
}

export default Greeting;