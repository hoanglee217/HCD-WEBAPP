import { Card, Flex, TreeProps } from "antd";
import { useTranslation } from "react-i18next";
import TreeCheckCategory from "../Tree/TreeCheckCategory";
import { useEffect, useRef, useState } from "react";
import type { FormInstance } from "antd/es/form";
import { useDrawer } from "../../../store/DrawerContext";
import CategoryAdd from "../../../pages/category/CategoryAdd";
import { CategoryDto } from "../../../constants/management/blog/GetAllBlogRequest";
import TextCustom from "../TextCustom";
import CardCustom from "../card/CardCustom";

interface ModuleCategoryProps {
  form: FormInstance;
  categories: CategoryDto[];
}

const ModuleCategory = ({ form, categories }: ModuleCategoryProps) => {
  const { t } = useTranslation();
  const { openDrawer, closeDrawer } = useDrawer();
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);

  useEffect(() => {
    const key = categories.map((o) => `${o.id}+${o.categoryEnums}`);
    setCheckedKeys(key);
  }, [categories]);

  const treeRef = useRef<{ fetchData: () => void } | null>(null);

  const onCheck: TreeProps["onCheck"] = (checked, info) => {
    const categories: string[] = [];
    setCheckedKeys(Array.isArray(checked) ? checked : checked.checked);

    // Kiểm tra nếu checked là mảng
    const checkedKeysArray = Array.isArray(checked) ? checked : checked.checked;
    // Lấy phần tử đầu tiên nếu có
    checkedKeysArray.forEach((item) => {
      const value = String(item).split("+");
      categories.push(value[0]);
    });
    form.setFieldsValue({ categories });
  };

  return (
    <CardCustom
      size="small"
      title={t("CATEGORIES")}
      styled={{ width: 280, border: "1px solid #dadada" }}
    >
      <Card bodyStyle={{ padding: 10, border: "1px solid #dadada" }}>
        <TreeCheckCategory
          height={233}
          ref={treeRef}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          checkStrictly
        />
      </Card>
      <Flex
        justify="flex-start"
        style={{
          marginTop: 12,
          paddingTop: 12,
          borderTop: "1px solid #dadada",
        }}
      >
        <TextCustom
          isLink
          onClick={() =>
            openDrawer(
              <CategoryAdd
                onSuccess={() => {
                  closeDrawer();
                  treeRef.current?.fetchData();
                }}
              />
            )
          }
        >
          + {t("CATEGORY_ADD_NEW")}
        </TextCustom>
      </Flex>
    </CardCustom>
  );
};

export default ModuleCategory;
