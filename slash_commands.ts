import { installGuildCommands } from "./discord/bot/installCommands";

const PING_COMMAND = {
    name: 'ping',
    description: 'Return a pong.',
    type: 1,
}

const SHOW_BUTTON = {
    name: "showui",
    description: "Show button",
    type: 1
}

const ALL_COMMANDS = [PING_COMMAND, SHOW_BUTTON];
const appID = process.env.APP_ID || '';

installGuildCommands(appID, "839126064621027329", ALL_COMMANDS);