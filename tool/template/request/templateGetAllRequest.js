function templateGetAllRequest(fileName) {
  return `
import { IPagination } from "../../../interfaces/IPagination";

export interface GetAll${fileName}Request {

}
export interface GetAll${fileName}ResponseItem {
    id: string;
    title: string;
}
export type GetAll${fileName}Response = IPagination<GetAll${fileName}ResponseItem>;
  `;
}
module.exports = templateGetAllRequest