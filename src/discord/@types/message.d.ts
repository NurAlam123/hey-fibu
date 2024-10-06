type Message = {
  content?: string;
  components?: Array<MessageComponent>;
  tts?: boolean;
  embeds?: Array<Embed>;
  ephemeral?: boolean;
};

type MessageReferenceStructure = {
  message_id?: string;
  channel_id?: string;
  guild_id?: string;
  fail_if_not_exists?: boolean;
};

type MessageInteractionMetadataStructure = {
  id: string;
  type: number;
  user: User;
  authorizing_integration_owners: object;
  original_response_message_id?: string;
  interacted_message_id?: string;
  triggering_interaction_metadata?: MessageInteractionMetadataStructure;
};

type MessageInteractionStructure = {
  id: string;
  type: number;
  name: string;
  user: User;
  member?: Member;
};

interface MessageCallObjectStructure {
  participants: Array<string>;
  ended_timestamp?: string;
}

interface MessageStructure {
  id: string;
  channel_id: string;
  author: User;
  content: string;
  timestamp: string;
  edited_timestamp: string;
  tts: boolean;
  mention_everyone: boolean;
  mentions: Array<User>;
  mention_roles: Array<RoleObject>;
  mention_channels?: Array<Channel>;
  attachments: Array<Attachment>;
  embeds: Array<Embed>;
  reactions?: Array<ReactionStructure>;
  nonce?: string | number;
  pinned: boolean;
  webhook_id?: string;
  type: number;
  activity?: MessageActivityStructure;
  application?: ApplicationStructure;
  application_id?: string;
  message_reference?: MessageReferenceStructure;
  flags?: number;
  referenced_message?: MessageStructure;
  interaction_metadata?: MessageInteractionMetadataStructure;
  interaction?: MessageInteractionStructure;
  thread?: Channel;
  components?: Array<object>;
  sticker_items?: Array<StickerItemStructure>;
  stickers?: Array<Sticker>;
  position?: number;
  role_subscription_data?: RoleSubscriptionDataObjectStructure;
  resolved?: ResolveDataStructure;
  poll?: PollObjectStructure;
  call?: MessageCallObjectStructure;
}

interface MessageComponent {
  type: number;
  components: Array<Button | SelectMenu | OptionStructure | TextInputStructure>;
}

interface MessageComponentDataStructure {
  custom_id: string;
  component_type: number;
  values?: Array<OptionStructure | string>;
  resolved?: ResolveDataStructure;
}

interface Attachment {
  id: string;
  filename: string;
  description?: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  ephemeral?: boolean;
  duration_secs?: number;
  waveform?: string;
  flags?: number;
}

interface Sticker {
  id: string;
  pack_id?: string;
  name: string;
  description?: string;
  tags: string;
  asset?: string;
  type: number;
  format_type: number;
  available?: boolean;
  guild_id?: string;
  user?: User;
  sort_value?: number;
}

type StickerItemStructure = {
  id: string;
  name: string;
  format_type: number;
};
