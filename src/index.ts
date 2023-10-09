import { Client, Events, GatewayIntentBits } from "discord.js"
import { logSuccess } from "./utils/Logger"

require('dotenv')

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers
    ]
})

client.once(Events.ClientReady, c => {
    logSuccess(`Logged in as ${c.user.tag}`)
})

client.login(process.env.DISCORD_TOKEN)