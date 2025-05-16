import { Card, Flex } from "antd";
import "./CardCustom.scss";
import { CardSize } from "antd/es/card/Card";
import { CSSProperties, ReactNode } from "react";

interface CardCustomProps {
  data?: string;
  children?: ReactNode;
  title?: string;
  size?: CardSize;
  styled?: CSSProperties;
  footerJustify?: string;
  footer?: ReactNode;
}

const CardCustom = ({
  data,
  children,
  title,
  size,
  styled,
  footer,
  footerJustify,
}: CardCustomProps) => {
  const content = children ?? data ?? "";

  return (
    <Card title={title} size={size} style={styled}>
      {content}
      <Flex
        className="cardFooter"
        justify={footerJustify}
        align="center"
      >
        {footer}
      </Flex>
    </Card>
  );
};

export default CardCustom;
