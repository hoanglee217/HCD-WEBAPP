import React from "react";
import { Button, ButtonProps } from "antd";
import styles from "./ButtonCustom.module.scss";
import classNames from "classnames";

interface CustomButtonProps extends ButtonProps {
  customVariant?:
    "default"
    | "primary"
    | "danger"
    | "success"
    | "outline"
    | "outline-primary"
    | "outline-danger"
    | "outline-success"
    | "ghost"
    | "ghost-primary"
    | "ghost-danger"
    | "ghost-success";
}

const ButtonCustom: React.FC<CustomButtonProps> = ({
  customVariant = "default",
  className,
  onClick,
  ...props
}) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      className={classNames(styles.button, styles[customVariant], className)}
    />
  );
};

export default ButtonCustom;
