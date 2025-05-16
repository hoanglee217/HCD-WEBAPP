import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import UseAction from "../../components/UI/UseAction";
import { TableCustom } from "../../components/UI/table/TableCustom";
import { IPaginationMeta } from "../../interfaces/IPagination";
import { useModal } from "../../store/ModalContext";
import ModalDanger from "../../components/modal/ModalDanger";
import { toast } from "react-toastify";
import {
  BlogTags,
  GetAllTagResponseItem,
} from "../../constants/management/tag/GetAllTagRequest";
import GetAllTagHandler from "../../components/api/management/tag/GetAllTagHandler";
import { useDrawer } from "../../store/DrawerContext";
import TagAdd from "./TagAdd";
import TagEdit from "./TagEdit";

function Tags() {
  const { t } = useTranslation();
  const { openDrawer, closeDrawer } = useDrawer();
  const { openModal, closeModal } = useModal();
  const [tags, setTags] = useState<GetAllTagResponseItem[]>([]);
  const [pagination, setPagination] = useState<IPaginationMeta>({
    page: 1,
    pageSize: 10,
  });

  const fetchData = async (pagination: IPaginationMeta) => {
    try {
      const tags = await GetAllTagHandler(pagination);
      const mapData = tags.items;
      setTags(mapData);
      setPagination(tags.meta);
    } catch (error) {
      console.error("Error fetching tags:", error);
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

  const handlerDelete = async (id: string, blogTags?: BlogTags) => {
    console.log(blogTags);
    try {
      // await DeleteTagHandler({ id: id });
      toast.success(t("DELETE_SUCCESS", { name: "Tag" }));
      closeModal();
      fetchData(pagination);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  return (
    <section>
      <TableCustom
        dataSource={processChildren(tags)}
        pageInfo={pagination}
        setPageInfo={setPagination}
        fetchData={fetchData}
        titleTableTransCode={t("TAGS")}
        subTitleTable={t("TAG_SUB_TITLE")}
        expandable={{
          expandRowByClick: true,
          defaultExpandAllRows: true,
        }}
        onAdd={() => {
          openDrawer(
            <TagAdd
              onSuccess={() => {
                closeDrawer();
                fetchData(pagination);
              }}
            />
          );
        }}
      >
        <Column
          title={t("NAME")}
          dataIndex="Name"
          key="Name"
          render={(_: any, record: GetAllTagResponseItem) => (
            <p>{record.name}</p>
          )}
        />
        <Column
          title={t("ACTION")}
          align="center"
          key="Action"
          render={(_: any, record: GetAllTagResponseItem) =>
            record.id && (
              <UseAction
                showEdit
                showDelete
                onEdit={() =>
                  openDrawer(
                    <TagEdit
                      tagId={record.id}
                      onSuccess={() => {
                        closeDrawer();
                        fetchData(pagination);
                      }}
                    />
                  )
                }
                onDelete={() =>
                  openModal({
                    content: (
                      <ModalDanger
                        title={t("BLOG_DELETE_TITLE")}
                        content={t("BLOG_DELETE_CONTENT")}
                        onCancel={closeModal}
                        onConfirm={() =>
                          handlerDelete(record.id, record.blogTags)
                        }
                      />
                    ),
                  })
                }
              />
            )
          }
        />
      </TableCustom>
    </section>
  );
}

export default Tags;
