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

interface ApplicationCommandsStructure {
  id: string;
  name: string;
  type: number;
  resolved: ResolveDataStructure;
  options: Array<ApplicationCommandInteractionDataOptionStructure>;
  guild_id: string;
  target_id: string;
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
