import React from "react";

export default function LanguageHeader({
  handleLanguageClick,
  activeLanguage,
  languagesButtons,
}) {
  return (
    <div className="language-header">
      <a
        className={activeLanguage === "french" ? "active-language" : ""}
        onClick={() => {
          handleLanguageClick("french");
        }}
      >
        {languagesButtons.language1}
      </a>
      /
      <a
        className={activeLanguage === "english" ? "active-language" : ""}
        onClick={() => {
          handleLanguageClick("english");
        }}
      >
        {languagesButtons.language2}
      </a>
    </div>
  );
}
