import { Flex, Form, FormInstance, Input, Tag } from "antd";
import { useTranslation } from "react-i18next";
import TextCustom from "../text-custom/TextCustom";
import CardCustom from "../card/CardCustom";
import ButtonCustom from "../button/ButtonCustom";
import { TagDto } from "../../../constants/management/blog/GetAllBlogRequest";
import { useEffect, useState } from "react";

interface ModuleSaveProps {
  form: FormInstance;
  data: TagDto[];
}

const ModuleTag = ({ form, data }: ModuleSaveProps) => {
  const { t } = useTranslation();
  const [tags, setTags] = useState<TagDto[]>([]);

  useEffect(() => {
    setTags(data);
  }, [data]);

  const handleSubmit = () => {
    form.validateFields(["tag"]).then((values) => {
      const newTag: TagDto = {
        id: new Date().getTime().toString(),
        name: values.tag.trim(),
      };
      const newTags = [...tags, newTag];
      setTags(newTags);
      form.setFieldsValue({ tags: newTags });
      if (!newTag.name) return;
      form.resetFields(["tag"]);
    });
  };

  const handleRemoveTag = (removedTagId: string) => {
    const removedTags = tags.filter((o) => o.id !== removedTagId);
    setTags(removedTags);
    form.setFieldsValue({ tags: removedTags });
  };

  return (
    <CardCustom size="small" title={t("TAG")} styled={{ width: 280 }}>
      <Flex gap={12}>
        <Form.Item name="tag">
          <Input type="text" placeholder={t("ADD_BLOG_TAG_PLACEHOLDER")} />
        </Form.Item>
        <ButtonCustom onClick={handleSubmit}>{t("ADD")}</ButtonCustom>
      </Flex>
      <TextCustom isDescription>{t("TAG_ADD_NOTE")}</TextCustom>
      <Flex className="tagListContent" wrap gap={0 | 8}>
        {tags.map((item) => (
          <Tag key={item.id} closable onClose={() => handleRemoveTag(item.id)} style={{margin: 0}}>
            {item.name}
          </Tag>
        ))}
      </Flex>
    </CardCustom>
  );
};

export default ModuleTag;
