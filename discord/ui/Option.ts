import type { OptionStructureTypes } from "../discordTypes";

const Option = ({ label, value, description = '', emoji = '', is_default = false }: OptionStructureTypes) => {
    const optionStructure = {
        label,
        value,
        default: is_default,
        ...(description && { description }),
        ...(emoji && { emoji })
    }
    return optionStructure;
}

export default Option;