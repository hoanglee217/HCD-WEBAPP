import { Button, Card, Flex, FormInstance } from "antd";
import { BulbFilled, CalendarFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { blogStatusEnums } from "../../../constants/enums/blogStatusEnums";
import TextCustom from "../TextCustom";
import CardCustom from "../card/CardCustom";

interface ModuleSaveProps {
  form: FormInstance;
  onSubmit: () => void;
  onDelete: () => void;
}

const ModuleSave = ({ form, onSubmit, onDelete }: ModuleSaveProps) => {
  const { t } = useTranslation();

  const handleDraftSubmit = async () => {
    form.setFieldsValue({ status: blogStatusEnums.Draft });
    onSubmit();
  };
  const handlePublishSubmit = async () => {
    form.setFieldsValue({ status: blogStatusEnums.Published });
    onSubmit();
  };
  return (
    <CardCustom
      size="small"
      title={t("PUBLISH")}
      styled={{ width: 280, border: "1px solid #dadada" }}
    >
      <Flex
        justify="space-between"
        style={{
          marginBottom: 12,
        }}
      >
        <Button onClick={handleDraftSubmit}>{`${t("SAVE")} ${t(
          "DRAFT"
        )}`}</Button>
        <Button>Preview</Button>
      </Flex>
      <p>
        <BulbFilled />{" "}
        {`${t("STATUS")}: ${form.getFieldValue("status") === 1 ? t("PUBLISH") : t("DRAFT")}`}
      </p>
      <p>
        <CalendarFilled /> Publish:{" "}
      </p>
      <Flex
        justify={
          form.getFieldValue("status") != null ? "space-between" : "flex-end"
        }
        align="center"
        style={{
          marginTop: 12,
          paddingTop: 12,
          borderTop: "1px solid #dadada",
        }}
      >
        {form.getFieldValue("status") != null && (
          <TextCustom onClick={onDelete} isDeleteLink>
            {t("MOVE_TO_TRASH")}
          </TextCustom>
        )}
        <Button key="setting" type="primary" onClick={handlePublishSubmit}>
          {t("PUBLISH")}
        </Button>
      </Flex>
    </CardCustom>
  );
};

export default ModuleSave;
