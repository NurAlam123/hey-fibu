// import type { ButtonStyleTypes } from "discord-interactions";

type ButtonType = {
  type?: number;
  style?: ButtonStyleTypes;
  label: string;
  custom_id: string;
  emoji?: string | EmojiType;
  disabled?: boolean;
  url?: string;
};

type SelectMenuType = {
  type?: number;
  custom_id: string;
  options: Array<OptionStructureType>;
  placeholder?: string;
  min_values?: number;
  max_values?: number;
  disable?: boolean;
};

type OptionStructureType = {
  label: string;
  value: string;
  description?: string;
  emoji?: string | EmojiType;
  is_default?: boolean;
};

type TextInputStructure = {
  type?: number;
  custom_id: string;
  label: string;
  style?: number;
  min_length?: number;
  max_length?: number;
  required?: boolean;
  value?: string;
  placeholder?: string;
};
