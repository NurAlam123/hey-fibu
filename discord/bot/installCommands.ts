const installCommands = async (endpoint: string, method: string, commands: string) => {
    const baseURL = process.env.BASE_API_URL || "";
    const url = baseURL + endpoint;

    // Send commands to application
    const res = await fetch(url, {
        headers: {
            Authorization: `Bot ${process.env.TOKEN}`,
            'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'DiscordBot (https://discord.com, 1.0.0)',
        },
        method: method,
        body: commands
    })

    // handle bad requests
    if (!res.ok) {
        const data = await res.json();
        throw new Error(JSON.stringify(data));
    }

    return res;

}

const installGuildCommands = async (applicationID: string, guildID: string, commands: Array<Object>) => {
    const endpoint = `applications/${applicationID}/guilds/${guildID}/commands`;
    const applicationCommands = JSON.stringify(commands);

    try {
        await installCommands(endpoint, "PUT", applicationCommands);
    } catch (err) {
        console.error(err);
    }
}

const installGlobalCommands = async (applicationID: string, commands: Array<Object>) => {
    const endpoint = `applications/${applicationID}/commands`;
    const applicationCommands = JSON.stringify(commands);

    try {
        await installCommands(endpoint, "PUT", applicationCommands);
    } catch (err) {
        console.error(err);
    }
}


export {
    installGuildCommands,
    installGlobalCommands
}