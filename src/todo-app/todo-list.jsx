import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./selectors";
import { TodoItem } from "./todo-item";
import { TodoItemCreator } from "./todo-item-creator";
import { TodoListFilters } from "./todo-list-filters";
import { TodoListStats } from "./todo-list-stats";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
