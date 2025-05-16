import { Card, TreeProps } from "antd";
import TextCustom from "../text-custom/TextCustom";
import CardCustom from "../card/CardCustom";
import { useTranslation } from "react-i18next";
import type { FormInstance } from "antd/es/form";
import { useEffect, useRef, useState } from "react";
import { useDrawer } from "../../../store/DrawerContext";
import TreeCheckCategory from "../Tree/TreeCheckCategory";
import CategoryAdd from "../../../pages/category/CategoryAdd";
import { CategoryDto } from "../../../constants/management/blog/GetAllBlogRequest";

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
    const cateList: string[] = [];
    setCheckedKeys(Array.isArray(checked) ? checked : checked.checked);

    // Kiểm tra nếu checked là mảng
    const checkedKeysArray = Array.isArray(checked) ? checked : checked.checked;
    // Lấy phần tử đầu tiên nếu có
    checkedKeysArray.forEach((item) => {
      const value = String(item).split("+");
      cateList.push(value[0]);
    });
    form.setFieldsValue({ categories: cateList });
  };

  return (
    <CardCustom
      size="small"
      title={t("CATEGORIES")}
      styled={{ width: 280 }}
      footerJustify="flex-start"
      footer={
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
      }
    >
      <Card bodyStyle={{ padding: 10 }}>
        <TreeCheckCategory
          height={233}
          ref={treeRef}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          checkStrictly
        />
      </Card>
    </CardCustom>
  );
};

export default ModuleCategory;
