import type { TaskItemProps } from "../../types/types";
import { CheckBox } from "../ui/CheckBox";

export const TaskItem = ({ taskItem, handleCompleted }: TaskItemProps) => {
  return (
    <div>
      <CheckBox
        id={`${taskItem.id}`}
        onChange={() => handleCompleted(taskItem.id)}
        checked={taskItem.completed}
      />
      <span className={taskItem.completed ? "line-through" : ""}>
        {taskItem.title}
      </span>
    </div>
  );
};
