import React, { useCallback } from 'react';
import './InputTask.css';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { inputTitleState } from '../states/inputTitleState';
import { Task } from '../types/data';
import { addTaskState } from '../states/addTaskState';

const InputTask: React.FC = () => {
  // const inputTitle = useRecoilValue(inputTitleState); // リコイルステイトから値を取得
  // const setinputValue = useSetRecoilState(inputTitleState); // リコイルステイトに値をセット
  // ↑同じ意味↓
  const [inputValue, setInputValue] = useRecoilState<string>(inputTitleState);
  const [tasks, setTasks] = useRecoilState<Task[]>(addTaskState);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  }, [inputValue]);

  const handleClick = () => {
    // tasks stateに追加する処理を記述
    const newTask: Task = {
      id: tasks.length + 1,
      title: inputValue,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };
  return (
    <div className='inputField'>
      <input type="text" className='inputTitle' onChange={handleChange} value={inputValue} />
      <button type='button' className='addButton' onClick={handleClick}>
        追加
      </button>
    </div>
  )
}

export default InputTask;
