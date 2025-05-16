import "./ImageStorageContent.scss";
import { Card, Tabs, TabsProps } from "antd";
import { useTranslation } from "react-i18next";
import { UploadFile, MediaLibrary } from "./image-tab";
import { useRef } from "react";

interface ImageStorageContentProps {}

export const ImageStorageContent = ({}: ImageStorageContentProps) => {
  const { t } = useTranslation();
  const refetchMediaLibrary = useRef<() => void>(() => {});

  const items: TabsProps["items"] = [
    {
      label: t("UPLOAD_FILE"),
      key: "1",
      children: <UploadFile />,
    },
    {
      label: t("MEDIA_LIBRARY"),
      key: "2",
      children: (
        <MediaLibrary
          onRefetchReady={(refetchFn) => {
            refetchMediaLibrary.current = refetchFn;
          }}
        />
      ),
    },
  ];
  
  const handleTabChange = (key: string) => {
    if (key === "2") {
      refetchMediaLibrary.current?.(); // Refetch when switching to Media Library
    }
  };

  return (
    <div className="image__storage">
      <Card
        title="Add Media"
        className="image__storage__modal"
        onClick={(e) => e.stopPropagation()}
      >
        <Tabs
          defaultActiveKey="1"
          type="card"
          size="small"
          style={{ marginBottom: 32 }}
          items={items}
          onChange={handleTabChange}

        />
      </Card>
      <style>{`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
  `}</style>
    </div>
  );
};
