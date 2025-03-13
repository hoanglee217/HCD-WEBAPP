import React from "react";
import { Tag, Tooltip } from "antd";
import TextCustom from "../TextCustom";

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
    | "geekblue"
    | "purple";
};

const ListTag: React.FC<ListTagProps> = ({ data, color }) => {
  return (
    <div>
      {data.map((tag) => (
        <Tag key={tag.key} color={color || "default"}>
          <TextCustom data={tag.label} ellipsis tooltip width={"100px"}/>
        </Tag>
      ))}
    </div>
  );
};

export default ListTag;
