import { Card } from "antd";
import "./CardCustom.scss";
import { CardSize } from "antd/es/card/Card";
import { CSSProperties, ReactNode } from "react";

interface CardCustomProps {
  data?: string;
  children?: ReactNode;
  title?: string;
  size?: CardSize;
  styled?: CSSProperties;
}

const CardCustom = ({
  data,
  children,
  title,
  size,
  styled,
}: CardCustomProps) => {
  const content = children ?? data ?? "";

  return (
    <Card title={title} size={size} style={styled}>
      {content}
    </Card>
  );
};

export default CardCustom;
