const ActionRow = (
  components: Array<
    ButtonType | SelectMenuType | TextInputStructure | OptionStructureType
  >
) => ({
  type: 1,
  components: components,
});

export default ActionRow;
