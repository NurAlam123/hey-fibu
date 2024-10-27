import { Response } from "express";
import send from "../discord/bot/send";
import { findDB, updateDB, writeDB } from "../utils/database";
import ActionRow from "../discord/ui/ActionRow";
import SelectMenu from "../discord/ui/SelectMenu";

type RoleStored = { placeholder: string; role_id: string };

const collection_name = "role";

// Create role
const role = async (res: Response, body: InteractionObject<CommandOption>) => {
  const data = body.data;
  if (!data.options) return;
  const command = data.options[0];
  switch (command.name) {
    // Add roles to group
    case "add":
      if (!command.options || command.options.length < 3)
        return await send(res, {
          content: "You have to provide all the required parameter",
        });

      if (
        !command.options[0].value ||
        !command.options[1].value ||
        !command.options[2].value
      )
        return;
      const role_group_name = command.options[0].value;
      const role = command.options[1].value;
      const role_name = command.options[2].value;
      await addRole(res, body.guild_id, role_group_name, role, role_name);
      break;

    // Delete roles from group
    case "delete":
      if (!command.options || command.options.length < 1)
        return await send(res, {
          content: "You have to provide all the required parameter",
        });
      if (!command.options[0].value) return;
      await deleteRole(res, body.guild_id, command.options[0].value);
      break;

    // Create role group
    case "create":
      if (!command.options || command.options.length < 1)
        return await send(res, {
          content: "You have to provide all the required parameter",
        });
      if (!command.options[0].value) return;
      const group_name = command.options[0].value;
      let multi_selection = false;
      if (command.options[1]) {
        const value = command.options[1].value;
        multi_selection = value ? true : false;
      }

      await createGroup(res, body.guild_id, group_name, multi_selection);
      break;

    case "attach":
      if (!command.options || command.options.length < 1)
        return await send(res, {
          content: "You have to provide all the required parameter",
        });
      if (!command.options[0].value) return;
      // const group_name = command.options[0].value;
      // let multi_selection = false;
      if (command.options[1]) {
        const value = command.options[1].value;
        multi_selection = value ? true : false;
      }

      // await createGroup(res, body.guild_id, group_name, multi_selection);
      break;

    default:
      break;
  }
  return;
};

// ============ Create the role group and store it to database ===========
const createGroup = async (
  res: Response,
  guild_id: string,
  group_name: string,
  multi_selection: boolean
) => {
  const found = await findDB({
    collection_name,
    query: { guild_id, group_name },
  });
  if (found) {
    return await send(res, {
      content: "Role group already exist for this guild.",
    });
  }

  const doc = {
    guild_id,
    group_name,
    multi_selection,
    roles: [],
  };

  await writeDB({
    collection_name: "role",
    doc,
  });
  return await send(res, {
    content: `Role group created as **${group_name}**`,
  });
};

// =========== Add the role to the role group ===========
const addRole = async (
  res: Response,
  guild_id: string,
  group_name: string,
  role: string,
  role_name: string
) => {
  const query = { guild_id, group_name };

  const found = await findDB({
    collection_name: "role",
    query,
  });
  if (!found)
    return await send(res, {
      content: "No found any data with the role group name.",
    });
  const roles: Array<RoleStored> = found.roles;
  roles.push({ placeholder: role_name, role_id: role });

  const doc = {
    $set: {
      roles,
    },
  };

  await updateDB({ collection_name: "role", query, doc });
  return await send(res, { content: `${role_name} Role added.` });
};

// ========= Delete role from a group =========
const deleteRole = async (
  res: Response,
  guild_id: string,
  group_name: string
) => {
  const found = await findDB({
    collection_name,
    query: { guild_id, group_name },
  });

  if (!found)
    return await send(res, {
      content: "There is no role assigned to this group",
    });

  const roles: Array<RoleStored> = found.roles;
  const menu = [];
  for (let role of roles) {
    menu.push({
      label: role.placeholder,
      value: JSON.stringify({
        group_name,
        guild_id,
        role: role.role_id,
        placeholder: role.placeholder,
      }),
    });
  }
  const listUi = [
    ActionRow([
      SelectMenu({
        custom_id: "role_delete",
        options: menu,
      }),
    ]),
  ];

  return await send(res, { components: listUi, ephemeral: true });
};

// Handle the delete event
export const roleDeleteHandler = async (
  res: Response,
  body: InteractionObject<MessageComponentDataStructure>
) => {
  // Get and parse the value of selected role
  const data = body.data.values;
  if (!data) return;
  const roleData: {
    group_name: string;
    guild_id: string;
    role_id: string;
    placeholder: string;
  } = JSON.parse(data[0] as string);

  // Find the role in the database
  const query = {
    guild_id: roleData.guild_id,
    group_name: roleData.group_name,
  };

  const found = await findDB({
    collection_name,
    query,
  });

  if (!found) return;
  const roles: Array<RoleStored> = found.roles;
  const newRoles = roles.map((role) => role.role_id !== roleData.role_id);

  const doc = {
    $set: {
      roles: newRoles,
    },
  };

  await updateDB({ collection_name, query, doc });
  return await send(res, {
    content: `**${roleData.placeholder} has been deleted from **${roleData.group_name}** group!`,
    ephemeral: true,
  });
};

// ========= Attach the role =========
const roleAttach = async (
  res: Response,
  group_name: string,
  message_id: string
) => {};

export default role;
