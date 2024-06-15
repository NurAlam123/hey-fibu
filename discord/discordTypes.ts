import type { ButtonStyleTypes, InteractionType, MessageComponentTypes } from "discord-interactions"

export interface InteractionObject {
    id?: string,
    application_id: string,
    type: InteractionType,
    data?: object,
    guild: object,
    guild_id: string,
    channel: string,
    channel_id: string,
    member: object,
    user: object,
    token: string,
    version: string,
    message: object,
    app_permissions: string,
    locale: string,
    guild_locale: string,
    entitlements: Array<object>,
    authorizing_integration_owners: object,
    context: object
}


export type MessageTypes = {
    content?: string,
    components?: Array<object>,
    tts?: boolean
}

export type ButtonTypes = {
    type?: number,
    style?: ButtonStyleTypes,
    label: string,
    custom_id: string,
    emoji?: string | EmojiTypes
}

export type SelectMenuTypes = {
    type?: number,
    custom_id: string,
    options: Array<OptionStructureTypes>,
    placeholder?: string,
    min_values?: number,
    max_values?: number,
    disable?: boolean
}

export type OptionStructureTypes = {
    label: string,
    value: string,
    description?: string,
    emoji?: string | EmojiTypes,
    is_default?: boolean
}

export type EmojiTypes = {
    id?: number | string | null,
    name: string,
    animated?: boolean,
    guild_id?: string
}

export interface EmojiInfo {
    id: string,
    name: string,
    user: {
        id: string,
        username: string,
        avatar: string,
        discriminator: string,
        public_flags: number,
        flags: number,
        bot: boolean,
        banner: boolean,
        accent_color: string | null,
        global_name: string | null,
        avatar_decoration_data: string | null,
        banner_color: string | null,
        clan: string | null,
    },
    roles: Array<null> | Array<object>,
    require_colons: boolean,
    managed: boolean,
    animated: boolean,
    available: boolean,
}
