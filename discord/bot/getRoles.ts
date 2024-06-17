import axiosFetch from "../../utils/axiosFetch"
import type { RoleObject } from "../discordTypes";

const getRoles = async (guildID: string) => {
    const url = `/guilds/${guildID}/roles`;
    const roles = await axiosFetch(url, { method: "GET" });
    const data: Array<RoleObject> = roles.data;
    return data;
}

export default getRoles;