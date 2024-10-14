import { create } from 'zustand';

// если хотим написать пользовательскую ф-ю сравнения при фильтрации, то можно использовать createWithEqualityFn
// import { createWithEqualityFn as create } from 'zustand/traditional';
import { TStore } from './types';

const store: TStore = {
  tasks: [
    { title: 'Task 1', id: 1, status: 'PLANNED' },
    { title: 'Task 2', id: 2, status: 'ONGOING' },
  ],
};

export const useStore = create<TStore>((set) => store);
