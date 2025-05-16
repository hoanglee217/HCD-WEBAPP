import { Button, Flex, Form, FormInstance, Select } from "antd";
import { BulbFilled, CalendarFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { blogStatusEnums } from "../../../constants/enums/blogStatusEnums";
import TextCustom from "../text-custom/TextCustom";
import CardCustom from "../card/CardCustom";
import ButtonCustom from "../button/ButtonCustom";
import { useEffect, useState } from "react";

interface ModuleSaveProps {
  isUpdate?: boolean;
  form: FormInstance;
  onSubmit: () => void;
  onDelete: () => void;
  defaultStatus?: blogStatusEnums;
}

const ModuleSave = ({
  isUpdate,
  form,
  defaultStatus,
  onSubmit,
  onDelete,
}: ModuleSaveProps) => {
  const { t } = useTranslation();
  const { Option } = Select;
  const [changeStatus, setChangeStatus] = useState(false);
  const [postStatus, setPostStatus] = useState<blogStatusEnums>();

  useEffect(() => {
    setPostStatus(defaultStatus);
  }, [defaultStatus]);

  const handleDraftSubmit = async () => {
    form.setFieldsValue({ status: blogStatusEnums.Draft });
    onSubmit();
  };

  const handlePublishSubmit = async () => {
    if (defaultStatus !== 1) {
      form.setFieldsValue({ status: blogStatusEnums.Published });
      setPostStatus(blogStatusEnums.Published);
    }
    onSubmit();
  };

  const handleChangeStatus = () => {
    form.validateFields(["status"]).then((values) => {
      if (values.status === 1) {
        form.setFieldsValue({ status: blogStatusEnums.Published });
        setPostStatus(blogStatusEnums.Published);
      } else {
        form.setFieldsValue({ status: blogStatusEnums.Draft });
        setPostStatus(blogStatusEnums.Draft);
      }
      setChangeStatus(false);
    });
  };

  return (
    <CardCustom
      size="small"
      title={t("PUBLISH")}
      styled={{ width: 280 }}
      footerJustify={postStatus != null ? "space-between" : "flex-end"}
      footer={
        <>
          {postStatus != null && (
            <TextCustom onClick={onDelete} isDeleteLink>
              {t("MOVE_TO_TRASH")}
            </TextCustom>
          )}
          <ButtonCustom
            key="setting"
            type="primary"
            onClick={handlePublishSubmit}
          >
            {defaultStatus === blogStatusEnums.Draft
              ? t("PUBLISH")
              : isUpdate
              ? t("UPDATE")
              : t("PUBLISH")}
          </ButtonCustom>
        </>
      }
    >
      <Flex
        justify="flex-start"
        style={{
          marginBottom: 12,
        }}
      >
        {postStatus !== blogStatusEnums.Published && (
          <ButtonCustom onClick={handleDraftSubmit}>{`${t("SAVE")} ${t(
            "DRAFT"
          )}`}</ButtonCustom>
        )}
        {/* <ButtonCustom>Preview</ButtonCustom> */}
      </Flex>
      <Flex gap={5} align="center">
        <BulbFilled />
        <TextCustom>{t("STATUS")}: </TextCustom>
        <TextCustom>
          {postStatus === blogStatusEnums.Published ? t("PUBLISH") : t("DRAFT")}
          {!changeStatus && (
            <Button
              onClick={() => setChangeStatus(true)}
              style={{ marginLeft: 5 }}
            >
              {t("EDIT")}
            </Button>
          )}
        </TextCustom>
      </Flex>
      {changeStatus && (
        <Flex align="center" gap={5}>
          <Form.Item name="status" style={{ margin: 0 }}>
            <Select defaultValue={postStatus}>
              <Option value={blogStatusEnums.Draft}>{t("DRAFT")}</Option>
              <Option value={blogStatusEnums.Published}>{t("PUBLISH")}</Option>
            </Select>
          </Form.Item>
          <ButtonCustom onClick={handleChangeStatus}>{t("SAVE")}</ButtonCustom>
          <TextCustom isLink onClick={() => setChangeStatus(false)}>
            {t("CANCEL")}
          </TextCustom>
        </Flex>
      )}
      <Flex gap={5}>
        <CalendarFilled /> Publish at:{" "}
      </Flex>
    </CardCustom>
  );
};

export default ModuleSave;
