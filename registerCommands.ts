import { syncCommand } from "./discord/bot/slashCommands";


const APP_ID = process.env.APP_ID || "";

await syncCommand(APP_ID, "839126064621027329");
