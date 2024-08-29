import config from "./config";
import { syncCommand } from "./discord/bot/slashCommands";

const APP_ID = config.APP_ID;

await syncCommand(APP_ID, "839126064621027329");
