import { useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import type { TaskData } from "../../types/types";
import { generateUniqueId } from "../../utils/utils";
import { TaskSummary } from "./TaskSummary";

export const Body = () => {
  const [value, setValue] = useState<string>("");
  const [taskItems, setTaskItems] = useState<Array<TaskData>>([]);

  const taskCount = taskItems.length;
  const completedCount = taskItems.filter((t) => t.completed).length;

  function handleSubmit() {
    if (value.trim()) {
      const taskItem: TaskData = {
        id: generateUniqueId(),
        title: value,
        completed: false,
      };
      setTaskItems([...taskItems, taskItem]);
      setValue("");
    }
  }

  function handleCompleted(id: number) {
    setTaskItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  return (
    <div className="h-8/10 flex flex-col bg-gray-200">
      <div className="h-8/10 flex justify-center items-center">
        <TaskForm
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
        />
        <TaskList taskItems={taskItems} handleCompleted={handleCompleted} />
      </div>
      <div className="h-2/10 flex justify-center items-center">
        <TaskSummary taskCount={taskCount} completedCount={completedCount} />
      </div>
    </div>
  );
};
