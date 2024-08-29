type EmojiType = {
  id?: number | string | null;
  name: string;
  animated?: boolean;
  guild_id?: string;
};

interface EmojiStructure {
  id: string;
  name: string;
  user: User;
  roles: Array<null> | Array<object>;
  require_colons: boolean;
  managed: boolean;
  animated: boolean;
  available: boolean;
}
