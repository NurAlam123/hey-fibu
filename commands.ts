import ping from "./cogs/ping";
import showui, { showUiHandler } from "./cogs/show_ui";


// Custom types
type CommandTypes = {
    name: string,
    command: {
        name: string,
        description: string,
        type: number,
    },
    global: boolean,
    exec: Function
}

type MessageComponentsTypes = {
    custom_id: string,
    handler: Function
}

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
]

// Message Components Handlers
export const messageComponents: Array<MessageComponentsTypes> = [
    {
        custom_id: "button_click",
        handler: showUiHandler
    },

]

export default commands;