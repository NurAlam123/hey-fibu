import { roleDeleteHandler } from "../cogs/role";
// import { selectHandler, showUiHandler } from "../cogs/show_ui";
import { todoListDeleteHandler, todoListEditHandler } from "../cogs/todo";

// Message Components Handlers
const messageComponentsHandlers: Array<MessageComponentHandler> = [
  // {
  //   custom_id: "button_click",
  //   handler: showUiHandler,
  // },
  // {
  //   custom_id: "select_ui",
  //   handler: selectHandler,
  // },
  {
    custom_id: "todo_list_edit",
    handler: todoListEditHandler,
  },
  {
    custom_id: "todo_list_delete",
    handler: todoListDeleteHandler,
  },
  {
    custom_id: "role_delete",
    handler: roleDeleteHandler,
  },
];

export default messageComponentsHandlers;
