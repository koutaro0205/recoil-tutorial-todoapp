import React from 'react';
import { useRecoilValue } from 'recoil';
import { addTaskState, addTaskStateLength } from '../states/addTaskState';
import { Task } from '../types/data';
import './AddTask.css';

const AddTask: React.FC = () => {
  const addTask = useRecoilValue(addTaskState);
  const addTaskLength = useRecoilValue(addTaskStateLength);
  return (
    <div className="taskField">
      <div>{addTaskLength}個のタスクがあります</div>
      <ul>
        {
          addTask.map((task: Task) => (
            <li key={task.id}>
              {task.title}
              <span>{task.isDone ? '完' : '未'}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default AddTask;
