const baseURL = process.env.REACT_APP_BASE_URL;
export const loginRoute = `${baseURL}/api/auth/login`;
export const registerRoute = `${baseURL}/api/auth/register`;
export const sendMessageRoute = `${baseURL}/api/messages/addmsg`;
export const recieveMessageRoute = `${baseURL}/api/messages/getmsg`;
export const userRoute = `${baseURL}/api/user`;
export const volunteersRoute = `${baseURL}/api/volunteers`;
