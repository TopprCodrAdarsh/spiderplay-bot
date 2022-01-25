const Discord = require('discord.js')
require("dotenv").config()

const TOKEN = "OTM1NDQzNDk1ODE1MDg2MTIw.Ye-tpQ.2_hdkOKYGa-9My2oCESc4l7NK7Y"
const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
})

Client.on('ready', () => {
    console.log('The bot is ready')
})

Client.login(process.env.TOKEN);