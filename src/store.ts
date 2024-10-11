import { create } from 'zustand';
import { TStore } from './types';

const store: TStore = {
  tasks: [
    { title: 'Task 1', id: 1, status: 'PLANNED' },
    { title: 'Task 2', id: 2, status: 'IN_PROGRESS' },
  ],
};

export const useStore = create<TStore>((set) => store);
