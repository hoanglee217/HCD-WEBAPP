import "./BlogForm.scss";
import { useTranslation } from "react-i18next";
import { Button, Flex, Form, Input } from "antd";
import Editor from "../../components/UI/editor/Editor";
import TextCustom from "../../components/UI/TextCustom";
import ModuleSave from "../../components/UI/layout/ModuleSave";
import ModuleCategory from "../../components/UI/layout/ModuleCategory";
import ModuleTag from "../../components/UI/layout/ModuleTag";
import { debounce } from "lodash";
import { CreateBlogRequest } from "../../constants/management/blog/CreateBlogRequest";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetDetailBlogHandler from "../../components/api/management/blog/GetDetailBlogHandler";
import { UpdateBlogRequest } from "../../constants/management/blog/UpdateBlogRequest";
import { CategoryDto } from "../../constants/management/blog/GetAllBlogRequest";
import ModuleImage from "../../components/UI/layout/ModuleImage";

interface BlogFormProps {
  isUpdate?: boolean;
}

function BlogForm(props: BlogFormProps) {
  const { id } = useParams();
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [dataValues, setDataValues] = useState<CreateBlogRequest>();
  const [updateDataValues, setUpdateDataValues] = useState<UpdateBlogRequest>();
  const [categories, setCategories] = useState<CategoryDto[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.isUpdate && id) {
          const blogs = await GetDetailBlogHandler({ id: id });
          setUpdateDataValues(blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //set default data
  useEffect(() => {
    if (props.isUpdate && updateDataValues) {
      form.setFieldsValue({
        title: updateDataValues.title,
        slug: updateDataValues.slug,
        status: updateDataValues.status,
        rating: updateDataValues.rating,
        content: updateDataValues.content,
      });

      const cateList = updateDataValues.blogCategories?.flatMap(
        (o) => o.category
      );
      setCategories(cateList);
    }
  }, [form, props.isUpdate, updateDataValues]);

  //check event reload page
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const confirmationMessage = "Are you sure you want to reload?";
      if (!window.confirm(confirmationMessage)) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  //debounce input field
  const debouncedSearch = debounce((value) => {
    handleChangeTitle(value);
  }, 500);

  const handleChangeTitle = async (value: string) => {
    const slugValue = toSlug(value);
    if (props.isUpdate) {
      form.setFieldsValue({ title: value });
      setDataValues((prev) => ({
        ...prev,
        title: value,
      }));
    } else if (!dataValues?.slug) {
      form.setFieldsValue({ title: value, slug: slugValue });
      setDataValues((prev) => ({
        ...prev,
        title: value,
        slug: slugValue,
      }));
    }
  };

  //convert to slug
  const toSlug = (value: string) => {
    return value
      .replace(/Đ/g, "D") // Chuyển Đ -> D
      .replace(/đ/g, "d") // Chuyển đ -> d
      .toLowerCase() // Chuyển về chữ thường
      .normalize("NFD") // Chuẩn hóa Unicode (loại bỏ dấu)
      .replace(/[\u0300-\u036f]/g, "") // Xóa dấu tiếng Việt
      .replace(/[^a-z0-9\s-]/g, "") // Xóa ký tự đặc biệt
      .replace(/\s+/g, "-") // Thay khoảng trắng bằng dấu "-"
      .replace(/-+/g, "-") // Xóa dấu "-" thừa
      .trim();
  };

  //handler event
  const handleDelete = async () => {};
  const handleSubmit = async () => {
    const request = await form.getFieldsValue([
      "title",
      "slug",
      "content",
      "status",
      "categories",
    ]);
    console.log(request);
    // try {
    //   const parentId = form.getFieldValue("parentId");
    //   await CreateBlogHandler({
    //     name: form.getFieldValue("name"),
    //     parentId: parentId?.length ? parentId : null,
    //   });

    //   toast.success(t("CATEGORY_CREATE_SUCCESS"));
    //   props.onSuccess();
    //   // window.location.reload();
    // } catch (error) {
    //   toast.error(`${t("CATEGORY_CREATE_FAIL")} ${error}`);
    // }
  };

  return (
    <section>
      <Form form={form} layout="vertical">
        <Flex vertical gap={24}>
          <h2>{t("ADD_BLOG_HEADER")}</h2>
          <Flex gap={24}>
            <Flex vertical gap={12} className="MainSideContent">
              <Flex vertical gap={12}>
                <Form.Item name="title">
                  <Input
                    type="text"
                    placeholder={t("ADD_BLOG_TITLE_PLACEHOLDER")}
                    onChange={(e) => debouncedSearch(e.target.value)}
                  />
                </Form.Item>
                {(dataValues?.title || updateDataValues?.title) && (
                  <Flex
                    gap={12}
                    align="center"
                    justify="flex-start"
                    className="permalinkBox"
                  >
                    <TextCustom styled={{ color: "gray" }}>
                      {t("PERMALINK")}:
                    </TextCustom>
                    <a href="#a">
                      http://localhost:3000/
                      {dataValues?.slug || updateDataValues?.slug}
                    </a>
                    <Button>{t("EDIT")}</Button>
                  </Flex>
                )}
              </Flex>
              <Flex gap={10} align="flex-end" vertical className="editorBox">
                <Editor
                  name="content"
                  form={form}
                  initialData={props.isUpdate ? updateDataValues?.content : ""}
                />
              </Flex>
            </Flex>
            <div className="rightSideContent">
              <Flex gap={24} vertical>
                <ModuleSave
                  form={form}
                  onSubmit={handleSubmit}
                  onDelete={handleDelete}
                />
                <ModuleCategory
                  form={form}
                  categories={categories ? categories : []}
                />
                <ModuleTag form={form} />
                <ModuleImage form={form} image={updateDataValues?.thumbnail} />
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Form>
    </section>
  );
}

export default BlogForm;
