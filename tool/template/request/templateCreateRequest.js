function templateCreateRequest(fileName) {
  return `
 export interface Create${fileName}Request {
    title: string;

}
export interface Create${fileName}Response{
    id: string;
    title: string;

}
    `;
}
module.exports = templateCreateRequest