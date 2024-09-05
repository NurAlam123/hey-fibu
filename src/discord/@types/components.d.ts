declare enum ButtonStyleTypes {
  PRIMARY = 1,
  SECONDARY = 2,
  SUCCESS = 3,
  DANGER = 4,
  LINK = 5,
}

type Button = {
  type?: number;
  style?: ButtonStyleTypes;
  label: string;
  custom_id: string;
  emoji?: string | Emoji;
  disabled?: boolean;
  url?: string;
};

type SelectMenu = {
  type?: number;
  custom_id: string;
  options: Array<OptionStructure>;
  placeholder?: string;
  min_values?: number;
  max_values?: number;
  disable?: boolean;
};

type OptionStructure = {
  label: string;
  value: string;
  description?: string;
  emoji?: string | Emoji;
  is_default?: boolean;
};
