function templateGetDetailRequest(fileName) {
  return `
export interface GetDetail${fileName}Request {
    id: string;
}
export interface GetDetail${fileName}Response {
    id: string;
    title: string;
}
  `;
}
module.exports = templateGetDetailRequest