import ping from "../cogs/ping";
import role from "../cogs/role";
import showui from "../cogs/show_ui";
import todo from "../cogs/todo";

enum CommandTypes {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
  MENTIONABLE = 9,
  NUMBER = 10,
  ATTACHMENT = 11,
}

// Application Commands
const applicationCommands: Array<CustomCommand> = [
  // Basic ping pong command
  {
    name: "ping",
    command: {
      name: "ping",
      description: "Return a pong.",
      type: 1,
    },
    exec: ping,
  },
  // // For testing ui and and message components
  // {
  //   name: "showui",
  //   command: {
  //     name: "showui",
  //     description: "Show button",
  //     type: CommandTypes.SUB_COMMAND,
  //   },
  //   exec: showui,
  // },
  // Role selector
  {
    name: "role",
    command: {
      type: CommandTypes.SUB_COMMAND,
      name: "role",
      description: "Role selector.",
      options: [
        {
          type: CommandTypes.SUB_COMMAND,
          name: "create",
          description: "Create a role group.",
          options: [
            {
              type: CommandTypes.STRING,
              name: "group_name",
              description: "Name of the role group",
              required: true,
            },
            {
              type: CommandTypes.BOOLEAN,
              name: "multi_selection",
              description: "User can select multiple roles",
            },
          ],
        },
        {
          type: CommandTypes.SUB_COMMAND,
          name: "add",
          description: "Add roles to role group",
          options: [
            {
              type: CommandTypes.STRING,
              name: "group_name",
              description: "Name of the group the role belongs to",
              required: true,
            },
            {
              type: CommandTypes.ROLE,
              name: "role",
              description: "Roles to be added",
              required: true,
            },
            {
              type: CommandTypes.STRING,
              name: "placeholder",
              description: "Placeholder for the role.",
              required: true,
            },
          ],
        },
        {
          type: CommandTypes.SUB_COMMAND,
          name: "delete",
          description: "Delete roles from role group",
          options: [
            {
              type: CommandTypes.STRING,
              name: "group_name",
              description: "Name of the group the role belongs to",
              required: true,
            },
          ],
        },
      ],
    },
    exec: role,
  },

  // Simple todo command -> Basic usage
  {
    name: "todo",
    command: {
      type: CommandTypes.SUB_COMMAND,
      name: "todo",
      description: "Todo list",
      options: [
        {
          type: CommandTypes.SUB_COMMAND,
          name: "add",
          description: "Add a todo",
          options: [
            {
              type: CommandTypes.STRING,
              name: "content",
              description: "Your todo",
            },
          ],
        },
        {
          type: CommandTypes.SUB_COMMAND,
          name: "edit",
          description: "Edit a todo",
        },
        {
          type: CommandTypes.SUB_COMMAND,
          name: "delete",
          description: "Delete a todo",
        },
        {
          type: CommandTypes.SUB_COMMAND,
          name: "display",
          description: "Display all your todos.",
        },
      ],
    },
    exec: todo,
  },
];

export default applicationCommands;
