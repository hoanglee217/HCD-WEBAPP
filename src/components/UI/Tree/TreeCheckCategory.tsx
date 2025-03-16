import { Tree, TreeDataNode, TreeProps } from "antd";
import { GetAllCategoryResponseItem } from "../../../constants/management/category/GetAllCategoryRequest";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import GetAllCategoryHandler from "../../api/management/category/GetAllCategoryHandler";
import { toast } from "react-toastify";
import { categoryEnums } from "../../../constants/enums/categoryEnums";

interface TreeCheckCategoryProps {
  onCheck: TreeProps["onCheck"];
  checkedKeys: React.Key[];
  checkStrictly?: boolean;
  showLine?: boolean;
  height?: number;
  excludeId?: string;
  disabled?: boolean;
}

const TreeCheckCategory = forwardRef((props: TreeCheckCategoryProps, ref) => {
  const [categories, setCategories] = useState<GetAllCategoryResponseItem[]>();

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
  useImperativeHandle(ref, () => ({ fetchData }));

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buildCategoryTree = (
    data: GetAllCategoryResponseItem[],
    excludeId?: string
  ): TreeDataNode[] => {
    return data
      .filter((o) => o.id !== excludeId)
      .map((o) => {
        const key = `${o.id}+${o.categoryEnums}`;
        return {
          key,
          title: o.name,
          disableCheckbox: o.categoryEnums === categoryEnums.Children_level_3,
          children: buildCategoryTree(o.children, excludeId),
        };
      });
  };

  return (
    <Tree
      showLine={props.showLine}
      checkable
      checkStrictly={props.checkStrictly}
      height={props.height}
      treeData={
        categories ? buildCategoryTree(categories, props.excludeId) : []
      }
      onCheck={props.onCheck}
      checkedKeys={props.checkedKeys}
      disabled={props.disabled}
    />
  );
});

export default TreeCheckCategory;
