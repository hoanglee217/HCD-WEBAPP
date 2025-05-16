import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import UploadImageHandler from "../../../api/system/image/UploadImageHandler";

export const UploadFile = () => {
  const { Dragger } = Upload;
  const props: UploadProps = {
    name: "file",
    multiple: true,
    customRequest: async ({ file, onSuccess, onError }) => {
      try {
        const response = await UploadImageHandler({ file: file as File });
        onSuccess?.(response);
        message.success(`${file} file uploaded successfully.`);
      } catch (error: any) {
        onError?.(error);
        message.error(`${file} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  );
};
