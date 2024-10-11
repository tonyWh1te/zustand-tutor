import { FC, useMemo } from 'react';
import { useStore } from '../../store';
import Task from '../Task/Task';
import './Column.css';

interface IColumnProps {
  state: string;
}

const Column: FC<IColumnProps> = ({ state }) => {
  const { tasks } = useStore();

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => task.status === state);
  }, [tasks]);

  return (
    <div className="column">
      <h3>{state}</h3>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
        />
      ))}
    </div>
  );
};

export default Column;
