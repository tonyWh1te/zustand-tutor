import { FC } from 'react';
import clsx from 'clsx';
import './Task.css';

interface TaskProps {
  title: string;
}

const STATUS = 'PLANNED';

const Task: FC<TaskProps> = ({ title }) => {
  return (
    <div className="task">
      <p>{title}</p>
      <div className="bottom">
        <div></div>
        <div
          className={clsx('status', STATUS)}
          title="Status"
        >
          {STATUS}
        </div>
      </div>
    </div>
  );
};

export default Task;
