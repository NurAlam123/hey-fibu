import ping from "./cogs/ping";
import showui, { selectHandler, showUiHandler } from "./cogs/show_ui";

// Custom types
type CommandTypes = {
  name: string;
  command: {
    name: string;
    description: string;
    type: number;
    options?: Array<commandOptionTypes>;
  };
  global: boolean;
  exec: Function;
};

type commandOptionTypes = {
  type: number;
  name: string;
  description?: string;
  options?: Array<commandOptionTypes>;
};

type MessageComponentsTypes = {
  custom_id: string;
  handler: Function;
};

// Application Commands
const commands: Array<CommandTypes> = [
  {
    name: "ping",
    command: {
      name: "ping",
      description: "Return a pong.",
      type: 1,
    },
    global: true,
    exec: ping,
  },
  {
    name: "showui",
    command: {
      name: "showui",
      description: "Show button",
      type: 1,
    },
    global: false,
    exec: showui,
  },
  // // create a todo command -> Basic usage
  // {
  //   name: "todo",
  //   command: {
  //     type: 1,
  //     name: "todo",
  //     description: "Todo list",
  //     options: [
  //       {
  //         type: 1,
  //         name: "add",
  //         description: "Add a todo",
  //         options: [
  //           {
  //             type: 3,
  //             name: "todo",
  //             description: "Your todo",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   global: false,
  //   exec: todo,
  // },
];

// Message Components Handlers
export const messageComponents: Array<MessageComponentsTypes> = [
  {
    custom_id: "button_click",
    handler: showUiHandler,
  },
  {
    custom_id: "select_ui",
    handler: selectHandler,
  },
];

export default commands;
