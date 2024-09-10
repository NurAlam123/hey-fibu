const TextInput = ({
  custom_id,
  style = 1,
  label,
  min_length,
  max_length,
  required,
  value,
  placeholder,
}: TextInputStructure) => {
  return <TextInputStructure>{
    type: 4,
    style,
    label,
    custom_id,
    ...(value && { value }),
    ...(max_length && { max_length }),
    ...(min_length && { min_length }),
    ...(required && { required }),
    ...(placeholder && { placeholder }),
  };
};

export default TextInput;
