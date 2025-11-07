require("dotenv").config();

const BACK4APP_CONFIG = {
  applicationId: process.env.APPLICATION_ID,
  javascriptKey: process.env.JAVASCRIPT_KEY,
  serverURL: process.env.SERVER_URL,
};

Parse.initialize(BACK4APP_CONFIG.applicationId, BACK4APP_CONFIG.javascriptKey);
Parse.serverURL = BACK4APP_CONFIG.serverURL;
