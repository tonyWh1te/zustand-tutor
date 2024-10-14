import { FC, useMemo } from 'react';
import { useShallow } from 'zustand/shallow';
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

  return (
    <div className="column">
      <h3>{status}</h3>
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          status={task.status}
        />
      ))}
    </div>
  );
};

export default Column;
