function templateUpdateRequest(fileName) {
  return `
import { IPagination } from "../../../interfaces/IPagination";

export interface Update${fileName}Request {
    id: string;
    title?: string;
}

export interface Update${fileName}ResponseItem {
    id: string;
    title: string;
}

export type Update${fileName}Response = IPagination<Update${fileName}ResponseItem>;
  `;
}
module.exports = templateUpdateRequest