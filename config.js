//GIFTED-MD//

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kkeizzah@gmail.com";
global.location = "Migori,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Keithkeizzah/KEITH-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.devs = "223 90765931";
global.sudo = process.env.SUDO || "254748387615";
global.owner = process.env.OWNER_NUMBER || "22390765931";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254748387615";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254748387615";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk45WTc4aWphdXd5bmViZEttT1E1cEtyQXpqUUd1WmhYaGxIYm0vYkJWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienNQa0gyMXRJZUNwNUxOSFpaMFdOaU1YUWhMZUF6QTVyanFNdk84eTBHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSDMwZU1zRWhWbENQTVdWb1R6QldSQisrRU9sQldRMmlMbThsTnBmeVZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOUWlraHprdWpQVmlXZzlSbHQ4WXhIUWx6aVNWUTFkM1UxTUFyZnA3MGt3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDaklSSnF0S3U0MXpMM1BGZmJQZ1AwSjBTSVZZRzB1Y3cxUzBqNm1ha2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQxZUU5ckdVUFp2TnYrZUVESHJTeU85Y3poYSs1Mi91bXdwcHVaWmV1RmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpPWEJXZHl6UmhsYnB2a091KzUrbzQzWHBLRVBrT3hGZFRZbmg3MFhsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWtjL2x4QjFQUHg2cEd6U29KTE10TzY4VzZQaUhCUWY0U0Y1YkxJdldXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitmNDJRdDlRSVdpYStXQVdKb0VuNFNzN1JrSTJGV0g1M3EvR2oyVytLdytDVEpDNGVsWDdkTDJUdDV6OXJQME1Oa1lJMDFSVTQ2M0JPRFhJQjJhdWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IjdoSitFTFpiR0dTaGl3eEowNjV6SXZTcTV0MWxick9DVjBKWHJkMjJBVU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFYOW80X2JLUU9XQlY5YUtEc21ORUEiLCJwaG9uZUlkIjoiNjIyNDczYmItMjExOC00ZTA2LWFjYTItZTM2ZGY5ZTRmYzAzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJnQUl0eWRzNy8rMWpuV1h5Ym9MK2h1VlVFMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRdmlLbG51R2oxRFUveUpLNWhPTno5aG4xb1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjg3QURORkYiLCJtZSI6eyJpZCI6IjIyMzkwNzY1OTMxOjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tTSjVPSUNFSmI2bzdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IngxYVRpWkVtOE53MHhvS1BvWUNXTU9PTVY3MVRveERFdHlXQzloeGhRaTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9iREY2NFZ4T1NKbzR2RHo4RGl0clpVVWJYb05rdDRNU3BXcjVvcThqcmtNR2FOY2pRYWFhVjk4MVRMcU9EKzdLc3dzUDZrOVlsbEgwVEp0RHJhbUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqS3UvTWlWUVljcldDa0doOEpRejE4dEg0U3pBOTNqNmZTdGNVUGo0WHBCN3NXcDR3MnFuTW5IM2w0Qm5uWDYyU3h6TC9rOXNNRW9YM0lwek1qdkVnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMzkwNzY1OTMxOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2RXazRtUkp2RGNOTWFDajZHQWxqRGpqRmU5VTZNUXhMY2xndlljWVVJdSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjM1MDg4NH0="
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "𝐌𝐈𝐆𝐇𝐓𝐘 𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  author: process.env.PACK_AUTHER || "Keith Tech",
  packname: process.env.PACK_NAME || "Keith-Md♥️",
  botname: process.env.BOT_NAME || "𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐊𝐄𝐈𝐓𝐇𝐊𝐄𝐈𝐙𝐙𝐀𝐇",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KEITH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
