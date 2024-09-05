import config from "./config";
import { syncCommand } from "./discord/bot/slashCommands";

const APP_ID = config.APP_ID;

const runCommand = async () => {
  await syncCommand(APP_ID, "839126064621027329");
};

runCommand();
