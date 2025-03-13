import { Flex, Tooltip } from "antd";
import { DeleteOutlined,EditOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import ButtonCustom from "./button/ButtonCustom";

interface UseActionProps {
  showEdit?: boolean;
  showDelete?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const UseAction = (props: UseActionProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      align="center"
      justify="center"
      style={{ cursor: "pointer" }}
      gap="10px"
    >
      <Tooltip placement="top" title={t("EDIT")}>
        <ButtonCustom
          customVariant="ghost-primary"
          onClick={() => {
            props.onEdit && props.onEdit();
          }}
        >
          {<EditOutlined />}
        </ButtonCustom>
      </Tooltip>
      <Tooltip placement="top" title={t("DELETE")}>
        <ButtonCustom
          onClick={() => {
            props.onDelete && props.onDelete();
          }}
          customVariant="ghost-danger"
        >
          {<DeleteOutlined />}
        </ButtonCustom>
      </Tooltip>
    </Flex>
  );
};

export default UseAction;
