function templateUpdateHandler(fileName, tableName, location) {
  return `
import { Update${fileName}Request, Update${fileName}Response } from '../../../../constants/${location}/${fileName.toLowerCase()}/Update${fileName}Request';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function Update${fileName}Handler(props: Update${fileName}Request, id: string): Promise<Update${fileName}Response> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.put(\`\${apiUrl}/api/${tableName}/\${id}\`, props);
  return response.data;
}

export default Update${fileName}Handler;
  `;
}
module.exports = templateUpdateHandler; // ✅ Sử dụng module.exports thay vì export default