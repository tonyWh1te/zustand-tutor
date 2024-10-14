import { FC } from 'react';
import clsx from 'clsx';
import './Task.css';

interface TaskProps {
  title: string;
  status: string;
}

const Task: FC<TaskProps> = ({ title, status }) => {
  return (
    <div className="task">
      <p>{title}</p>
      <div className="bottom">
        <div></div>
        <div
          className={clsx('status', status)}
          title="Status"
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default Task;
