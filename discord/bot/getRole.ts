import getRoles from "./getRoles";

type T = {
    roleID?: string,
    roleName?: string
}

const getRole = async (guildID: string, { roleID = '', roleName = '' }: T) => {
    const roles = await getRoles(guildID);
    const role = roleName ? roles.find(role => role.name == roleName) : roles.find(role => role.id == roleID);
    if (!role) return '';
    return role;
}
export default getRole;