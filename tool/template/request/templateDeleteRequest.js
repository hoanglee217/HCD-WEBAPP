function templateDeleteRequest(fileName) {
  return `
export interface Delete${fileName}Request {
    id: string;
}
export interface Delete${fileName}Response {
}
  `;
}
module.exports = templateDeleteRequest