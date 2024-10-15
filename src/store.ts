import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// если хотим написать пользовательскую ф-ю сравнения при фильтрации, то можно использовать createWithEqualityFn
// import { createWithEqualityFn as create } from 'zustand/traditional';
import { TStore, TTask, TAction } from './types';

// set
// 1 - аргумент - функция, которая принимает текущее состояние и возвращает новое состояние
// 2 - логический аргумент, который подсказывает нужно ли заменить все хранилище на то, что возвращается из функции в 1 аргументе
// 3 - ярлык для логгирования в devtools

// persist позволяет хранить состояние в localStorage

export const useStore = create<TStore & TAction>()(
  persist(
    devtools(
      (set) => ({
        tasks: [],
        draggedTask: null,
        addTask: (task: TTask) => {
          set(
            (state) => ({
              tasks: [...state.tasks, task],
            }),
            false,
            'add task',
          );
        },
        removeTask: (id: number) => {
          set(
            (state) => ({
              tasks: state.tasks.filter((task) => task.id !== id),
            }),
            false,
            'remove task',
          );
        },
        setDraggedTask: (task: TTask | null) => {
          set({ draggedTask: task }, false, 'set dragged task');
        },
        moveTask: (task: TTask, status: string) => {
          set(
            (state) => ({
              tasks: state.tasks.filter((t) => t.id !== task.id).concat({ ...task, status }),
            }),
            false,
            'move task',
          );
        },
      }),
      {
        enabled: import.meta.env.MODE === 'development',
      },
    ),
    { name: 'tasks' },
  ),
);
