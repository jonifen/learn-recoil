import { useRecoilState } from "recoil"
import { todoListFilterState } from "./atoms";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value }}) => {
    setFilter(value);
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show all">All</option>
        <option value="Show completed">Completed</option>
        <option value="Show uncompleted">Uncompleted</option>
      </select>
    </>
  )
}