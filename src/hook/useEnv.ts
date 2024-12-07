interface envProps{
    apiUrl: string;
}

const useEnv : envProps = {
    apiUrl: process.env.REACT_APP_API_URL as string
}
export default useEnv;