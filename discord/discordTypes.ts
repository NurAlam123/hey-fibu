import type { ButtonStyleTypes, MessageComponentTypes } from "discord-interactions"

export type OptionStructureType = {
    label: string,
    value: string,
    description?: string,
    emoji?: object,
    default?: boolean
}

export type MessageTypes = {
    content?: string,
    components?: Array<object>,
    tts?: boolean
}

export type ButtonTypes = {
    type: number,
    style: ButtonStyleTypes,
    label: string,
    custom_id: string
}

export type SelectMenuTypes = {
    type?: MessageComponentTypes.STRING_SELECT,
    custom_id: string,
    options: Array<OptionStructureType>,
    placeholder?: string,
    min_values?: number,
    max_values?: number,
    disable?: boolean
}