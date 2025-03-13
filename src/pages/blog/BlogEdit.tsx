import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Button, Form, Input, Tree, TreeProps } from "antd";
import { GetDetailBlogResponse } from "../../constants/management/blog/GetDetailBlogRequest";
import { GetAllBlogResponseItem } from "../../constants/management/blog/GetAllBlogRequest";
import GetDetailBlogHandler from "../../components/api/management/blog/GetDetailBlogHandler";
import GetAllBlogHandler from "../../components/api/management/blog/GetAllBlogHandler";

interface IBlogProps {
  blogId: string;
  onSuccess: () => void;
}

function BlogEdit(props: IBlogProps) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [blogData, setBlogData] = useState<GetDetailBlogResponse>();
  const [blogs, setBlogs] = useState<GetAllBlogResponseItem[]>();
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);

  const fetchData = async () => {
    try {
      const responseBlogData = await GetDetailBlogHandler({
        id: props.blogId,
      });

      const responseBlogs = await GetAllBlogHandler({
        pageSize: 1000,
      });

      setBlogData(responseBlogData);
      setBlogs(responseBlogs.items);

      form.setFieldsValue({
        name: responseBlogData.title
      });
    } catch (error) {
      toast.error(`Error fetching blogs: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const onCheck: TreeProps["onCheck"] = (checkedKeysValue, info) => {
    if (!info.node.key) return;
    const latestCheckedKey = info.node.key as string;
    const splitData = latestCheckedKey.split("+");

    if (splitData.length < 2) return;

    const blogLevel = Number(splitData[1]);

    if (blogLevel === 3) {
      toast.error(t("CATEGORY_MAX_CHILDREN"));
      return;
    }

    form.setFieldsValue({});
    if (checkedKeys.includes(latestCheckedKey)) {
      setCheckedKeys([]);
      form.setFieldsValue({ parentId: [] });
    } else {
      setCheckedKeys([latestCheckedKey]);
      form.setFieldsValue({ parentId: latestCheckedKey.split("+")[0] });
    }
  };

  return (
    <section>
      <h2 className="title">{t("CATEGORY_UPDATE")}</h2>
      <Form form={form} layout="vertical" onFinish={()=>{}}>
        <Form.Item
          label={t("CATEGORY_NAME")}
          name="name"
          rules={[{ required: true, message: t("CATEGORY_NAME_REQUIRED") }]}
        >
          <Input placeholder={t("CATEGORY_NAME_PLACEHOLDER")} />
        </Form.Item>

        <Form.Item label={t("CATEGORY_PARENT")} name="parentId">
          {blogData && blogs && (
            <Tree
              showLine
              checkable
              checkStrictly
              onCheck={onCheck}
              checkedKeys={checkedKeys}
            />
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t("SAVE")}
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}

export default BlogEdit;
