import type { ButtonStyleTypes, InteractionType } from "discord-interactions"

export interface InteractionObject<T> {
    id?: string,
    application_id: string,
    type: InteractionType,
    data: T,
    guild: Guild,
    guild_id: string,
    channel: Channel,
    channel_id: string,
    member: Member,
    user: User,
    token: string,
    version: string,
    message: MessageStructure,
    app_permissions: string,
    locale: string,
    guild_locale: string,
    entitlements: Array<object>,
    authorizing_integration_owners: object,
    context: object
}

export interface ApplicationCommandDataStructure {
    id: string,
    name: string,
    type: number,
    resolved?: ResolveDataStructure
    options?: Array<ApplicationCommandInteractionDataOptionStructure>,
    guild_id?: string,
    target_id?: string
}

export interface ApplicationCommandOptions {
    type: number,
    name: string,
    name_localizations?: object,
    description: string,
    description_localizations?: object,
    required: boolean,
    choices: Array<ApplicationCommandOptionChoiceStructure>
}

export interface ApplicationCommandOptionChoiceStructure {
    name: string,
    name_localizations?: object,
    value: string | number
}

export interface ApplicationStructure {
    id: string,
    name: string,
    icon: string,
    description: string,
    rpc_origins?: Array<string>,
    bot_public: boolean,
    bot_require_code_grant: boolean,
    bot?: User,
    terms_of_service_url?: string,
    privacy_policy_url?: string,
    owner?: User,
    verify_key: string,
    team: TeamObject,
    guild_id?: string,
    guild?: Guild,
    primary_sku_id?: string,
    slug?: string,
    cover_image?: string,
    flags?: number,
    approximate_guild_count?: number,
    redirect_uris?: Array<string>,
    interactions_endpoint_url?: string,
    role_connections_verification_url?: string,
    tags?: string,
    install_params?: InstallParamsStructure,
    integration_types_config?: object,
    custom_install_url?: string,
}

export interface MessageComponentDataStructure {
    custom_id: string,
    component_type: number,
    values?: Array<OptionStructureTypes | string>,
    resolved?: ResolveDataStructure
}

type InstallParamsStructure = {
    scopes: Array<string>,
    permissions: string
}

