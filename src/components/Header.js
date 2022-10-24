import React from "react";
import LanguageChooser from "./LanguageChooser";

const Header = () => {
  return (
    <div className="text-[1.5rem] pt-[5rem]">
      <h2 className="text-center">Please choose your language</h2>
      <LanguageChooser />
    </div>
  );
};

export default Header;
