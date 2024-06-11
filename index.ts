import express from 'express';
import { InteractionResponseType, InteractionType, MessageComponentTypes } from 'discord-interactions';
import verifyDiscordRequest from './discord/verifyDiscordRequest';
import axios from 'axios';
import { syncCommand } from './discord/bot/slashCommands';
import commands from './commands';

// CONSTANTS
const PUBLIC_KEY = process.env.PUBLIC_KEY || '';
const PORT = process.env.PORT || 5000;
const TOKEN = process.env.TOKEN || '';
const APP_ID = process.env.APP_ID || '';


const app = express();

// Middleware
app.use(express.json({ verify: verifyDiscordRequest(PUBLIC_KEY) }));

// Config axios
axios.defaults.baseURL = "https://discord.com/api/v10/";
axios.defaults.headers.common['Authorization'] = `Bot ${TOKEN}`;
axios.defaults.headers.common['Content-Type'] = "application/json; charset=UTF-8";
axios.defaults.headers.common['User-Agent'] = "DiscordBot (https://discord.com, 1.0.0)";


// ==== Routes ====
app.get("/", (req, res) => {
    res.send("Running bot!")
})


// Interactions
app.post("/interactions", async (req, res) => {
    const { type, id, data } = req.body;

    // console.log(id)

    // Acknowledging PING requests for interactions endpoint url validation
    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
    }

    try {
        // Application Commands
        if (type === InteractionType.APPLICATION_COMMAND) {
            const { name } = data;
            const slashCommands = commands.filter(command => command.name === name)[0];
            slashCommands.ext(res);
        }
    } catch (err) {
        console.error(err)
    }

    // handle message components
    if (type === InteractionType.MESSAGE_COMPONENT) {
        const { component_type, custom_id } = data;
        if (component_type === MessageComponentTypes.BUTTON) {
        }
    }
});

app.listen(PORT, async () => {
    // await syncCommand(APP_ID, "839126064621027329");
    console.log(`Bot running at port: ${PORT}`);
})