import { ButtonStyleTypes } from "discord-interactions";

const Button = ({
  label,
  custom_id,
  style = ButtonStyleTypes.PRIMARY,
  emoji = "",
}: Button) => {
  return <Button>{
    type: 2,
    style,
    label,
    custom_id,
    ...(emoji && { emoji }),
  };
};

export default Button;
