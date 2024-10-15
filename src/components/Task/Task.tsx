import { FC } from 'react';
import { useStore } from '../../store';
import { TTask } from '../../types';
import clsx from 'clsx';
import './Task.css';

interface TaskProps {
  task: TTask;
}

const Task: FC<TaskProps> = ({ task }) => {
  const { removeTask, setDraggedTask } = useStore();

  const onRemove = (id: number) => () => {
    removeTask(id);
  };

  const onDragStart = (task: TTask) => () => {
    setDraggedTask(task);
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={onDragStart(task)}
    >
      <div className="top">
        <p>{task.title}</p>
        <button
          onClick={onRemove(task.id)}
          className="remove"
        >
          Remove
        </button>
      </div>

      <div className="bottom">
        <div></div>
        <div
          className={clsx('status', task.status)}
          title="Status"
        >
          {task.status}
        </div>
      </div>
    </div>
  );
};

export default Task;
