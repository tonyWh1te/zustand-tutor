import { FC, useMemo, DragEvent } from 'react';
import { useShallow } from 'zustand/shallow';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from '../../store';
import { TTask } from '../../types';
import Task from '../Task/Task';
import './Column.css';

interface IColumnProps {
  status: string;
}

const Column: FC<IColumnProps> = ({ status }) => {
  // 1 вариант фильтрации (поверхностное сравнение, то есть вложенные объекты не сравниваются)
  const tasks: TTask[] = useStore(
    useShallow((state) => state.tasks.filter((task) => task.status === status)),
  );

  // 2 вариант фильтрации
  // const filteredTasks = useMemo(() => {
  //   return tasks.filter((task) => task.status === state);
  // }, [tasks]);

  // 3 вариант фильтрации (пользовательская ф-я сравнения при условии, что стор создан с помощью createWithEqualityFn)
  // const tasks: TTask[] = useStore(
  //   (state) => state.tasks.filter((task) => task.status === status),
  //   (prev, next) => {
  //     const longest = prev.length > next.length ? prev.length : next.length;

  //     for (let i = 0; i < longest; i++) {
  //       if (!prev[i] || !next[i]) {
  //         return false;
  //       }

  //       if (prev[i] !== next[i]) {
  //         return false;
  //       }
  //     }

  //     return true;
  //   },
  // );

  const addTask = useStore((state) => state.addTask);
  const setDraggedTask = useStore((state) => state.setDraggedTask);
  const draggedTask: TTask | null = useStore((state) => state.draggedTask);
  const moveTask = useStore((state) => state.moveTask);

  const onAdd = (task: TTask) => () => {
    addTask(task);
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    moveTask(draggedTask as TTask, status);
    setDraggedTask(null);
  };

  return (
    <div
      className="column"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="column-header">
        <h3>{status}</h3>
        <button
          className="btn"
          onClick={onAdd({ title: 'Task', id: uuidv4(), status })}
        >
          ADD
        </button>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};

export default Column;
