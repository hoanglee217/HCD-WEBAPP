import React from "react";
import { Flex, Tag } from "antd";
import TextCustom from "../text-custom/TextCustom";

type TagItem = {
  key: string;
  label: string;
};

type ListTagProps = {
  data: TagItem[];
  color?:
    | "default"
    | "processing"
    | "success"
    | "error"
    | "warning"
    | "magenta"
    | "red"
    | "volcano"
    | "orange"
    | "gold"
    | "lime"
    | "green"
    | "cyan"
    | "blue"
    | "purple";
};

const ListTag: React.FC<ListTagProps> = ({ data, color }) => {
  return (
    <Flex wrap gap={8}>
      {data.map((tag) => (
        <Tag key={tag.key} color={color || "default"}>
          <TextCustom data={tag.label} ellipsis tooltip width={"100px"}/>
        </Tag>
      ))}
    </Flex>
  );
};

export default ListTag;