export type MessageTypes = {
    content?: string,
    components?: Array<MessageComponentDataStructure>,
    tts?: boolean,
    embeds?: Array<Embed>

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

export interface EmojiStructure {
    id: string,
    name: string,
    user: User,
    roles: Array<null> | Array<object>,
    require_colons: boolean,
    managed: boolean,
    animated: boolean,
    available: boolean,
}


export interface RoleObject {
    id: string,
    name: string,
    color: number,
    hoist: boolean,
    icon?: string,
    unicode_emoji?: string,
    position: number,
    permissions: string,
    managed: boolean,
    mentionable: boolean,
    tags?: RoleTagStructure,
    flags: number
}

export interface RoleTagStructure {
    bot_id?: string,
    integration_id?: string,
    premium_subscriber?: boolean | null,
    subscription_listing_id?: string,
    available_for_purchase?: boolean | null,
    guild_connections?: boolean | null
}

export interface ApplicationCommandsStructure {
    id: string,
    name: string,
    type: number,
    resolved: ResolveDataStructure,
    options: Array<ApplicationCommandInteractionDataOptionStructure>,
    guild_id: string,
    target_id: string
}

export interface ResolveDataStructure {
    users: User,
    members: Member,
    roles: RoleObject,
    channels: Channel,
    messages: MessageStructure,
    attachments: Attachment
}

interface ApplicationCommandInteractionDataOptionStructure {
    name: string,
    type: number,
    value?: string | number | boolean,
    options?: Array<ApplicationCommandInteractionDataOptionStructure>
    focused?: boolean
}
export interface User {
    id: string,
    username: string,
    discriminator: string,
    global_name: string,
    avatar: string,
    bot?: boolean,
    system?: boolean,
    mfa_enabled?: boolean,
    banner?: string,
    accent_color?: number,
    locale?: string,
    verified?: boolean,
    email?: string,
    flags?: number,
    premium_type?: number,
    public_flags?: number,
    avatar_decoration_data?: AvatarDecorationDataStructure,
}

export interface AvatarDecorationDataStructure {
    asset: string,
    sku_id: string
}

export interface Member {
    user: User,
    nick?: string,
    avatar?: string,
    roles: Array<string>,
    joined_at: string,
    premium_since?: string,
    deaf: boolean,
    mute: boolean,
    flags: number,
    pending?: boolean,
    permissions?: string,
    communication_disabled_until?: string,
    avatar_decoration_data?: AvatarDecorationDataStructure,
}

export interface Guild {
    id: string,
    name: string,
    icon: string,
    icon_hash?: string,
    splash: string,
    discovery_splash: string,
    owner?: boolean,
    owner_id: string,
    permissions?: string,
    region?: string,
    afk_channel_id: string,
    afk_timeout: number,
    widget_enabled?: boolean,
    widget_channel_id?: string,
    verification_level: number,
    default_message_notifications: number,
    explicit_content_filter: number,
    roles: Array<RoleObject>,
    emojis: Array<EmojiStructure>,
    features: Array<string>,
    mfa_level: number,
    application_id: string,
    system_channel_id: string,
    system_channel_flags: number,
    rules_channel_id: string,
    max_presences?: number,
    max_members?: number,
    vanity_url_code: string,
    description: string,
    banner: string,
    premium_tier: number,
    premium_subscription_count?: number,
    preferred_locale: string,
    public_updates_channel_id: string,
    max_video_channel_users?: number,
    max_stage_video_channel_users?: number,
    approximate_member_count?: number,
    approximate_presence_count?: number,
    welcome_screen?: WelcomeScreenStructure,
    nsfw_level: number,
    stickers?: Array<Sticker>,
    premium_progress_bar_enabled: boolean,
    safety_alerts_channel_id: string,
}

export interface Channel {
    id: string,
    type: number,
    guild_id?: string,
    position?: number,
    permission_overwrites?: OverwriteStructure,
    name?: string,
    topic?: string,
    nsfw?: boolean,
    last_message_id?: string,
    bitrate?: number,
    user_limit?: number,
    rate_limit_per_user?: number,
    recipients?: User,
    icon?: string,
    owner_id?: string,
    application_id?: string,
    managed?: boolean,
    parent_id?: string,
    last_pin_timestamp?: string,
    rtc_region?: string,
    video_quality_mode?: number,
    message_count?: number,
    member_count?: number,
    thread_metadata?: ThreadMetadataStructure,
    member?: TThreadMemberStructure,
    default_auto_archive_duration?: number,
    permissions?: string,
    flags?: number,
    total_message_sent?: number,
    available_tags?: ForumTagStructure,
    applied_tags?: string,
    default_reaction_emoji?: DefaultReactionStructure,
    default_thread_rate_limit_per_user?: number,
    default_sort_order?: number,
    default_forum_layout?: number,
}

export interface MessageStructure {
    id: string,
    channel_id: string,
    author: User,
    content: string,
    timestamp: string,
    edited_timestamp: string,
    tts: boolean,
    mention_everyone: boolean,
    mentions: Array<User>,
    mention_roles: Array<RoleObject>,
    mention_channels?: Array<Channel>,
    attachments: Array<Attachment>,
    embeds: Array<Embed>,
    reactions?: Array<ReactionStructure>,
    nonce?: string | number,
    pinned: boolean,
    webhook_id?: string,
    type: number,
    activity?: MessageActivityStructure,
    application?: ApplicationStructure,
    application_id?: string,
    message_reference?: MessageReferenceStructure,
    flags?: number,
    referenced_message?: MessageStructure,
    interaction_metadata?: MessageInteractionMetadataStructure,
    interaction?: MessageInteractionStructure,
    thread?: Channel,
    components?: Array<object>,
    sticker_items?: Array<StickerItemStructure>,
    stickers?: Array<Sticker>,
    position?: number,
    role_subscription_data?: RoleSubscriptionDataObjectStructure,
    resolved?: ResolveDataStructure,
    poll?: PollObjectStructure,
    call?: MessageCallObjectStructure,
}

export interface Attachment {
    id: string,
    filename: string
    description?: string,
    content_type?: string,
    size: number,
    url: string,
    proxy_url: string,
    height?: number,
    width?: number,
    ephemeral?: boolean,
    duration_secs?: number,
    waveform?: string,
    flags?: number
}

export interface Sticker {
    id: string,
    pack_id?: string,
    name: string,
    description?: string,
    tags: string,
    asset?: string,
    type: number,
    format_type: number,
    available?: boolean,
    guild_id?: string,
    user?: User,
    sort_value?: number
}

type StickerItemStructure = {
    id: string,
    name: string,
    format_type: number
}

export interface Embed {
    title?: string,
    type?: string,
    description?: string,
    url?: string,
    timestamp?: string,
    color?: number,
    footer?: EmbedFooterStructure,
    image?: EmbedImageStructure,
    thumbnail?: EmbedThumbnailStructure,
    video?: EmbedVideoStructure,
    provider?: EmbedProviderStructure,
    author?: EmbedAuthorStructure,
    fields?: Array<EmbedFieldStructure>
}

export interface EmbedFooterStructure {
    text: string,
    icon_url?: string,
    proxy_icon_url?: string
}

export interface EmbedFieldStructure {
    name: string,
    value: string,
    inline?: boolean
}
export interface EmbedThumbnailStructure {
    url: string,
    proxy_url?: string,
    height?: number,
    width?: number
}

export interface EmbedVideoStructure {
    url?: string,
    proxy_url?: string,
    height?: number,
    width?: number
}

export interface EmbedImageStructure {
    url: string,
    proxy_url?: string,
    height?: number,
    width?: number
}

export interface EmbedProviderStructure {
    name?: string,
    url?: string
}


export interface OverwriteStructure {
    id: string,
    type: number,
    allow: string,
    deny: string
}

export interface EmbedAuthorStructure {
    name: string,
    url?: string,
    icon_url?: string,
    proxy_icon_url?: string
}

export interface ReactionCountDetailsStructure {
    burst: number,
    normal: number
}

export interface ThreadMetadataStructure {
    archived: boolean,
    auto_archive_duration: number,
    archive_timestamp: string,
    locked: boolean,
    invitable?: boolean,
    create_timestamp?: string
}

export interface TThreadMemberStructure {
    id?: string,
    user_id?: string,
    join_timestamp: string,
    flags: number,
    member?: Member
}

export interface ForumTagStructure {
    id: string,
    name: string,
    moderated: boolean,
    emoji_id: string | null,
    emoji_name: string | null
}

export interface DefaultReactionStructure {
    emoji_id: string,
    emoji_name: string
}

export interface ReactionStructure {
    count: number,
    count_details: ReactionCountDetailsStructure,
    me: boolean,
    me_burst: boolean,
    emoji: EmojiStructure,
    burst_colors: Array<string | number>,
}

export interface MessageActivityStructure {
    type: number,
    party_id: string
}

export interface TeamObject {
    icon?: string,
    id: string,
    members: string,
    name: string,
    owner_user_id: string
}
export interface TeamMemberObject {
    membership_state: number,
    team_id: string,
    user: User,
    role: string,
}

export interface WelcomeScreenStructure {
    description: string,
    welcome_channels: Array<WelcomeScreenChannelStructure>
}
interface WelcomeScreenChannelStructure {
    channel_id: string,
    description: string,
    emoji_id: string,
    emoji_name: string
}

type MessageReferenceStructure = {
    message_id?: string,
    channel_id?: string,
    guild_id?: string,
    fail_if_not_exists?: boolean
}

type MessageInteractionMetadataStructure = {
    id: string,
    type: number,
    user: User,
    authorizing_integration_owners: object
    original_response_message_id?: string,
    interacted_message_id?: string,
    triggering_interaction_metadata?: MessageInteractionMetadataStructure
}

type MessageInteractionStructure = {
    id: string,
    type: number,
    name: string,
    user: User,
    member?: Member
}

type RoleSubscriptionDataObjectStructure = {
    role_subscription_listing_id: string,
    tier_name: string,
    total_months_subscribed: number,
    is_renewal: boolean
}

interface PollObjectStructure {
    question: PollObjectStructure,
    answers: Array<PollAnswerObjectStructure>,
    expiry?: string,
    allow_multiselect: boolean,
    layout_type: number,
    results?: PollResultsObjectStructure
}
type PollMediaObjectStructure = {
    text?: string,
    emoji?: EmojiStructure
}

type PollAnswerObjectStructure = {
    answer_id: number,
    poll_media: PollMediaObjectStructure
}

type PollResultsObjectStructure = {
    is_finalized: boolean,
    answer_counts: Array<PollAnswerCountObjectStructure>
}

type PollAnswerCountObjectStructure = {
    id: number,
    count: number,
    me_voted: boolean
}

interface MessageCallObjectStructure {
    participants: Array<string>,
    ended_timestamp?: string
}