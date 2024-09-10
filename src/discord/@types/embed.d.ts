interface Embed {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooterStructure;
  image?: EmbedImageStructure;
  thumbnail?: EmbedThumbnailStructure;
  video?: EmbedVideoStructure;
  provider?: EmbedProviderStructure;
  author?: EmbedAuthorStructure;
  fields?: Array<EmbedFieldStructure>;
}

interface EmbedFooterStructure {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

interface EmbedFieldStructure {
  name: string;
  value: string;
  inline?: boolean;
}
interface EmbedThumbnailStructure {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

interface EmbedVideoStructure {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

interface EmbedImageStructure {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

interface EmbedProviderStructure {
  name?: string;
  url?: string;
}

interface EmbedAuthorStructure {
  name: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}
