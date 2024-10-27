import axiosFetch from "../../utils/axiosFetch";

const fetchGuilds = async () => {
  const endpoint = `users/@me/guilds`;
  const guilds = await axiosFetch(endpoint, { method: "GET" });
  return <Array<Guild>>guilds.data;
};

export default fetchGuilds;
