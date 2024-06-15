import { MessageComponentTypes } from "discord-interactions"
import type { SelectMenuTypes } from "../discordTypes"

const SelectMenu = ({ custom_id, options, placeholder = '', min_values = 1, max_values = 1, disable = false }: SelectMenuTypes) => {
    return <SelectMenuTypes>{
        type: MessageComponentTypes.STRING_SELECT,
        custom_id,
        options,
        placeholder,
        min_values,
        max_values,
        disable
    }
}

export default SelectMenu;