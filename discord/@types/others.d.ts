type InstallParamsStructure = {
  scopes: Array<string>;
  permissions: string;
};

type RoleSubscriptionDataObjectStructure = {
  role_subscription_listing_id: string;
  tier_name: string;
  total_months_subscribed: number;
  is_renewal: boolean;
};

type PollMediaObjectStructure = {
  text?: string;
  emoji?: EmojiStructure;
};

type PollAnswerObjectStructure = {
  answer_id: number;
  poll_media: PollMediaObjectStructure;
};

type PollResultsObjectStructure = {
  is_finalized: boolean;
  answer_counts: Array<PollAnswerCountObjectStructure>;
};

type PollAnswerCountObjectStructure = {
  id: number;
  count: number;
  me_voted: boolean;
};

interface ResolveDataStructure {
  users: User;
  members: Member;
  roles: RoleObject;
  channels: Channel;
  messages: MessageStructure;
  attachments: Attachment;
}

interface AvatarDecorationDataStructure {
  asset: string;
  sku_id: string;
}

interface OverwriteStructure {
  id: string;
  type: number;
  allow: string;
  deny: string;
}

interface ReactionCountDetailsStructure {
  burst: number;
  normal: number;
}

interface ForumTagStructure {
  id: string;
  name: string;
  moderated: boolean;
  emoji_id: string | null;
  emoji_name: string | null;
}

interface DefaultReactionStructure {
  emoji_id: string;
  emoji_name: string;
}

interface ReactionStructure {
  count: number;
  count_details: ReactionCountDetailsStructure;
  me: boolean;
  me_burst: boolean;
  emoji: EmojiStructure;
  burst_colors: Array<string | number>;
}

interface MessageActivityStructure {
  type: number;
  party_id: string;
}

interface TeamObject {
  icon?: string;
  id: string;
  members: string;
  name: string;
  owner_user_id: string;
}
interface TeamMemberObject {
  membership_state: number;
  team_id: string;
  user: User;
  role: string;
}

interface WelcomeScreenStructure {
  description: string;
  welcome_channels: Array<WelcomeScreenChannelStructure>;
}
interface WelcomeScreenChannelStructure {
  channel_id: string;
  description: string;
  emoji_id: string;
  emoji_name: string;
}

interface PollObjectStructure {
  question: PollObjectStructure;
  answers: Array<PollAnswerObjectStructure>;
  expiry?: string;
  allow_multiselect: boolean;
  layout_type: number;
  results?: PollResultsObjectStructure;
}
