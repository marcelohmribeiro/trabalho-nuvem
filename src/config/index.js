import Parse from "parse";

export const BACK4APP_CONFIG = {
  applicationId: process.env.NEXT_PUBLIC_APPLICATION_ID,
  javascriptKey: process.env.NEXT_PUBLIC_JAVASCRIPT_KEY,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
};

Parse.initialize(BACK4APP_CONFIG.applicationId, BACK4APP_CONFIG.javascriptKey);
Parse.serverURL = BACK4APP_CONFIG.serverURL;

export default Parse;
