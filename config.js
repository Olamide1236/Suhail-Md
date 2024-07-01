const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_30_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICA5MixcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2ZlE5Y01scnJScWhQcGtDT0U3cXN3NDFOYnFST0dGSjQ0TmJ5ZVBLVFFjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjI2MTg3ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOEI5Q0VDRjAwOTQ1MkYwRDNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg3NjU5N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjI2MTg3ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRjlEQUFCMTlGNjgwREJFQjU4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg3NjU5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjI2MTg3ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMzU3QkJBODc5MEU4QkI5RTg0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg3NjYwMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3ZFg5b0UyT1Q2aTVEY0R3ZGcyQlJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg0YzFhYWY5LWMwMzgtNGZhMS1hYmJkLWU4YzBjZDkxYTMxM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAxNDAsXG4gICAgICAxMyxcbiAgICAgIDk0LFxuICAgICAgMTE1LFxuICAgICAgODUsXG4gICAgICAyMjgsXG4gICAgICA3NCxcbiAgICAgIDEzNCxcbiAgICAgIDE4MyxcbiAgICAgIDE4OCxcbiAgICAgIDE2OCxcbiAgICAgIDQwLFxuICAgICAgMjI0LFxuICAgICAgMTEzLFxuICAgICAgMTY3LFxuICAgICAgOTQsXG4gICAgICAxNDMsXG4gICAgICA0NixcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDIwNixcbiAgICAgIDgzLFxuICAgICAgNzUsXG4gICAgICAxMDAsXG4gICAgICAxMjIsXG4gICAgICA1LFxuICAgICAgMTk2LFxuICAgICAgMTgwLFxuICAgICAgODEsXG4gICAgICA4MCxcbiAgICAgIDU4LFxuICAgICAgMjUwLFxuICAgICAgMTcwLFxuICAgICAgMTYxLFxuICAgICAgMTQxLFxuICAgICAgMTQ0LFxuICAgICAgMTI2LFxuICAgICAgMTA1LFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0FHWkFLWDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjI2MTg3ODc6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPTEFNSElERVwiLFxuICAgIFwibGlkXCI6IFwiNTA2MzM2ODgyNDgzOTI6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlNoeUx3Q0VQRDNqTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzdGtEc1Y3a3puZ0dxN1lTazZzS2p3QW0vZUEvTWtLTXBmbko0SmZ3V1JBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1aeDFTZTZ5UUZXUEgxUC96cFA3MzI3YW5hWWgyRjZiNk91WFFyYkJqSUZMMTc1c05xc1NnQXMxRUVpTkJCZlhXb05VVDd3WmJPeFNieERZcjNtUGhRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9Ga2xlOGlsemhSbXlVSkdtZ0JjYnNYMHdEK1RtNTBvc3ZVWVkxM1pidzd4L0xTa0xUWCtPdWwrckJ5czVCU0J2clNaZXArbWZSVm9XOU4rMDJCcmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjI2MTg3ODc6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NzY1OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFITFhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhMWC5qc29uIjogIntcImtleURhdGFcIjpcIjkxWVUyWnlHUkkxRGtES2MxVEtnbW44aERZQllMQXh2ZmdDQXdyb3hKOXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjYzODgzOTI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk4NzY1OTYyNDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
