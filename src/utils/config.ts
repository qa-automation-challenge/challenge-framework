import dotenv from 'dotenv';

dotenv.config();

export const config = {
  apiBaseUrl: process.env.API_BASE_URL || '',
  reqresApiKey: process.env.REQRES_API_KEY || '',
  uiBaseUrl: process.env.UI_BASE_URL || '',
  username: process.env.USERNAME_DEMO || '',
  password: process.env.PASSWORD || '',
};
