import express from 'express';
import { InteractionResponseType, InteractionType, MessageComponentTypes } from 'discord-interactions';
import sendMessage from './discord/sendMessage';
import verifyDiscordRequest from './discord/verifyDiscordRequest';

// CONSTANTS
const PUBLIC_KEY = process.env.PUBLIC_KEY || '';
const PORT = process.env.PORT || 5000;


const app = express();

// Middleware
app.use(express.json({ verify: verifyDiscordRequest(PUBLIC_KEY) }));


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
            if (name === "ping") {
                await sendMessage(res, "Pong!!!");
            }
            if (name === "showui") {
                console.log("INSIDE")
                await sendMessage(res, "UI")
            }
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

app.listen(PORT, () => {
    console.log(`Bot running at port: ${PORT}`);
})