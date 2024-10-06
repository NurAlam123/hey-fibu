// Custom types
interface CustomCommand {
  name: string;
  command: Command;
  exec: Function;
}

// Command Types
declare enum CommandTypes {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
  MENTIONABLE = 9,
  NUMBER = 10,
  ATTACHMENT = 11,
}

interface Command {
  type: CommandTypes;
  name: string;
  description: string;
  options?: Array<CommandOption>;
}

interface CommandOption {
  type: CommandTypes;
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

type MessageComponentHandler = {
  custom_id: string;
  handler: Function;
};

type ModalHandler = MessageComponentHandler;
