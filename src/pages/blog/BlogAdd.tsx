import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Col, Flex, Form, Input, Row } from "antd";
import GetAllBlogHandler from "../../components/api/management/blog/GetAllBlogHandler";
import TextCustom from "../../components/UI/TextCustom";
import Editor from "../../components/UI/Editor";

function BlogAdd() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const fetchData = async () => {
    try {
      const responseBlogs = await GetAllBlogHandler({
        pageSize: 1000,
      });
    } catch (error) {
      toast.error(`Error fetching blogs: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleSubmit = async () => {
  //   try {
  //     const parentId = form.getFieldValue("parentId");
  //     await CreateBlogHandler(
  //       {
  //         name: form.getFieldValue("name"),
  //         parentId: parentId?.length ? parentId : null,
  //       },
  //     );

  //     toast.success(t("CATEGORY_CREATE_SUCCESS"));
  //     props.onSuccess();
  //     // window.location.reload();
  //   } catch (error) {
  //     toast.error(`${t("CATEGORY_CREATE_FAIL")} ${error}`);
  //   }
  // };

  return (
    <section>
      <Form form={form} layout="vertical" onFinish={() => {}}>
        <Flex vertical gap={20}>
          <h2>{t("ADD_BLOG_HEADER")}</h2>
          <Form.Item name="title">
            <Input type="text" placeholder={t("ADD_BLOG_TITLE_PLACEHOLDER")} />
          </Form.Item>
          <Flex gap={10} style={{ fontSize: 12 }}>
            <TextCustom styled={{ color: "gray" }}>
              {t("PERMALINK")}:
            </TextCustom>
            <a href="#a">http://localhost:3000/add-blog</a>
          </Flex>
          <Row>
            <Col span={18} style={{ padding: 0 }}>
              <Editor />
            </Col>
            <Col span={6}>col-6 col-pull-18</Col>
          </Row>
        </Flex>
      </Form>
    </section>
  );
}

export default BlogAdd;
