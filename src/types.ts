export type TTask = {
  id: number;
  title: string;
  status: string;
};

export type TStore = {
  tasks: TTask[];
};
