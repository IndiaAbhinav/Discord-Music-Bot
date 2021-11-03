module.exports = {
  Admins: ["802153872009330719", "884801961533263882"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "?", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/SSJNmXY2hK", //Support Server Link
  Token: process.env.Token || "ODk4ODMxNjcyNjAxMTEyNjM3.YWp8Og.tuW9rghGOKsiE_0Kc6crKYXJ_Uc", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "898831672601112637", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "Pk4LTrg5NzcCyUtSM-nq0lywAoPJg3OM", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://Discord-MusicBot-1.abhinavkumar51.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: "to ?help", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "anything",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "30675cc523b34862bc0cef4d6a2af4e4", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "6771733d809445eb845682bf70f0fad0", //Spotify Client Secret
  },
};
