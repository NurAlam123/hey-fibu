const Option = ({
  label,
  value,
  description = "",
  emoji = "",
  is_default = false,
}: OptionStructureType) => {
  const optionStructure = {
    label,
    value,
    default: is_default,
    ...(description && { description }),
    ...(emoji && { emoji }),
  };
  return optionStructure;
};

export default Option;
