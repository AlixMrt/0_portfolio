import React from "react";

export default function LanguageHeader({
  handleLanguageClick,
  activeLanguage,
}) {
  return (
    <div className="language-header">
      <a
        className={activeLanguage === "french" ? "active-language" : ""}
        onClick={() => {
          handleLanguageClick("french");
        }}
      >
        Français
      </a>
      /
      <a
        className={activeLanguage === "english" ? "active-language" : ""}
        onClick={() => {
          handleLanguageClick("english");
        }}
      >
        English
      </a>
    </div>
  );
}
