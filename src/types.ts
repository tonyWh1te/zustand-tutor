export type TTask = {
  id: number;
  title: string;
  status: string;
};

export type TStore = {
  tasks: TTask[];
  draggedTask: TTask | null;
};

export type TAction = {
  addTask: (task: TTask) => void;
  removeTask: (id: number) => void;
  setDraggedTask: (task: TTask | null) => void;
  moveTask: (task: TTask, status: string) => void;
};
