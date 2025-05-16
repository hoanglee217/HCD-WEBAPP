import InputField from "../../UI/input/InputField";
import classes from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../store/AuthContext";
import { FormEvent, useState } from "react";
import { images, LoginRequest } from "../../../constants";
import ButtonCustom from "../../UI/button/ButtonCustom";

function LoginBox() {
  const [credentials, setCredentials] = useState<LoginRequest>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(credentials);
    navigate("/");
  };

  return (
    <div className={classes.loginBox}>
      <div className={classes.logo}>
        <img className="m-3" src={images.logoDark} alt="logo" />
      </div>
      <h2 className={classes.title}>{t("loginPage")}</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type={"email"}
          id={"email"}
          label={t("email")}
          placeholder={"email..."}
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
          required
          rules={[
            {
              name: "required",
              message: t("emailRequire"),
            },
            {
              name: "email",
              message: t("emailInvalid")
            }
          ]}
        />
        <InputField
          type={"password"}
          label={t("pass")}
          id={"pass"}
          placeholder={"password..."}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          required
          rules={[
            {
              name: "required",
              message: t("passRequire"),
            },
          ]}
        />
        <ButtonCustom customVariant="primary" htmlType="submit">{t("login")}</ButtonCustom>

        <div className={classes.subProperty}>
          <div className={classes.checkbox}>
            <input
              type="checkbox"
              id="rememberMe"
              onChange={(e) =>
                setCredentials({ ...credentials, rememberMe: e.target.checked })
              }
            />
            <label htmlFor="rememberMe">{t("rememberMe")}</label>
          </div>

          <div className={classes.forgat_pass}>
            {/* <Link to="/forget-password" aria-disabled>{t("forgetPass")}</Link> */}
          </div>
        </div>
        <p className={classes.changeMethod}>
          {t("redirectRegister")}
          <Link className={classes.forgat_pass} to="/register">
            {t("register")}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginBox;
