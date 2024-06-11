import ping from "./cogs/ping";
import showui from "./cogs/show_ui";

type commandType = {
    name: string,
    command: {
        name: string,
        description: string,
        type: number,
    },
    global: boolean,
    ext: Function
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
        ext: ping
    },
    {
        name: "showui",
        command: {
            name: "showui",
            description: "Show button",
            type: 1,
        },
        global: false,
        ext: showui,
    },
]

export default commands;