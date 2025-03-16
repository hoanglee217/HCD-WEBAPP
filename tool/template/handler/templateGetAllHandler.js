function templateGetAllHandler(fileName, tableName, location) {
  return `
import { GetAll${fileName}Response } from '../../../../constants/${location}/${fileName.toLowerCase()}/GetAll${fileName}Request';
import useEnv from '../../../../hook/useEnv';
import { IPaginationMeta } from '../../../../interfaces/IPagination';
import AxiosInstance from '../../../../utils/AxiosInstance';

async function GetAll${fileName}Handler(props: IPaginationMeta): Promise<GetAll${fileName}Response> {
  const apiUrl = useEnv.apiUrl;
  const response = await AxiosInstance.get(\`\${apiUrl}/api/${tableName}\`, { params: props });
  return response.data;
}

export default GetAll${fileName}Handler;
  `;
}
module.exports = templateGetAllHandler;
