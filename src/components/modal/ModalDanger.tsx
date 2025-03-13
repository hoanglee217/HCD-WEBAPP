import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface ModalDangerProps {
  title: string;
  content?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}
const ModalDanger: React.FC<ModalDangerProps> = (props: ModalDangerProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <Card
        title={
          <span style={{ color: "red" }}>
            <ExclamationCircleOutlined style={{ marginRight: 8 }} />
            {props.title}
          </span>
        }
        bordered={false}
        className="danger-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <p>{props.content}</p>
        <div style={{ textAlign: "right" }}>
          <Button onClick={props.onCancel} style={{ marginRight: 8 }}>
            {t("CANCEL")}
          </Button>
          <Button type="primary" danger onClick={props.onConfirm}>
            {t("CONFIRM")}
          </Button>
        </div>
      </Card>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .danger-modal {
          width: 400px;
          background: #fff0f0;
          border: 1px solid red;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ModalDanger;
