import axiosFetch from "../../utils/axiosFetch";

const addRole = async (guildID: string, userID: string, roleID: string) => {
  const url = `/guilds/${guildID}/members/${userID}/roles/${roleID}`;
  const res = await axiosFetch(url, { method: "PUT" });
  if (res.status == 402)
    return { status: "error", code: res.status, data: res.data };
  return { status: "success", code: res.status, data: res.data };
};

export default addRole;
