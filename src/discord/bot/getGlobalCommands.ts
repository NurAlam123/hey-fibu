import axiosFetch from "../../utils/axiosFetch";

const getGlobalCommands = async (applicationID: string) => {
  const endpoint = `applications/${applicationID}/commands`;
  const commands = await axiosFetch(endpoint, { method: "GET" });
  return <Array<ApplicationCommandStructure>>commands.data;
};

export default getGlobalCommands;
