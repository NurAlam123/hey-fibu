import config from "./config";
import getApplication from "./discord/bot/getApplication";
import { syncCommand } from "./discord/bot/slashCommands";

// For CLI
import figlet from "figlet";
import pc from "picocolors";

import { input, select } from "@inquirer/prompts";

import getGlobalCommands from "./discord/bot/getGlobalCommands";
import fetchGuilds from "./discord/bot/fetchGuilds";
import getGuildCommands from "./discord/bot/getGuildCommands";

const APP_ID = config.APP_ID;

const runCommand = async () => {
  console.clear();
  // await syncCommand(APP_ID, "839126064621027329");
  const headLine = figlet.textSync("Register Command", {
    font: "ANSI Shadow",
  });

  console.log(pc.blue(headLine));

  const bot = await getApplication();
  console.log(pc.green(`You logged in as ${pc.bold(bot.name)}`));

  await ask();
};

const ask = async () => {
  const answer = await select({
    message: "Main Menu",
    choices: [
      {
        name: "Test Guild",
        value: "test",
        description: "Add commands to the test guild",
      },
      {
        name: "Global Commands",
        value: "global",
        description: "Add every commands as a global commands",
      },
      {
        name: "Edit",
        value: "edit",
        description: "Edit all commands",
      },
      {
        name: "Delete",
        value: "delete",
        description: "Delete any command",
      },
    ],
  });

  switch (answer) {
    case "test":
      setTestCommands();
      break;

    case "global":
      await syncCommand(APP_ID);
      break;
  }
};

// Set commands to test guild
const setTestCommands = async () => {
      const guildID = await input({
        message: "Type the test guild id: ",
        validate(value) {
          const num = /^[0-9]+$/i;
          const isNum = num.test(value);
          if (isNum) return true;
          return "Please provide a valid id.";
        },
        required: true,
      });
      await syncCommand(APP_ID, guildID);
}

runCommand();
