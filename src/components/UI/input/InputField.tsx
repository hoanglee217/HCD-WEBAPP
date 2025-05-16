import { ChangeEventHandler, useState } from "react";
import classes from "./InputField.module.scss";
import { Input as AntdInput } from "antd";

interface RuleProps {
  name: string;
  message: string;
  value?: number;
}

interface InputFieldProps {
  id: string;
  type: "text" | "password" | "email" | "number"; // Limit to valid input types
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  classes?: string;
  value?: string;
  readonly?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  rules?: RuleProps[];
  required?: boolean;
}

const validate = (
  type: string,
  value: string,
  rules?: RuleProps[]
): string | undefined => {
  if (!rules) return undefined;

  for (const rule of rules) {
    if (rule.name === "required" && !value) {
      return rule.message || "This field is required.";
    }
    if (
      rule.name === "email" &&
      type === "email" &&
      !/\S+@\S+\.\S+/.test(value)
    ) {
      return rule.message || "Invalid email address.";
    }
    if (rule.name === "min" && value.length < rule.value!) {
      return rule.message || "Password must be at least 8 characters long.";
    }
    // Add more validation rules as needed
  }

  return undefined;
};

const InputField = (props: InputFieldProps) => {
  const [error, setError] = useState<string>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    const validationError = validate(props.type, value, props.rules);
    setError(validationError);    
    props.onChange?.(e); // Call parent handler
  };

  const InputComponent =
    props.type === "password" ? AntdInput.Password : AntdInput;

  return (
    <div className={`${classes.form__control} ${props.classes}`}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <InputComponent
        status={error ? "error" : undefined}
        id={props.id}
        minLength={props.minLength}
        maxLength={props.maxLength}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        readOnly={props.readonly || false}
        onChange={handleChange}
        className={`${InputComponent === AntdInput.Password ? classes.inputPass : ""} ${error && classes.errorInput}`}
        aria-invalid={!!error}
        required={props.required}
      />
      <span className={classes.errorMessage}>{error}</span>
    </div>
  );
};

export default InputField;
