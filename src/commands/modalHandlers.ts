import { editTodoModalHandler } from "../cogs/todo";

// Modal Handlers
const modalHandlers: Array<ModalHandler> = [
  {
    custom_id: "edit_todo_modal",
    handler: editTodoModalHandler,
  },
];

export default modalHandlers;
