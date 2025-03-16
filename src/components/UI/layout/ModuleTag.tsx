import { Button, Card, Flex, Form, FormInstance, Input, Tag } from "antd";
import { useTranslation } from "react-i18next";
import TextCustom from "../TextCustom";
import CardCustom from "../card/CardCustom";

interface ModuleSaveProps {
  form: FormInstance;
}

const ModuleTag = ({ form }: ModuleSaveProps) => {
  const { t } = useTranslation();

  return (
    <CardCustom
      size="small"
      title={t("TAG")}
      styled={{ width: 280, border: "1px solid #dadada" }}
    >
      <Flex gap={12}>
        <Form.Item name="tag">
          <Input type="text" placeholder={t("ADD_BLOG_TAG_PLACEHOLDER")} />
        </Form.Item>
        <Button>{t("ADD")}</Button>
      </Flex>
      <TextCustom isDescription>
        {t("TAG_ADD_NOTE")}
      </TextCustom>
      <Flex className="tagListContent">
        <Tag closable>
          Tag 1
        </Tag>
        <Tag closable>
          Tag 2
        </Tag>{" "}
      </Flex>
    </CardCustom>
  );
};

export default ModuleTag;
