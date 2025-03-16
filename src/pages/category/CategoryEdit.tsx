import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Button, Form, Input, TreeProps } from "antd";
import GetDetailCategoryHandler from "../../components/api/management/category/GetDetailCategoryHandler";
import { GetDetailCategoryResponse } from "../../constants/management/category/GetDetailCategoryRequest";
import { categoryEnums } from "../../constants/enums/categoryEnums";
import UpdateCategoryHandler from "../../components/api/management/category/UpdateCategoryHandler";
import TreeCheckCategory from "../../components/UI/Tree/TreeCheckCategory";

interface ICategoryProps {
  categoryId: string;
  onSuccess: () => void;
}

function CategoryEdit(props: ICategoryProps) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [categoryData, setCategoryData] = useState<GetDetailCategoryResponse>();
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategoryData = await GetDetailCategoryHandler({
          id: props.categoryId,
        });

        setCategoryData(responseCategoryData);

        form.setFieldsValue({
          name: responseCategoryData.name,
          parentId: responseCategoryData.parentId,
          categoryEnums: responseCategoryData.categoryEnums,
        });

        // Cập nhật checkedKeys sau khi nhận dữ liệu
        if (responseCategoryData.parentId) {
          const checkedKey = `${responseCategoryData.parentId}+${
            responseCategoryData.categoryEnums - 1
          }`;
          setCheckedKeys([checkedKey]);
        } else {
          setCheckedKeys([]);
        }
      } catch (error) {
        toast.error(`Error fetching category: ${error}`);
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchData();
  }, [form, props.categoryId]);

  const handleSubmit = async () => {
    if (!categoryData?.id) {
      toast.error("Category ID is undefined");
      return;
    }

    try {
      const parentId = form.getFieldValue("parentId");
      await UpdateCategoryHandler(
        {
          name: form.getFieldValue("name"),
          parentId: parentId?.length ? parentId : null,
          categoryEnums:
            parentId?.length !== 0 && parentId != null
              ? form.getFieldValue("categoryEnums")
              : categoryEnums.Primary,
        },
        categoryData.id
      );

      toast.success(t("UPDATE_SUCCESS"));
      props.onSuccess();
      // window.location.reload();
    } catch (error) {
      toast.error(`${t("CATEGORY_UPDATE_FAIL")} ${error}`);
    }
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeysValue, info) => {
    if (!info.node.key) return;
    const latestCheckedKey = info.node.key as string;
    const splitData = latestCheckedKey.split("+");

    if (splitData.length < 2) return;

    const parentId = splitData[0];
    const categoryLevel = Number(splitData[1]);

    if (categoryLevel === 3) {
      toast.error(t("CATEGORY_MAX_CHILDREN"));
      return;
    }

    const newCategoryEnums =
      categoryLevel === 2
        ? categoryEnums.Children_level_3
        : categoryLevel === 1
        ? categoryEnums.Children_level_2
        : categoryLevel === 0
        ? categoryEnums.Children_level_1
        : categoryEnums.Primary;

    form.setFieldsValue({
      parentId,
      categoryEnums: newCategoryEnums,
    });
    if (checkedKeys.includes(latestCheckedKey)) {
      setCheckedKeys([]);
      form.setFieldsValue({ parentId: [] }); // Sử dụng đúng tên phương thức setFieldsValue
    } else {
      setCheckedKeys([latestCheckedKey]);
      form.setFieldsValue({ parentId: latestCheckedKey.split("+")[0] }); // Chỉ set parentId
    }
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

        <Form.Item label={t("CATEGORY_PARENT")} name="parentId">
          {!loading && categoryData && (
            <TreeCheckCategory
              onCheck={onCheck}
              checkedKeys={checkedKeys}
              checkStrictly
              showLine
              disabled={categoryData && categoryData.children.length > 0}
              excludeId={categoryData?.id}
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

export default CategoryEdit;
