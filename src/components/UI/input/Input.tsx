import React, { ChangeEventHandler, useImperativeHandle, useRef } from "react";
import { useTranslation } from "react-i18next";
import classes from "./Input.module.scss";

interface Props {
  id: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  classes?: string;
  value?: string;
  ref?: HTMLInputElement;
  readonly?: boolean;
  autocomplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
interface IImperativeHandler {
  focus: () => void;
}
const Input = React.forwardRef<IImperativeHandler, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);


  function inputFocused() {
    inputRef.current?.focus();
    inputRef.current?.setAttribute("style", "border:2px solid red");
  }

  useImperativeHandle(ref, () => {
    return {
      focus: inputFocused,
    };
  });
  const { t } = useTranslation();
  return (
    <div className={`${classes.form__control} ${props.classes}`}>
      <label htmlFor={props.id}>{t(`${props.id}`)}</label>
      <input
        ref={inputRef}
        id={props.id}
        minLength={props.minLength}
        maxLength={props.maxLength}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        readOnly={props.readonly || false}
        onChange={props.onChange}
        autoComplete={props.autocomplete || "off"}
      />
    </div>
  );
});

export default Input;
