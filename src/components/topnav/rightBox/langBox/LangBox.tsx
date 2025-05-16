import React, { useEffect, useRef, useContext } from "react";
import LangContext from "../../../../store/langContext";
import classes from "./LangBox.module.scss";
import { Dropdown, MenuProps } from "antd";

function LangBox() {
  const langBoxRef = useRef<HTMLDivElement>(null);
  const langCtx = useContext(LangContext);
  const lang = langCtx.lang;

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "vi";
  }, [lang]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: "🇺🇸",
      label: (
        <div
          onClick={() => {
            langCtx.toggleLanguage("en");
          }}
        >
          English (en)
        </div>
      ),
    },
    {
      key: "2",
      icon: "🇻🇳",
      label: (
        <div
          onClick={() => {
            langCtx.toggleLanguage("vi");
          }}
        >
          Vietnamese (vi)
        </div>
      ),
    },
  ];

  return (
    <div className={classes.lang} ref={langBoxRef}>
      <Dropdown.Button
        menu={{ items }}
        placement="bottom"
        icon={lang === "en" ? "🇺🇸" : "🇻🇳"}
      >
        {lang === "en" ? "EN" : "VI"}
      </Dropdown.Button>
    </div>
  );
}

export default LangBox;
