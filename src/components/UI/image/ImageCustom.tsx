import "./ImageCustom.scss";
import { Image } from "antd";

interface ImageCustomProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  styled?: React.CSSProperties;
  onClick?: () => void;
  shape?: "circle" | "square" | "round";
  preview?: boolean;
}

const ImageCustom = (props: ImageCustomProps) => {
  const {
    src,
    alt,
    width = 200,
    height = 200,
    className,
    styled,
    shape = "square",
    onClick,
    preview = false,
  } = props;
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      style={styled}
      preview={preview}
    />
  );
};

export default ImageCustom;
