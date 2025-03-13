import classes from "./Register.module.scss";
import { images, RegisterRequest } from "../../../constants";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../store/AuthContext";
import Button from "../../UI/button/Button";
import InputField from "../../UI/input/InputField";

const RegisterBox = () => {
  const [credentials, setCredentials] = useState<RegisterRequest>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [disableForm, setDisableForm] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { register } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await register(credentials);
    navigate("/");
  };

  return (
    <div className={classes.registerBox}>
      <div className={classes.logo}>
        <img className="m-3" src={images.logoDark} alt="logo" />
      </div>
      <h2 className={classes.title}>{t("registerPage")}</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type={"text"}
          id={"firstName"}
          label={t("firstName")}
          placeholder={"firstName..."}
          onChange={(e) => {
            setCredentials({ ...credentials, firstName: e.target.value });
          }}
        />
        <InputField
          type={"text"}
          id={"lastName"}
          label={t("lastName")}
          placeholder={"lastName..."}
          onChange={(e) => {
            setCredentials({ ...credentials, lastName: e.target.value });
          }}
        />
        <InputField
          type={"email"}
          id={"email"}
          label={t("email")}
          placeholder={"email..."}
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
        />
        <InputField
          type={"password"}
          id={"pass"}
          label={t("pass")}
          placeholder={"password..."}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <InputField
          type={"password"}
          id={"confirmPass"}
          label={t("confirmPass")}
          placeholder={"Confirm password..."}
        />
        <InputField
          type={"number"}
          id={"phoneNumber"}
          label={t("phoneNumber")}
          placeholder={"phone number..."}
          onChange={(e) =>
            setCredentials({ ...credentials, phoneNumber: e.target.value })
          }
        />

        <Button type="submit" disabled={disableForm}>
          {t("login")}
        </Button>
        <p className={classes.changeMethod}>
          {t("redirectLogin")}
          <Link className={classes.forgat_pass} to="/login">
            {t("login")}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterBox;
