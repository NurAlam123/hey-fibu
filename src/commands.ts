import ping from "./cogs/ping";
//import { assignRole } from "./cogs/role";
import showui, { selectHandler, showUiHandler } from "./cogs/show_ui";
import todo, {
  editTodoModalHandler,
  todoListDeleteHandler,
  todoListEditHandler,
} from "./cogs/todo";

// Command Types
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
const commands: Array<CustomCommand> = [
  {
    name: "ping",
    command: {
      name: "ping",
      description: "Return a pong.",
      type: 1,
    },
    exec: ping,
  },
  {
    name: "showui",
    command: {
      name: "showui",
      description: "Show button",
      type: CommandTypes.SUB_COMMAND,
    },
    exec: showui,
  },
  // Role selector
  // {
  //   name: "role",
  //   command: {
  //     type: CommandTypes.SUB_COMMAND,
  //     name: "role",
  //     description: "Role selector.",
  //     options: [
  //       {
  //         type: CommandTypes.SUB_COMMAND,
  //         name: "create",
  //         description: "Create a role group.",
  //         options: [
  //           {
  //             type: CommandTypes.STRING,
  //             name: "group_name",
  //             description: "Name of the role group",
  //           },
  //         ],
  //       },
  //       {
  //         type: CommandTypes.SUB_COMMAND,
  //         name: "add",
  //         description: "Add roles to role group",
  //         options: [
  //           {
  //             type: CommandTypes.ROLE,
  //             name: "role",
  //             description: "Roles to be added",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   exec: assignRole,
  // },

  // create a todo command -> Basic usage
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

// Message Components Handlers
export const messageComponents: Array<MessageComponentHandler> = [
  {
    custom_id: "button_click",
    handler: showUiHandler,
  },
  {
    custom_id: "select_ui",
    handler: selectHandler,
  },
  {
    custom_id: "todo_list_edit",
    handler: todoListEditHandler,
  },
  {
    custom_id: "todo_list_delete",
    handler: todoListDeleteHandler,
  },
];

// Modal Handlers
export const modalHandlers: Array<ModalHandler> = [
  {
    custom_id: "edit_todo_modal",
    handler: editTodoModalHandler,
  },
];

export default commands;
