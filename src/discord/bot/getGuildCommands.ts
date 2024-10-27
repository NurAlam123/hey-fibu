import axiosFetch from "../../utils/axiosFetch";

const getGuildCommands = async (applicationID: string, guildID: string) => {
  const endpoint = `applications/${applicationID}/guilds/${guildID}/commands`;
  const commands = await axiosFetch(endpoint, { method: "GET" });
  return <Array<ApplicationCommandStructure>>commands.data;
};

export default getGuildCommands;
