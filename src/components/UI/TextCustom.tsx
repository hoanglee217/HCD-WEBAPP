import "./TextCustom.scss";
import { Typography } from "antd";
import { CSSProperties, ReactNode } from "react";

const { Text } = Typography;

interface TextCustomProps {
  data?: string;
  children?: ReactNode;
  ellipsis?: boolean;
  tooltip?: boolean;
  width?: number | string;
  styled?: CSSProperties | undefined;
  onClick?: () => void;
  isDeleteLink?: boolean;
  isDescription?: boolean;
  isLink?: boolean;
}

const TextCustom = ({
  data,
  children,
  ellipsis = false,
  tooltip = false,
  width = 200,
  styled,
  onClick,
  isDeleteLink,
  isDescription,
  isLink,
}: TextCustomProps) => {
  const content = children ?? data ?? "";

  return (
    <Text
      ellipsis={ellipsis ? { tooltip: tooltip ? content : undefined } : false}
      style={{
        maxWidth: width,
        display: "inline-block",
        fontSize: 13,
        ...styled,
      }}
      onClick={onClick}
      className={` 
        ${isDeleteLink ? "textDelete" : ""} 
        ${isDescription ? "textDescription" : ""} 
        ${isLink ? "textLink" : ""}
      `}
    >
      {content}
    </Text>
  );
};

export default TextCustom;
