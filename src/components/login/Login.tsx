import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import classes from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../store/AuthContext";
import { FormEvent, useRef, useState } from "react";
import { images, LoginRequest } from "../../constants";

function LoginBox() {
  const [credentials, setCredentials] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const errorMessageRef = useRef<HTMLSpanElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(credentials);
    navigate("/");
  };

  return (
    <div className={`${classes.container} `}>
      <div className={classes.loginBox}>
        <div className={classes.logo}>
          <img className="m-3" src={images.logoDark} alt="logo" />
        </div>
        <h2 className={classes.title}>{t("loginPage")}</h2>
        <form onSubmit={handleSubmit}>
          <Input
            ref={userNameRef}
            classes="login-label"
            type={"email"}
            id={"email"}
            placeholder={"email..."}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <span ref={errorMessageRef} className={classes.errorMessage}>
            {t("errorMessage")}
          </span>
          <Input
            classes="login-label"
            type={"password"}
            id={"pass"}
            placeholder={"password..."}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <Button type="submit">{t("login")}</Button>
          {/* <Link className={classes.forgat_pass} to="/">
            {t("forgetPass")}
          </Link> */}
          <div className={classes.checkbox}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">{t("rememberMe")}</label>
          </div>
        </form>
      </div>

      <div className={classes.keyPic}>
        <img
          src={require("../../assets/images/login.svg").default}
          alt="illustrator key"
        />
      </div>
    </div>
  );
}

export default LoginBox;
