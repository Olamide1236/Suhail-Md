const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://hndrxx333:hndrxx@hndrxx.vkqrre8.mongodb.net/?retryWrites=true&w=majority"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_04_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5LFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAwLFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTMxLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR01QL01lOVNyRlZmY3ZGYjNBR2luSXRSelVqZm8vUWRTdVZCaEp2M0x6MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ5MTkyNTkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUE0M0MzQkJDN0QxQjZDMUUzM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MjIyNzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ5MTkyNTkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTc1OTQ4RDA4RTRDNTU1NDY0OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MjIyNzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ5MTkyNTkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUE3NUQxM0Q2MEU1NkJDNUQwRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MjIyODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVEN0dVFzWTFRSHFXZXVBOE15alJNQVwiLFxuICBcInBob25lSWRcIjogXCI2MDY2ZmQwZS04MWM0LTRiMTAtOWU3MS1hMGM3ZmVlY2FhOWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICA4MixcbiAgICAgIDExMSxcbiAgICAgIDM0LFxuICAgICAgNzMsXG4gICAgICAyMjIsXG4gICAgICAyOCxcbiAgICAgIDIxNyxcbiAgICAgIDkwLFxuICAgICAgMjM5LFxuICAgICAgMjM2LFxuICAgICAgNTIsXG4gICAgICAxNSxcbiAgICAgIDIxOCxcbiAgICAgIDIxMCxcbiAgICAgIDExNCxcbiAgICAgIDE5NixcbiAgICAgIDE2LFxuICAgICAgMTIzLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMjI1LFxuICAgICAgMTIyLFxuICAgICAgMTQyLFxuICAgICAgMjgsXG4gICAgICAyMTQsXG4gICAgICA0MixcbiAgICAgIDgxLFxuICAgICAgMTg1LFxuICAgICAgNzAsXG4gICAgICA2NixcbiAgICAgIDE5NixcbiAgICAgIDIzOCxcbiAgICAgIDIxNyxcbiAgICAgIDIwNCxcbiAgICAgIDE5LFxuICAgICAgMjA2LFxuICAgICAgMjM1LFxuICAgICAgMzEsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOThMRUpXN0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDkxOTI1OTA6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPTEFNSElERVwiLFxuICAgIFwibGlkXCI6IFwiMTE1NTAwNzYzODkzOTUyOjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AvYis2d0xFSUNmcnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidFR4V0d2SU5lSXhjdHRxZjc4cVZ6VW9vUkc1dDNZV2Z2UERpODIzR1NCbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRaFBvY2oyR0YzN2lnRVdhcGlrYXNpOFIyU2N3TWtWWGVnaVhxV2c5c1llaUkvcFU2cmJ1dSsrdWkxcWI2Sk1NQmpOMkZiaXpocDlYWGEwdFNmK3Vpdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOU2JVaHIxczRiN3d0VGtQdHdqdGc0L3BHeWVzMXUrK2xGMXR1aTdzbHc5M1ZtS0l3aTRabXdRcWlrcmxrbDRnYlIvdG1yNXhOcmU5K29TQ1N5aHVDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5MTkyNTkwOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MjIyNzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGRnJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZGci5qc29uIjogIntcImtleURhdGFcIjpcIkhFa09hWEoyR1hMUE5hUk9EQytNYllTeEJvWmRVUnk0b3RGR2lIenhGK009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA0NzA5MTcxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNDIyMjc2NDcyXCJ9Igp9"  // PUT your SESSION_ID 


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
