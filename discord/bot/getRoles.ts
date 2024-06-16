import axiosFetch from "../../utils/axiosFetch"
import type { RoleObject } from "../discordTypes";

const getRoles = async (guildID: string) => {
    const url = `/guilds/${guildID}/roles`;
    const roles = await axiosFetch(url, { method: "GET" });
    return <RoleObject>roles.data;
}

export default getRoles;