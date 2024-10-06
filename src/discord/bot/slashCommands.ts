import applicationCommands from "../../commands/applicationCommands";
import axiosFetch from "../../utils/axiosFetch";

// Install commands to guild or guilds or global
const installCommands = async (
  endpoint: string,
  method: string,
  commands: string
) => {
  // Send commands to application
  const res = await axiosFetch(endpoint, {
    method: method,
    data: commands,
  });

  // handle bad requests
  if (res.status !== 200) {
    const data = await res.data;
    throw new Error(JSON.stringify(data));
  }

  return res;
};

// Add commands to specific guild -> mostly used for testing
const installGuildCommands = async (
  applicationID: string,
  guildID: string,
  commands: Array<Command>
) => {
  const endpoint = `applications/${applicationID}/guilds/${guildID}/commands`;
  const applicationCommands = JSON.stringify(commands);

  try {
    await installCommands(endpoint, "PUT", applicationCommands);
    for (const command of commands) {
      console.log(`ADDED ==> ${command.name} ==> Guild: ${guildID}`);
    }
  } catch (err) {
    console.error(err);
  }
};

// Add command to a specific guild
const installGuildCommand = async (
  applicationID: string,
  guildID: string,
  command: Command
) => {
  const endpoint = `applications/${applicationID}/`;
};

// Add commands to
const installGlobalCommands = async (
  applicationID: string,
  commands: Array<Command>
) => {
  const endpoint = `applications/${applicationID}/commands`;
  const applicationCommands = JSON.stringify(commands);

  try {
    await installCommands(endpoint, "PUT", applicationCommands);
    for (const command of commands) {
      console.log(`ADDED ==> ${command.name} ==> global`);
    }
  } catch (err) {
    console.error(err);
  }
};

const syncCommand = async (appID: string, guildID: string = "") => {
  const commandsData: Array<CustomCommand> = applicationCommands;

  const filterCommands = commandsData.map((command) => command.command);

  !guildID && (await installGlobalCommands(appID, filterCommands));
  guildID && (await installGuildCommands(appID, guildID, filterCommands));
  console.log("INFO: commands synced!");
};

export { installGuildCommands, installGlobalCommands, syncCommand };
