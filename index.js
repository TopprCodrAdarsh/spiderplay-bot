const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const TOKEN = "OTM1NDQzNDk1ODE1MDg2MTIw.Ye-tpQ.2_hdkOKYGa-9My2oCESc4l7NK7Y"
const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

Client.on('ready', () => {
    console.log('The bot is ready')
})

const welcomeChannelId = "934326990687854593"

Client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the Spiderverse!`,
        files: [img]
    })
})

Client.login(process.env.TOKEN);