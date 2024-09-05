interface Guild {
  id: string;
  name: string;
  icon: string;
  icon_hash?: string;
  splash: string;
  discovery_splash: string;
  owner?: boolean;
  owner_id: string;
  permissions?: string;
  region?: string;
  afk_channel_id: string;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: string;
  verification_level: number;
  default_message_notifications: number;
  explicit_content_filter: number;
  roles: Array<RoleObject>;
  emojis: Array<EmojiStructure>;
  features: Array<string>;
  mfa_level: number;
  application_id: string;
  system_channel_id: string;
  system_channel_flags: number;
  rules_channel_id: string;
  max_presences?: number;
  max_members?: number;
  vanity_url_code: string;
  description: string;
  banner: string;
  premium_tier: number;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id: string;
  max_video_channel_users?: number;
  max_stage_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: WelcomeScreenStructure;
  nsfw_level: number;
  stickers?: Array<Sticker>;
  premium_progress_bar_enabled: boolean;
  safety_alerts_channel_id: string;
}

interface Channel {
  id: string;
  type: number;
  guild_id?: string;
  position?: number;
  permission_overwrites?: OverwriteStructure;
  name?: string;
  topic?: string;
  nsfw?: boolean;
  last_message_id?: string;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: User;
  icon?: string;
  owner_id?: string;
  application_id?: string;
  managed?: boolean;
  parent_id?: string;
  last_pin_timestamp?: string;
  rtc_region?: string;
  video_quality_mode?: number;
  message_count?: number;
  member_count?: number;
  thread_metadata?: ThreadMetadataStructure;
  member?: ThreadMemberStructure;
  default_auto_archive_duration?: number;
  permissions?: string;
  flags?: number;
  total_message_sent?: number;
  available_tags?: ForumTagStructure;
  applied_tags?: string;
  default_reaction_emoji?: DefaultReactionStructure;
  default_thread_rate_limit_per_user?: number;
  default_sort_order?: number;
  default_forum_layout?: number;
}

interface RoleObject {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  icon?: string;
  unicode_emoji?: string;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: RoleTagStructure;
  flags: number;
}

interface RoleTagStructure {
  bot_id?: string;
  integration_id?: string;
  premium_subscriber?: boolean | null;
  subscription_listing_id?: string;
  available_for_purchase?: boolean | null;
  guild_connections?: boolean | null;
}

interface ThreadMetadataStructure {
  archived: boolean;
  auto_archive_duration: number;
  archive_timestamp: string;
  locked: boolean;
  invitable?: boolean;
  create_timestamp?: string;
}

interface ThreadMemberStructure {
  id?: string;
  user_id?: string;
  join_timestamp: string;
  flags: number;
  member?: Member;
}
