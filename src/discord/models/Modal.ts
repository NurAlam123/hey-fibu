const Modal = ({ custom_id, title, components }: Modal<MessageComponent>) => {
  return <Modal<MessageComponent>>{
    custom_id,
    title,
    components,
  };
};

export default Modal;
