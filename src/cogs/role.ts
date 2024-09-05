import ActionRow from "../discord/ui/ActionRow";
import SelectMenu from "../discord/ui/SelectMenu";

// Create role message
const addRole = async () => {
  return;
};

// Assign the self selected role to user
const assignRole = async () => {
  const ui = [
    ActionRow([
      SelectMenu({
        custom_id: "role_select",
        options: [],
      }),
    ]),
  ];
};

export { assignRole };
