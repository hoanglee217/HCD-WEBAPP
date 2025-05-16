// @flow
import { FormInstance } from "antd";
import { useModal } from "../../../store/ModalContext";
import ButtonCustom from "../button/ButtonCustom";
import TextCustom from "../text-custom/TextCustom";
import { ImageStorageContent } from "./ImageStorageContent";
import { CameraOutlined } from "@ant-design/icons";

type ImageStorageProps = {
  form?: FormInstance;
  title: string;
  type?: "button" | "link";
  onSubmit?: () => void;
};

function ImageStorage({ title, type = "button", onSubmit }: ImageStorageProps) {
  const { openModal } = useModal();

  return type === "button" ? (
    <ButtonCustom
      //   onClick={() => openModal(<ImageStorageContent />)}
      onClick={onSubmit}
      icon={<CameraOutlined />}
      style={{ width: "max-content" }}
    >
      {title}
    </ButtonCustom>
  ) : (
    <TextCustom
      onClick={() =>
        openModal({
          content: <ImageStorageContent />,
          width: "95vw",
          height: "95vh",
        })
      }
      isLink
    >
      {title}
    </TextCustom>
  );
}
export default ImageStorage;
