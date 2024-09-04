import type { Request, Response } from "express";
import { findDB, updateDB, writeDB } from "../utils/database";
import sendMessage from "../discord/bot/sendMessage";
import ActionRow from "../discord/ui/ActionRow";
import SelectMenu from "../discord/ui/SelectMenu";
import Button from "../discord/ui/Button";
import TextInput from "../discord/ui/TextInput";
import sendModal from "../discord/bot/sendModal";

const todo = async (res: Response, body: InteractionObject<CommandOption>) => {
  const data = body.data;
  if (!data.options) return;
  const command = data.options[0];
  switch (command.name) {
    case "add":
      if (!command.options || !command.options[0].value) return;
      await addTodo(res, body.member.user.id, command.options[0].value);
      break;
    case "edit":
      await editTodo(res, body.member.user.id);
      break;
    case "delete":
      await deleteTodo(res, body.member.user.id);
      break;
    default:
      break;
  }
};

// ============== Add todo ===============
const addTodo = async (res: Response, userID: string, content: string) => {
  const found = await findDB({
    collection_name: "todo",
    query: { userID: userID },
  });
  // Update the todo list if already exists otherwise insert
  if (found) {
    const todoID = found.todoID + 1;
    const todo: Array<Todo> = found.todo;
    todo.push({
      content,
      id: todoID,
      createdAt: Date.now(),
    });
    const doc = {
      $set: {
        todoID,
        todo,
      },
    };
    await updateDB({ collection_name: "todo", query: { userID }, doc });
    return await sendMessage(res, {
      content: "Your todo  has been added.",
      ephemeral: true,
    });
  }

  const doc = {
    userID,
    todoID: 1,
    todo: [
      {
        content,
        id: 1,
        createdAt: Date.now(),
      },
    ],
  };
  await writeDB({ collection_name: "todo", doc });
  return await sendMessage(res, { content: "Your todo has been added." });
};

// ========= Edit todo =========
const editTodo = async (res: Response, userID: string) => {
  const found = await findDB({
    collection_name: "todo",
    query: { userID: userID },
  });
  if (!found)
    return await sendMessage(res, { content: "You haven't added any todo." });
  const todos: Array<Todo> = found.todo;
  const menu = [];
  for (let todo of todos) {
    menu.push({
      label: todo.content,
      value: JSON.stringify({ userID, todoID: todo.id }),
    });
  }
  const listUi = [
    ActionRow([
      SelectMenu({
        custom_id: "todo_list_edit",
        options: menu,
      }),
    ]),
  ];

  return await sendMessage(res, { components: listUi, ephemeral: true });
};

// Handler the todo list to edit
export const todoListEditHandler = async (
  res: Response,
  body: InteractionObject<MessageComponentDataStructure>
) => {
  // Get and parse the value of selected todo
  const data = body.data.values;
  if (!data) return;
  const todoData: { userID: string; todoID: number } = JSON.parse(
    data[0] as string
  );

  // Find and send a  modal with text input to edit the todo
  const found = await findDB({
    collection_name: "todo",
    query: { userID: todoData.userID },
  });
  if (!found) return;
  const todos: Array<Todo> = found.todo;
  const filteredTodo = todos.filter((todo) => todo.id === todoData.todoID)[0];

  const editUi = [
    ActionRow([
      TextInput({
        custom_id: `edit_todo_content_${todoData.todoID}`,
        label: "Edit Todo",
        value: filteredTodo.content,
      }),
    ]),
  ];

  return await sendModal(res, {
    custom_id: "edit_todo_modal",
    title: "Edit Your Todo",
    components: editUi,
  });
};

// Handler for todo edit modal
export const editTodoModalHandler = async (
  res: Response,
  body: InteractionObject<Modal<ModalComponents>>
) => {
  // Get the value from modal
  const data = body.data;
  const components = data.components;
  const todoInput = components[0].components;
  const value = todoInput[0].value;
  const todoID = parseInt(
    todoInput[0].custom_id.replace("edit_todo_content_", "")
  );

  // Update the todo
  const query = {
    userID: body.member.user.id,
  };

  const foundTodos = await findDB({
    collection_name: "todo",
    query,
  });

  if (!foundTodos) return;
  const todos: Array<Todo> = foundTodos.todo;
  const index = todos.findIndex((todo) => todo.id === todoID);
  todos[index].content = value!;

  const doc = {
    $set: {
      todo: todos,
    },
  };

  await updateDB({ collection_name: "todo", query, doc });
  return await sendMessage(res, {
    content: "Your todo  has been updated.",
    ephemeral: true,
  });
};

// ========= Delete todo =========
const deleteTodo = async (res: Response, userID: string) => {
  console.log("heere");
  const found = await findDB({
    collection_name: "todo",
    query: { userID: userID },
  });
  if (!found)
    return await sendMessage(res, { content: "You haven't added any todo." });
  const todos: Array<Todo> = found.todo;
  const menu = [];
  for (let todo of todos) {
    menu.push({
      label: todo.content,
      value: JSON.stringify({ userID, todoID: todo.id }),
    });
  }
  const listUi = [
    ActionRow([
      SelectMenu({
        custom_id: "todo_list_delete",
        options: menu,
      }),
    ]),
  ];

  return await sendMessage(res, { components: listUi, ephemeral: true });
};

// Handle the delete event
export const todoListDeleteHandler = async (
  res: Response,
  body: InteractionObject<MessageComponentDataStructure>
) => {
  console.log(body.data);
};

export default todo;
