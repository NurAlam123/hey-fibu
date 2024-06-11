import axios from "axios";
import commands from "../../commands";

const installCommands = async (endpoint: string, method: string, commands: string) => {
    const baseURL = process.env.BASE_API_URL || "";
    const url = baseURL + endpoint;

    // Send commands to application
    const res = await axios(url, {
        method: method,
        data: commands
    })

    // handle bad requests
    if (res.status !== 200) {
        const data = await res.data;
        throw new Error(JSON.stringify(data));
    }

    return res;

}

// Add commands to specific guild -> mostly used for testing
const installGuildCommands = async (applicationID: string, guildID: string, commands: Array<Object>) => {
    const endpoint = `applications/${applicationID}/guilds/${guildID}/commands`;
    const applicationCommands = JSON.stringify(commands);

    try {
        await installCommands(endpoint, "PUT", applicationCommands);
    } catch (err) {
        console.error(err);
    }
}

// Add commands to 
const installGlobalCommands = async (applicationID: string, commands: Array<Object>) => {
    const endpoint = `applications/${applicationID}/commands`;
    const applicationCommands = JSON.stringify(commands);

    try {
        await installCommands(endpoint, "PUT", applicationCommands);
    } catch (err) {
        console.error(err);
    }
}

// Fetch global application commands
const getGlobalCommands = async (appID: string) => {
    const res = await axios.get(`/applications/${appID}/commands`)
    return res.data
}

// Fetch guild application commands
const getGuildCommands = async (appID: string, guildID: number | string) => {
    const res = await axios.get(`/applications/${appID}/guilds/${guildID}/commands`)
    return res.data
}

// Sync commands
type commandsType = {
    name: string,
    command: {
        name: string,
        description: string,
        type: number,
    }
    global?: boolean,
    ext?: Function
}

const syncCommand = async (appID: string, guildID: string = '') => {
    const commandsData: Array<commandsType> = commands;

    const filterCommands = commandsData.map(command => command.command);

    !guildID && await installGlobalCommands(appID, filterCommands);
    guildID && await installGuildCommands(appID, guildID, filterCommands);
    console.log("INFO: commands synced!");
}


export {
    installGuildCommands,
    installGlobalCommands,
    getGlobalCommands,
    getGuildCommands,
    syncCommand
}