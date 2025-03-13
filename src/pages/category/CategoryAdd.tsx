import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Button, Form, Input, Tree, TreeDataNode, TreeProps } from "antd";
import GetAllCategoryHandler from "../../components/api/management/category/GetAllCategoryHandler";
import { GetAllCategoryResponseItem } from "../../constants/management/category/GetAllCategoryRequest";
import { categoryEnums } from "../../constants/enums/categoryEnums";
import CreateCategoryHandler from "../../components/api/management/category/CreateCategoryHandler";

interface ICategoryProps {
  onSuccess: () => void;
}

function CategoryAdd(props: ICategoryProps) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [categories, setCategories] = useState<GetAllCategoryResponseItem[]>();
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);

  const fetchData = async () => {
    try {
      const responseCategories = await GetAllCategoryHandler({
        pageSize: 1000,
      });
      setCategories(responseCategories.items);
    } catch (error) {
      toast.error(`Error fetching categories: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    try {
      const parentId = form.getFieldValue("parentId");
      await CreateCategoryHandler(
        {
          name: form.getFieldValue("name"),
          parentId: parentId?.length ? parentId : null,
          categoryEnums:
            parentId?.length !== 0 && parentId != null
              ? form.getFieldValue("categoryEnums")
              : categoryEnums.Primary,
        },
      );

      toast.success(t("CATEGORY_CREATE_SUCCESS"));
      props.onSuccess();
      // window.location.reload();
    } catch (error) {
      toast.error(`${t("CATEGORY_CREATE_FAIL")} ${error}`);
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

  const buildCategoryTree = (
    data: GetAllCategoryResponseItem[],
  ): TreeDataNode[] => {
    return data
      .map((o) => {
        const key = `${o.id}+${o.categoryEnums}`;
        return {
          key,
          title: o.name,
          disableCheckbox: o.categoryEnums === categoryEnums.Children_level_3,
          children: buildCategoryTree(o.children),
        };
      });
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

        <Form.Item label={t("CATEGORY_PARENT")} name="parentId">
          {categories && (
            <Tree
              showLine
              checkable
              checkStrictly
              treeData={buildCategoryTree(categories)}
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

export default CategoryAdd;
