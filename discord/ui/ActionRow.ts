import type { Button, ChannelSelect, InputText, MentionableSelect, RoleSelect, StringSelect, UserSelect } from "discord-interactions"

const ActionRow = (components: Array<Button | StringSelect | InputText | UserSelect | RoleSelect | MentionableSelect | ChannelSelect>) => ({
    type: 1,
    components: components
})

export default ActionRow;