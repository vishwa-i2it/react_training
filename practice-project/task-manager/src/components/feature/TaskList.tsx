import type { TaskListProps } from "../../types/types";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ taskItems, handleCompleted }: TaskListProps) => {
  return (
    <div className="w-4/10 flex flex-col items-center">
      {taskItems.map((item) => (
        <TaskItem key={item.id} taskItem={item} handleCompleted={handleCompleted} />
      ))}
    </div>
  );
};
