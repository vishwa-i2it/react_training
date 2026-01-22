export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  setValue: (value: string) => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface TaskData {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskFormProps {
  value: string;
  setValue: (value: string) => void;
  handleSubmit: () => void;
}

export interface TaskListProps {
  taskItems: TaskData[];
  handleCompleted: (id: number) => void;
}

export interface TaskItemProps {
  taskItem: TaskData;
  handleCompleted: (id: number) => void;
}

export interface TaskSummaryProps {
  taskCount: number;
  completedCount: number;
}
