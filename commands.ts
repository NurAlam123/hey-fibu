import ping from "./cogs/ping";
import showui, { showUiHandler } from "./cogs/show_ui";

type commandType = {
    name: string,
    command: {
        name: string,
        description: string,
        type: number,
    },
    global: boolean,
    exec: Function
}

type messageComponentsType = {
    custom_id: string,
    handler: Function
}

const commands: Array<commandType> = [
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

export const messageComponents: Array<messageComponentsType> = [
    {
        custom_id: "button_click",
        handler: showUiHandler
    },

]

export default commands;