// Custom types
interface CustomCommand {
  name: string;
  command: {
    type: number;
    name: string;
    description: string;
    options?: Array<CommandOption>;
  };
  global: boolean;
  exec: Function;
}

interface CommandOption {
  type: number;
  name: string;
  description?: string;
  required?: boolean;
  choices?: Array<CommandChoice>;
  options?: Array<CommandOption>;
  min_value?: number;
  max_value?: number;
  min_length?: number;
  max_length?: number;
  autocomplete?: boolean;
  value?: string;
}

type CommandChoice = {
  name: string;
  value: string | number;
};

type MessageComponents = {
  custom_id: string;
  handler: Function;
};
