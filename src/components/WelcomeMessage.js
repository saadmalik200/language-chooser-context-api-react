import React, { useContext } from "react";

import { LanguageContext } from "../Contexts/Context";

const WelcomeMessage = () => {
  const { language } = useContext(LanguageContext);
  // console.log(language);
  // const newLang = language.toUpperCase();

  const messages = {
    DE: "Hallo Welt!",
    EN: "Hello World!",
    TR: "Selam Dünya!",
    IR: "سلام دنیا!",
    FR: "Bonjour le monde!",
    SP: "Hola Mundo!",
    DU: "Hallo Wereld!",
  };

  //   const singleLang = data.filter((item, i) => item.name === newLang)[0];
  //   console.log(singleLang);
  return (
    <div>
      <h2 className="text-[3rem] text-center mt-[17rem]">
        {messages[language]}
      </h2>
    </div>
  );
};

export default WelcomeMessage;
