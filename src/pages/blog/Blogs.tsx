import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import UseAction from "../../components/UI/UseAction";
import { TableCustom } from "../../components/UI/TableCustom";
import { IPaginationMeta } from "../../interfaces/IPagination";
import { useModal } from "../../store/ModalContext";
import ModalDanger from "../../components/modal/ModalDanger";
import { toast } from "react-toastify";
import { GetAllBlogResponseItem } from "../../constants/management/blog/GetAllBlogRequest";
import GetAllBlogHandler from "../../components/api/management/blog/GetAllBlogHandler";
import DeleteBlogHandler from "../../components/api/management/blog/DeleteBlogHandler";
import ListTag from "../../components/UI/tag/ListTag";
import { useNavigate } from "react-router-dom";
import { blogStatusEnums } from "../../constants/enums/blogStatusEnums";

function Blogs() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { openModal, closeModal } = useModal();
  const [blogs, setBlogs] = useState<GetAllBlogResponseItem[]>([]);
  const [pagination, setPagination] = useState<IPaginationMeta>({
    page: 1,
    pageSize: 10,
  });

  const fetchData = async (pagination: IPaginationMeta) => {
    try {
      const blogs = await GetAllBlogHandler(pagination);
      const mapData = blogs.items;
      setBlogs(mapData);
      setPagination(blogs.meta);
    } catch (error) {
      console.error("Error fetching blogs:", error);
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
      await DeleteBlogHandler({ id: id });
      toast.success(t("CATEGORY_DELETE_SUCCESS"));
      closeModal();
      fetchData(pagination);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <section>
      <TableCustom
        dataSource={processChildren(blogs)}
        pageInfo={pagination}
        setPageInfo={setPagination}
        fetchData={fetchData}
        titleTableTransCode={t("BLOGS")}
        subTitleTable={t("BLOG_SUB_TITLE")}
        expandable={{
          expandRowByClick: true,
          defaultExpandAllRows: true,
        }}
        onAdd={() => navigate("/add-blog")}
      >
        <Column
          title={t("TITLE")}
          dataIndex="Title"
          key="Title"
          render={(_: any, record: GetAllBlogResponseItem) => (
            <p>
              {record.title}
              {record.status === blogStatusEnums.Draft && <b> - Draft</b>}
            </p>
          )}
        />
        <Column
          title={t("SLUG")}
          dataIndex="Slug"
          key="Slug"
          render={(_: any, record: GetAllBlogResponseItem) => (
            <p>{record.slug}</p>
          )}
        />
        <Column
          title={t("AUTHOR")}
          dataIndex="Author"
          key="Author"
          render={(_: any, record: GetAllBlogResponseItem) => (
            <p>{`${record.user.firstName} ${record.user.lastName}`}</p>
          )}
        />
        <Column
          title={t("CATEGORY")}
          dataIndex="Category"
          key="Category"
          render={(_: any, record: GetAllBlogResponseItem) => (
            <ListTag
              data={
                record.blogCategories?.map((o) => ({
                  key: o.category?.id || "",
                  label: o.category?.name || "Unknown",
                })) || []
              }
            />
          )}
        />
        <Column
          title={t("RATING")}
          dataIndex="Rating"
          key="Rating"
          render={(_: any, record: GetAllBlogResponseItem) => (
            <p>{record.rating}</p>
          )}
        />

        <Column
          title={t("ACTION")}
          align="center"
          key="Action"
          render={(_: any, record: GetAllBlogResponseItem) =>
            record.id && (
              <UseAction
                showEdit
                showDelete
                onEdit={() => navigate(`/edit-blog/${record.id}`)}
                onDelete={() =>
                  openModal(
                    <ModalDanger
                      title={t("BLOG_DELETE_TITLE")}
                      content={t("BLOG_DELETE_CONTENT")}
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

export default Blogs;
