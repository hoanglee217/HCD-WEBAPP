const templateCreateHandler = (fileName, tableName, location) => {
  return `
  import { Create${fileName}Request, Create${fileName}Response } from '../../../../constants/${location}/${fileName.toLowerCase()}/Create${fileName}Request';
  import useEnv from '../../../../hook/useEnv';
  import AxiosInstance from '../../../../utils/AxiosInstance';
  
  async function Create${fileName}Handler(props: Create${fileName}Request): Promise<Create${fileName}Response> {
    const apiUrl = useEnv.apiUrl;
    const response = await AxiosInstance.post(\`\${apiUrl}/api/${tableName}\`, props);
    return response.data;
  }
  
  export default Create${fileName}Handler;
    `;
};
module.exports = templateCreateHandler;