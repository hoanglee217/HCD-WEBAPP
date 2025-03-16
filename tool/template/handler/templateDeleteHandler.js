function templateDeleteHandler(fileName, tableName, location) {
  return `
import { Delete${fileName}Request, Delete${fileName}Response } from '../../../../constants/${location}/${fileName.toLowerCase()}/Delete${fileName}Request';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function Delete${fileName}Handler(props: Delete${fileName}Request): Promise<Delete${fileName}Response> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.delete(\`\${apiUrl}/api/${tableName}/\${id}\`); 
  return response.data;
}

export default Delete${fileName}Handler;
  `;
}
module.exports = templateDeleteHandler;
