// import type { InteractionType } from "discord-interactions";

interface InteractionObject<T> {
  id?: string;
  application_id: string;
  type: InteractionType;
  data: T;
  guild: Guild;
  guild_id: string;
  channel: Channel;
  channel_id: string;
  member: Member;
  user: User;
  token: string;
  version: string;
  message: MessageStructure;
  app_permissions: string;
  locale: string;
  guild_locale: string;
  entitlements: Array<object>;
  authorizing_integration_owners: object;
  context: object;
}
