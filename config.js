const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_51_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDU2LFxuICAgICAgICA0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDM4LFxuICAgICAgICA5NyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODMsXG4gICAgICAgIDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOTjhiQkppRnh6aFZ6NXNUR0lsZmtieklDZmZtK0o5M2VXM1h2dmtYYjlzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4NTY4NTA0OTEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MjM2ODQzQTFFNjhDQTUyNjg4NUM4RTQ0QjMyQUE3N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE0MzAyOTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU0lMSVN4c0JRNy1CMGhiaC04VUpUUVwiLFxuICBcInBob25lSWRcIjogXCJlNzhmZGRlZC1kMGJjLTQ3NmMtODgwMC05OWYyZTViZWEzNWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgOTUsXG4gICAgICAxNTUsXG4gICAgICAxNjksXG4gICAgICAzNCxcbiAgICAgIDEwMCxcbiAgICAgIDYyLFxuICAgICAgMCxcbiAgICAgIDg2LFxuICAgICAgNjAsXG4gICAgICAzMyxcbiAgICAgIDExLFxuICAgICAgMTUxLFxuICAgICAgMTE0LFxuICAgICAgMTIwLFxuICAgICAgMjI4LFxuICAgICAgMTEzLFxuICAgICAgMTM0LFxuICAgICAgMTc1LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMTQ1LFxuICAgICAgMTMxLFxuICAgICAgMTE2LFxuICAgICAgMTUyLFxuICAgICAgMTQ4LFxuICAgICAgMjgsXG4gICAgICAxMzYsXG4gICAgICAxMDMsXG4gICAgICAxNixcbiAgICAgIDI4LFxuICAgICAgMTAwLFxuICAgICAgMTYwLFxuICAgICAgMTkxLFxuICAgICAgMjE3LFxuICAgICAgMjUwLFxuICAgICAgMjA3LFxuICAgICAgODEsXG4gICAgICAxMTgsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyWVRSRzdSOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTg1Njg1MDQ5MTI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwMjExNDkwODYxMjcyOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQXllc2hhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3o4c2Q4R0VKT1B6cmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGTVVqVlRlcmVmUVZVQnpHdG9tRFpRM0ZIRDgyUW9VQnh5WUM4NWRBUHhNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkQvdzhjWjd1Mlh1NnFVMzVUbys4blFQVS9KUEI0R3p1L29PcEdJU1UvR3I1Y0IraVVFVldOUGl5MVhTdE1DdUpXVHVMdFdWNW5paWJYZnVmR1dNY0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhGWnFQMTgwRkpVQjNlZ0QvMnRSTGd5VzJxTlN2QWtNS1I2QVljZVVLTTRZa1hkdjJLVXNsSUZWMDlwK2FNcWZoNkxzVkw3Vmpyakt1SlZDcTFLdkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE4NTY4NTA0OTEyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDMwMjk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1l0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLWXQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVWG1YWi85Qys5ZjRwOHl4QnBqL2EvNG52VFM5M2dDU24xbWZCUTdvVllzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MTA2NjA5MDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0MzAyNTY3MDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
