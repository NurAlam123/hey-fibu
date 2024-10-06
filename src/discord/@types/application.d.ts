interface ApplicationStructure {
  id: string;
  name: string;
  icon: string;
  description: string;
  rpc_origins?: Array<string>;
  bot_public: boolean;
  bot_require_code_grant: boolean;
  bot?: User;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  owner?: User;
  verify_key: string;
  team: TeamObject;
  guild_id?: string;
  guild?: Guild;
  primary_sku_id?: string;
  slug?: string;
  cover_image?: string;
  flags?: number;
  approximate_guild_count?: number;
  redirect_uris?: Array<string>;
  interactions_endpoint_url?: string;
  role_connections_verification_url?: string;
  tags?: string;
  install_params?: InstallParamsStructure;
  integration_types_config?: object;
  custom_install_url?: string;
}

enum EntryPointCommandHandlerTypes {
  APP_HANDLER = 1,
  DISCORD_LAUNCH_ACTIVITY = 2,
}

enum ApplicationIntegrationTypes {
  GUILD_INSTALL = 0,
  USER_INSTALL = 1,
}

enum InteractionContextTypes {
  GUILD = 0,
  BOT_DM = 1,
  PRIVATE_CHANNEL = 2,
}

interface ApplicationCommandStructure {
  id?: number;
  type?: number;
  application_id: number;
  guild_id?: number;
  name: string;
  name_localizations?: Array<object>;
  description: string;
  description_localizations?: Array<object>;
  options?: Array<CommandOption>;
  default_member_permissions?: string;
  dm_permission?: boolean;
  default_permission?: boolean;
  nsfw?: boolean;
  integration_types?: Array<ApplicationIntegrationTypes>;
  contexts?: Array<InteractionContextTypes>;
  version: number;
  handler?: Array<EntryPointCommandHandlerTypes>;
}

interface ApplicationCommandDataStructure {
  id: string;
  name: string;
  type: number;
  resolved?: ResolveDataStructure;
  options?: Array<ApplicationCommandInteractionDataOptionStructure>;
  guild_id?: string;
  target_id?: string;
}

interface ApplicationCommandOptions {
  type: number;
  name: string;
  name_localizations?: object;
  description: string;
  description_localizations?: object;
  required: boolean;
  choices: Array<ApplicationCommandOptionChoiceStructure>;
}

interface ApplicationCommandOptionChoiceStructure {
  name: string;
  name_localizations?: object;
  value: string | number;
}

interface ApplicationCommandInteractionDataOptionStructure {
  name: string;
  type: number;
  value?: string | number | boolean;
  options?: Array<ApplicationCommandInteractionDataOptionStructure>;
  focused?: boolean;
}
