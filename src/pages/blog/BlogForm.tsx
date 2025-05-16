import "./BlogForm.scss";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import { Flex, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Editor from "../../components/UI/editor/Editor";
import TextCustom from "../../components/UI/text-custom/TextCustom";
import ModuleTag from "../../components/UI/layout/ModuleTag";
import ModuleSave from "../../components/UI/layout/ModuleSave";
import ModuleImage from "../../components/UI/layout/ModuleImage";
import ButtonCustom from "../../components/UI/button/ButtonCustom";
import ModuleCategory from "../../components/UI/layout/ModuleCategory";
import CreateBlogHandler from "../../components/api/management/blog/CreateBlogHandler";
import UpdateBlogHandler from "../../components/api/management/blog/UpdateBlogHandler";
import GetDetailBlogHandler from "../../components/api/management/blog/GetDetailBlogHandler";
import { GetDetailBlogResponse } from "../../constants/management/blog/GetDetailBlogRequest";
import { UpdateBlogRequest } from "../../constants/management/blog/UpdateBlogRequest";
import {
  CategoryDto,
  TagDto,
} from "../../constants/management/blog/GetAllBlogRequest";
import { blogStatusEnums } from "../../constants/enums/blogStatusEnums";
interface BlogFormProps {
  isUpdate?: boolean;
}

function BlogForm(props: BlogFormProps) {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [tags, setTags] = useState<TagDto[]>();
  const [editSlug, setEditSlug] = useState(false);
  const [categories, setCategories] = useState<CategoryDto[]>();
  const [dataValues, setDataValues] = useState<GetDetailBlogResponse>();
  const [updateDataValues, setUpdateDataValues] =
    useState<GetDetailBlogResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.isUpdate && id) {
          const blogs = await GetDetailBlogHandler({ id: id });
          setUpdateDataValues(blogs);
        } else {
          form.resetFields();
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
      const cateList = updateDataValues.blogCategories?.flatMap(
        (o) => o.category
      );
      const cateListIds = updateDataValues.blogCategories?.flatMap(
        (o) => o.category.id
      );
      const tagList = updateDataValues.blogTags?.flatMap((o) => o.tag);
      setCategories(cateList);
      setTags(tagList);

      form.setFieldsValue({
        title: updateDataValues.title,
        slug: updateDataValues.slug,
        status: updateDataValues.status,
        rating: updateDataValues.rating,
        content: updateDataValues.content,
        categories: cateListIds,
        tags: tagList,
      });
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
  const debounced = debounce((value) => {
    handleChangeTitle(value);
  }, 500);

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

  //handle change field value
  const handleChangeTitle = async (value: string) => {
    const slugValue = toSlug(value);
    if (props.isUpdate) {
      form.setFieldsValue({ title: value });
      setDataValues((prev) => ({
        ...prev,
        title: value,
      }));
      setUpdateDataValues((prev) => ({
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
      setUpdateDataValues((prev) => ({
        ...prev,
        title: value,
        slug: slugValue,
      }));
    }
  };

  const handleSaveSlug = () => {
    form.validateFields(["slug"]).then((values) => {
      let newSlug = toSlug(values.slug.trim());
      if (!newSlug || newSlug == null) {
        const title = updateDataValues?.title;

        if (title) {
          form.setFieldsValue({ slug: toSlug(title) });
          setDataValues((prev) => ({
            ...prev,
            slug: toSlug(title),
          }));
          setUpdateDataValues((prev) => ({
            ...prev,
            slug: toSlug(title),
          }));
          setEditSlug(false);
          return;
        } else {
          return;
        }
      } else {
        setDataValues((prev) => ({
          ...prev,
          slug: newSlug,
        }));
        setUpdateDataValues((prev) => ({
          ...prev,
          slug: newSlug,
        }));
        form.setFieldsValue({ slug: newSlug });
        setEditSlug(false);
      }
    });
  };

  //handler event
  const handleDelete = async () => {};

  const handleSubmit = async () => {
    const request: UpdateBlogRequest = await form.getFieldsValue([
      "id",
      "title",
      "slug",
      "content",
      "status",
      "categories",
    ]);
    const tagList: TagDto[] = form.getFieldValue("tags");
    if (tagList) {
      request.tags = tagList.map((o) => o.name);
    }
    try {
      props.isUpdate
        ? await UpdateBlogHandler(request, updateDataValues?.id!)
        : await CreateBlogHandler(request).then((o) =>
            navigate(`/blogs/${o.id}`)
          );
      toast.success(t("CATEGORY_CREATE_SUCCESS"));
    } catch (error) {
      toast.error(`${t("CATEGORY_CREATE_FAIL")} ${error}`);
    }
  };

  return (
    <section>
      <Form form={form} layout="vertical">
        <Flex vertical gap={24}>
          <h2>
            {props.isUpdate ? t("EDIT_BLOG_HEADER") : t("ADD_BLOG_HEADER")}
          </h2>
          <Flex gap={24}>
            <Flex vertical gap={12} className="MainSideContent">
              <Flex vertical gap={12}>
                <Form.Item name="title" required>
                  <Input
                    type="text"
                    placeholder={t("ADD_BLOG_TITLE_PLACEHOLDER")}
                    onChange={(e) => debounced(e.target.value)}
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
                      {!editSlug
                        ? dataValues?.slug || updateDataValues?.slug
                        : ""}
                    </a>
                    {editSlug ? (
                      <>
                        <Form.Item name="slug">
                          <Input defaultValue={dataValues?.slug} />
                        </Form.Item>
                        <ButtonCustom onClick={handleSaveSlug}>
                          {t("SAVE")}
                        </ButtonCustom>
                        <TextCustom isLink onClick={() => setEditSlug(false)}>
                          {t("CANCEL")}
                        </TextCustom>
                      </>
                    ) : (
                      <ButtonCustom onClick={() => setEditSlug(true)}>
                        {t("EDIT")}
                      </ButtonCustom>
                    )}
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
                  isUpdate={props.isUpdate}
                  defaultStatus={props.isUpdate ? updateDataValues?.status : blogStatusEnums.Draft}
                />
                <ModuleCategory
                  form={form}
                  categories={categories ? categories : []}
                />
                <ModuleTag form={form} data={tags ? tags : []} />
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
