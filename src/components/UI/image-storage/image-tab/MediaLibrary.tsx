import "./MediaLibrary.scss";
import { Card, Col, Layout, Pagination, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { IPaginationMeta } from "../../../../interfaces/IPagination";
import GetAllImageHandler from "../../../api/system/image/GetAllImageHandler";
import { useEffect, useState } from "react";
import { GetAllImageResponseItem } from "../../../../constants/system/image/GetAllImageRequest";
import ImageCustom from "../../image/ImageCustom";

interface MediaLibraryProps {
  onRefetchReady?: (refetchFn: () => void) => void;
}

export const MediaLibrary = ({ onRefetchReady }: MediaLibraryProps) => {
  const [images, setImages] = useState<GetAllImageResponseItem[]>([]);
  const [imageSelected, setImageSelected] =
    useState<GetAllImageResponseItem | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [pagination, setPagination] = useState<IPaginationMeta>({
    page: 1,
    pageSize: 40,
  });

  const fetchData = async (pagination: IPaginationMeta) => {
    try {
      const blogs = await GetAllImageHandler(pagination);
      const mapData = blogs.items;
      setImages(mapData);
      setPagination(blogs.meta);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    fetchData(pagination);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Register the refetch callback only once
  useEffect(() => {
    onRefetchReady?.(() => fetchData(pagination));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onRefetchReady]);

  const handlePageChange = (
    newPage?: number,
    newPageSize?: number,
    newSearch?: string
  ) => {
    const newPageInfo = {
      ...pagination,
      search: newSearch,
      page: newPage ?? 1,
      pageSize: newPageSize ?? 10,
    };
    setPagination?.(newPageInfo);
    fetchData?.(newPageInfo);
  };

  return (
    <Layout>
      <Content>
        <Row className="library-bg" gutter={[24, 24]}>
          {images.map((o) => (
            <Col
              className="gutter-row"
              xxl={4}
              xl={6}
              lg={8}
              md={12}
              sm={12}
              xs={24}
              key={o.id}
            >
              <Card className="images-box">
                <ImageCustom
                  src={o.url}
                  alt={o.title}
                  width={"100%"}
                  height={"auto"}
                  className="image-content"
                  onClick={() => {
                    setImageSelected(o);
                    const img = new Image();
                    img.onload = () => {
                      setDimensions({
                        width: img.naturalWidth,
                        height: img.naturalHeight,
                      });
                    };
                    img.onerror = () => {
                      console.error("Lỗi khi tải ảnh");
                    };
                    img.src = o.url || "";
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination
          align="end"
          showSizeChanger
          onChange={handlePageChange}
          className="custom-pagination"
          current={pagination.page}
          total={pagination.totalItems}
          pageSize={pagination.pageSize}
          showTotal={(total) => `Total ${total} items`}
        />{" "}
      </Content>
      <Sider width="25%" theme="light">
        <Card className="image-detail-box">
          {imageSelected ? (
            <>
              <h3>Attachment Details</h3>
              <div className="image-preview">
                <img
                  src={imageSelected.url}
                  height={200}
                  width="fit-content"
                  alt={imageSelected.altText}
                />
              </div>
              <div className="image-detail">
                <p>{imageSelected.fileName}</p>
                <p>{imageSelected.createAt}</p>
                <p>{(imageSelected.size / 1024).toFixed(2)} KB</p>
                <p>
                  {dimensions.height} by {dimensions.width} pixels
                </p>
              </div>
            </>
          ) : (
            "no image selected"
          )}
        </Card>
      </Sider>
    </Layout>
  );
};
