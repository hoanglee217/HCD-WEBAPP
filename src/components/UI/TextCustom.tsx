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
}

const TextCustom = ({
  data,
  children,
  ellipsis = false,
  tooltip = false,
  width = 200,
  styled,
}: TextCustomProps) => {
  const content = children ?? data ?? "";

  return (
    <Text
      ellipsis={ellipsis ? { tooltip: tooltip ? content : undefined } : false}
      style={{
        maxWidth: width,
        display: "inline-block",
        ...styled,
      }}
    >
      {content}
    </Text>
  );
};

export default TextCustom;
