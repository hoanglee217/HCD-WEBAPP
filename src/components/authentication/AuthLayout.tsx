import classes from "./AuthLayout.module.scss";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  type: "login" | "register" | "forget-password";
}

const AuthLayout = (props: AuthLayoutProps) => {
  let illustrator = require("../../assets/images/login.svg").default;
  if (props.type === "register") {
    illustrator = require("../../assets/images/register.svg").default;
  } else if (props.type === "forget-password") {
    illustrator = require("../../assets/images/forget-password.svg").default;
  }

  return (
    <div className={classes.container}>
      <Outlet />
      <div
        className={`${props.type === "register" ? classes.isRegister : ""} ${
          classes.keyPic
        }`}
      >
        <img src={illustrator} alt="illustrator key" />
      </div>
    </div>
  );
};
export default AuthLayout;
