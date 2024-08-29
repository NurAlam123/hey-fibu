import commands from "../../commands";
import axiosFetch from "../../utils/axiosFetch";

// TYPES
type commandsType = {
  name: string;
  command: {
    name: string;
    description: string;
    type: number;
  };
  global?: boolean;
  ext?: Function;
};

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
  commands: Array<Object>
) => {
  const endpoint = `applications/${applicationID}/guilds/${guildID}/commands`;
  const applicationCommands = JSON.stringify(commands);

  try {
    await installCommands(endpoint, "PUT", applicationCommands);
  } catch (err) {
    console.error(err);
  }
};

// Add commands to
const installGlobalCommands = async (
  applicationID: string,
  commands: Array<Object>
) => {
  const endpoint = `applications/${applicationID}/commands`;
  const applicationCommands = JSON.stringify(commands);

  try {
    await installCommands(endpoint, "PUT", applicationCommands);
  } catch (err) {
    console.error(err);
  }
};

// Fetch global application commands
const getGlobalCommands = async (appID: string) => {
  const res = await axiosFetch(`/applications/${appID}/commands`, {
    method: "get",
  });
  return res.data;
};

// Fetch guild application commands
const getGuildCommands = async (appID: string, guildID: number | string) => {
  const res = await axiosFetch(
    `/applications/${appID}/guilds/${guildID}/commands`,
    { method: "get" }
  );
  return res.data;
};

const syncCommand = async (appID: string, guildID: string = "") => {
  const commandsData: Array<commandsType> = commands;

  const filterCommands = commandsData.map((command) => command.command);

  !guildID && (await installGlobalCommands(appID, filterCommands));
  guildID && (await installGuildCommands(appID, guildID, filterCommands));
  console.log("INFO: commands synced!");
};

export {
  installGuildCommands,
  installGlobalCommands,
  getGlobalCommands,
  getGuildCommands,
  syncCommand,
};
