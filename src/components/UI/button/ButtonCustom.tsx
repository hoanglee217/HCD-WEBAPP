import React from "react";
import { Button, ButtonProps } from "antd";
import styles from "./ButtonCustom.module.scss";
import classNames from "classnames";

interface CustomButtonProps extends ButtonProps {
  customVariant?:
    | "primary"
    | "danger"
    | "success"
    | "outline-primary"
    | "outline-danger"
    | "outline-success"
    | "ghost-primary"
    | "ghost-danger"
    | "ghost-success";
}

const ButtonCustom: React.FC<CustomButtonProps> = ({
  customVariant = "primary",
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={classNames(styles.button, styles[customVariant], className)}
    />
  );
};

export default ButtonCustom;
