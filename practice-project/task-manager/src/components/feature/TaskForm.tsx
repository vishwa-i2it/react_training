import type { TaskFormProps } from "../../types/types";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const TaskForm = ({ value, setValue, handleSubmit }: TaskFormProps) => {
  return (
    <div className="w-4/10 flex flex-col">
      <div>
        <Input value={value} setValue={setValue} />
      </div>
      <div className="w-full flex">
        <Button onClick={handleSubmit}>Add Task</Button>
      </div>
    </div>
  );
};
