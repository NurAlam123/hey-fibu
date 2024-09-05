import { MessageComponentTypes } from "discord-interactions";

const SelectMenu = ({
  custom_id,
  options,
  placeholder = "",
  min_values = 1,
  max_values = 1,
  disable = false,
}: SelectMenu) => {
  return <SelectMenu>{
    type: MessageComponentTypes.STRING_SELECT,
    custom_id,
    options,
    placeholder,
    min_values,
    max_values,
    disable,
  };
};

export default SelectMenu;
