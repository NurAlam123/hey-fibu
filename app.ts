import express from "express";
import { InteractionResponseType, InteractionType } from "discord-interactions";
import verifyDiscordRequest from "./discord/verifyDiscordRequest";
import commands, { messageComponents } from "./commands";
import config from "./config";

// CONSTANTS
const PUBLIC_KEY = config.PUBLIC_KEY;

// Express apps
const app = express();

// Middleware
app.use(express.json({ verify: verifyDiscordRequest(PUBLIC_KEY) }));

// ==== Routes ====
app.get("/", (req, res) => {
  res.send("Running bot!");
});

// Interactions
app.post("/interactions", async (req, res) => {
  const { type, id, data } = req.body;
  // console.log(req.body);

  // Acknowledging PING requests for interactions endpoint url validation
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  // Application Commands
  try {
    if (type === InteractionType.APPLICATION_COMMAND) {
      const { name } = data;
      const slashCommands = commands.filter(
        (command) => command.name === name
      )[0];
      slashCommands.exec(res, data, req.body);
    }
  } catch (err) {
    console.error(err);
  }

  // Message components handler
  try {
    if (type === InteractionType.MESSAGE_COMPONENT && id) {
      const { custom_id } = data;
      const components = messageComponents.filter(
        (components) => components.custom_id === custom_id
      );
      !(components.length <= 0) && components[0].handler(res, req.body);
    }
  } catch (err) {
    console.error(err);
  }
});

export default app;
