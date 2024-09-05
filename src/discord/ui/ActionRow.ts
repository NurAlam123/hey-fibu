const ActionRow = (
  components: Array<Button | SelectMenu | TextInputStructure | OptionStructure>
) => ({
  type: 1,
  components: components,
});

export default ActionRow;
