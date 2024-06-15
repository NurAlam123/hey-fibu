import type { ButtonTypes, SelectMenuTypes } from "../discordTypes";

const ActionRow = (components: Array<(ButtonTypes | SelectMenuTypes)>) => ({
    type: 1,
    components: components
})

export default ActionRow;