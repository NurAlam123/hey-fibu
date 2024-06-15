import type { optionStructureType } from "../discordTypes";
import Emoji from "../models/Emoji";

const Option = (label: string, value: string, description: string = '', emoji: string = '', is_default: boolean = false) => {
    const optionStructure: optionStructureType = {
        label,
        value,
        default: is_default,
        ...(description && { description }),
        ...(emoji && { emoji: Emoji(emoji) })
    }
    return optionStructure;
}