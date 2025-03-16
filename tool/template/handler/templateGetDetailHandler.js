function templateGetDetailHandler(fileName, tableName, location) {
  return `
import { GetDetail${fileName}Request, GetDetail${fileName}Response } from '../../../../constants/${location}/${fileName.toLowerCase()}/GetDetail${fileName}Request';
import useEnv from '../../../../hook/useEnv';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetDetail${fileName}Handler(props: GetDetail${fileName}Request): Promise<GetDetail${fileName}Response> {
  const apiUrl = useEnv.apiUrl;
  const id = props.id;
  const response = await AxiosInstance.get(\`\${apiUrl}/api/${tableName}/\${id}\`);
  return response.data;
}

export default GetDetail${fileName}Handler;
  `;
}
module.exports = templateGetDetailHandler;
