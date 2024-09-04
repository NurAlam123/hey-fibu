import express from "express";
import { InteractionResponseType, InteractionType } from "discord-interactions";
import verifyDiscordRequest from "./discord/verifyDiscordRequest";
import commands, { messageComponents, modalHandlers } from "./commands";
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
  console.log(req.body.type);

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
      slashCommands.exec(res, req.body);
    }
  } catch (err) {
    console.error(err);
  }

  // Message components handler
  try {
    if (type === InteractionType.MESSAGE_COMPONENT && id) {
      const { custom_id } = data;
      console.log(custom_id);
      const components = messageComponents.filter(
        (components) => components.custom_id === custom_id
      );
      !(components.length <= 0) && components[0].handler(res, req.body);
    }
  } catch (err) {
    console.error(err);
  }

  // Modal Submit Handler
  try {
    if (type === InteractionType.MODAL_SUBMIT && id) {
      const { custom_id } = data;
      // console.log(custom_id);
      const modal = modalHandlers.filter(
        (modal) => modal.custom_id === custom_id
      );
      !(modal.length <= 0) && modal[0].handler(res, req.body);
    }
  } catch (err) {
    console.error(err);
  }
});

export default app;
