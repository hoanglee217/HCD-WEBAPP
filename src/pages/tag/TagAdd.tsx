import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Form, Input } from "antd";
import CreateTagHandler from "../../components/api/management/tag/CreateTagHandler";
import ButtonCustom from "../../components/UI/button/ButtonCustom";

interface ITagProps {
  onSuccess: () => void;
}

function TagAdd(props: ITagProps) {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      await CreateTagHandler({
        name: form.getFieldValue("name"),
      });

      toast.success(t("CREATE_SUCCESS", { name: "Tag" }));
      props.onSuccess();
      // window.location.reload();
    } catch (error) {
      toast.error(`${t("CREATE_FAIL", { name: "Tag" })} ${error}`);
    }
  };

  return (
    <section>
      <h2 className="title">{t("CATEGORY_CREATE")}</h2>
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

export default TagAdd;
