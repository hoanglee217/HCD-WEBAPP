import Column from "antd/es/table/Column";
import CategoryEdit from "./CategoryEdit";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import UseAction from "../../components/UI/UseAction";
import { useDrawer } from "../../store/DrawerContext";
import { TableCustom } from "../../components/UI/TableCustom";
import { IPaginationMeta } from "../../interfaces/IPagination";
import GetAllCategoryHandler from "../../components/api/management/category/GetAllCategoryHandler";
import { GetAllCategoryResponseItem } from "../../constants/management/category/GetAllCategoryRequest";
import { useModal } from "../../store/ModalContext";
import ModalDanger from "../../components/modal/ModalDanger";
import DeleteCategoryHandler from "../../components/api/management/category/DeleteCategoryHandler";
import { toast } from "react-toastify";
import CategoryAdd from "./CategoryAdd";

function Categories() {
  const { t } = useTranslation();
  const { openModal, closeModal } = useModal();
  const { openDrawer, closeDrawer } = useDrawer();
  const [data, setData] = useState<GetAllCategoryResponseItem[]>([]);
  const [pagination, setPagination] = useState<IPaginationMeta>({
    page: 1,
    pageSize: 10,
  });

  const fetchData = async (pagination: IPaginationMeta) => {
    try {
      const response = await GetAllCategoryHandler(pagination);
      const mapData = response.items;
      setData(mapData);
      setPagination(response.meta);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchData(pagination);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const processChildren = (items: any) => {
    return items.map((item: any) => ({
      ...item,
      children: item.children?.length
        ? processChildren(item.children)
        : undefined,
    }));
  };

  const handlerDelete = async (id: string) => {
    try {
      await DeleteCategoryHandler({ id: id });
      toast.success(t("CATEGORY_DELETE_SUCCESS"));
      closeModal();
      fetchData(pagination);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <section>
      <TableCustom
        dataSource={processChildren(data)}
        pageInfo={pagination}
        setPageInfo={setPagination}
        fetchData={fetchData}
        titleTableTransCode={t("CATEGORIES")}
        subTitleTable={t("CATEGORY_SUB_TITLE")}
        expandable={{
          expandRowByClick: true,
          defaultExpandAllRows: true,
        }}
        onAdd={() =>
          openDrawer(
            <CategoryAdd
              onSuccess={() => {
                closeDrawer();
                fetchData(pagination);
              }}
            />
          )
        }
      >
        <Column
          title={t("NAME")}
          dataIndex="Name"
          width={"90%"}
          key="Name"
          render={
            (_: any, record: GetAllCategoryResponseItem) => <p>{record.name}</p>
            // )
          }
        />
        <Column
          title={t("ACTION")}
          align="center"
          width={"10%"}
          key="Action"
          render={(_: any, record: GetAllCategoryResponseItem) =>
            record.id && (
              <UseAction
                showEdit
                showDelete
                onEdit={() =>
                  openDrawer(
                    <CategoryEdit
                      categoryId={record.id}
                      onSuccess={() => {
                        closeDrawer();
                        fetchData(pagination);
                      }}
                    />
                  )
                }
                onDelete={() =>
                  openModal(
                    <ModalDanger
                      title={t("CATEGORY_DELETE_TITLE")}
                      content={t("CATEGORY_DELETE_CONTENT", {
                        name: record.name,
                      })}
                      onCancel={closeModal}
                      onConfirm={() => handlerDelete(record.id)}
                    />
                  )
                }
              />
            )
          }
        />
      </TableCustom>
    </section>
  );
}

export default Categories;
