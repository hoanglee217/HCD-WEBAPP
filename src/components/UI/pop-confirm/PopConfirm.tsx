import { Popconfirm } from "antd";
import { useTranslation } from "react-i18next";
import { Children } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";

interface PopConfirmProps {
  onConfirm: () => void;
  onCancel?: () => void;
  title: string;
  description?: string;
  okText?: string;
  cancelText?: string;
  type?: "default" | "danger";
  children: React.ReactNode;
}

const PopConfirm = ({
  onConfirm,
  onCancel,
  title,
  description,
  okText,
  cancelText,
  type = "default",
  children
}: PopConfirmProps) => {
  const { t } = useTranslation();
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText={okText ? okText : "Ok"}
      cancelText={cancelText ? cancelText : t("CANCEL")}
      icon={
        type === "danger" && <QuestionCircleOutlined style={{ color: "red" }} />
      }
    >
      {children}
    </Popconfirm>
  );
};

export default PopConfirm;
