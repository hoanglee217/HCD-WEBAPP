import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Form, Input, TreeProps } from "antd";
import GetDetailTagHandler from "../../components/api/management/tag/GetDetailTagHandler";
import { GetDetailTagResponse } from "../../constants/management/tag/GetDetailTagRequest";
import UpdateTagHandler from "../../components/api/management/tag/UpdateTagHandler";
import ButtonCustom from "../../components/UI/button/ButtonCustom";

interface ITagProps {
  tagId: string;
  onSuccess: () => void;
}

function TagEdit(props: ITagProps) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [tagData, setTagData] = useState<GetDetailTagResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTagData = await GetDetailTagHandler({
          id: props.tagId,
        });
        setTagData(responseTagData);
        form.setFieldsValue({ name: responseTagData.name });
      } catch (error) {
        toast.error(`Error fetching tag: ${error}`);
      }
    };

    fetchData();
  }, [form, props.tagId]);

  const handleSubmit = async () => {
    await UpdateTagHandler(
      { id: props.tagId, name: form.getFieldValue("name") },
      props.tagId
    );
    toast.success(t("UPDATE_SUCCESS", { name: "Tag" }));
    props.onSuccess();
  };

  return (
    <section>
      <h2 className="title">{t("CATEGORY_UPDATE")}</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label={t("CATEGORY_NAME")}
          name="name"
          rules={[{ required: true, message: t("CATEGORY_NAME_REQUIRED") }]}
        >
          <Input placeholder={t("CATEGORY_NAME_PLACEHOLDER")} />
        </Form.Item>

        <Form.Item>
          <ButtonCustom type="primary" htmlType="submit">
            {t("SAVE")}
          </ButtonCustom>
        </Form.Item>
      </Form>
    </section>
  );
}

export default TagEdit;
