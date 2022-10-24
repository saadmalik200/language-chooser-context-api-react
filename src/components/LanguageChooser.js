import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../Contexts/Context";

import { useNavigate } from "react-router-dom";

const LanguageChooser = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setLanguage(e.target.value);
    // navigate(`/content/${e.target.value}`);
  };

  return (
    <div className="  flex justify-center ">
      <div className="">
        <select
          value={language}
          onChange={changeHandler}
          name="langauges"
          id=""
        >
          <option>Select an option</option>
          <option value="DE">🇩🇪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GERMAN</option>
          <option value="EN">🇺🇸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English</option>
          <option value="TR">🇹🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turkish</option>
          <option value="IR">🇮🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persian</option>
          <option value="FR">🇫🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;French</option>
          <option value="SP">🇪🇸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spanish</option>
          <option value="DU">🇳🇱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dutch</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageChooser;
