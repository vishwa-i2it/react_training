import type { TaskSummaryProps } from "../../types/types";

export const TaskSummary = ({
  taskCount,
  completedCount,
}: TaskSummaryProps) => {
  return (
    <div>
      <h2>Total Tasks: {taskCount}</h2>
      <h2>Completed Tasks: {completedCount}</h2>
    </div>
  );
};
