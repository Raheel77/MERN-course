import React, {useState} from "react";
import Input from "./Input";
import {useNavigate} from 'react-router-dom';




import {useDispatch, useSelector} from "react-redux";
import {addUser,updateUser,deleteUser} from "../store/slices/user_data_slice";




const TodoApp = () => {
  const [input, setInput] = useState({});
  const [allTasks, setAllTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  // const navigate = useNavigate();

const dispatch = useDispatch();

  const userDataFetch = useSelector((state) => state.user_data);

  const myValueFunc = (val, key) => {
    const obj = {...input};
    obj[key] = val;
    setInput(obj);
  };

   const addTask = () => {
    if (Object.keys(input).length) {
      if (editIndex !== null) {
        // Update existing task
        const updatedTasks = [...userDataFetch];
        updatedTasks[editIndex] = input;
        setAllTasks(updatedTasks);
        dispatch(updateUser({...input,index: editIndex}));

        setInput({ });
        setEditIndex(null);
      } else {
        // Add new task
        setAllTasks([...allTasks, input]);
        setInput({});
        dispatch(addUser(input));

      }
    }
  }

  const removeTask = (index) => {
    dispatch(deleteUser(index));
  }

  const editTask = (index) => {
    setEditIndex(index);
    setInput(userDataFetch[index]);
  }

  return (
    <div className="iphone">
      <div className="top-bar"></div>
      <div className="camera-notch"></div>
      <div className="screen">
        <div className="app-content">
          <h1>ToDo App</h1>

          <div className={'create-todo'}>
            <Input type={'text'} id={'list'} placeholder={'Create a Task'} onChangeHandle={myValueFunc}
                   value={input.list || ''}/>
            <Input type={'text'} id={'details'} placeholder={'Task Details'} onChangeHandle={myValueFunc}
                   value={input.details || ''}/>
            <button type="button" onClick={addTask}>
              {editIndex !== null ? 'Update Task' : 'Add Task'} </button>
          </div>
          <div className={'all-task'}>
            {Array.isArray(userDataFetch) &&
            userDataFetch.map((currentItem, index) => (
              <div className={'task-item'} key={index}>
                <p><span> {currentItem.list} <span> {currentItem.details} </span> </span>
                  <button className={'edit'} onClick={() => editTask(index)}>Edit</button>
                  <button onClick={() => removeTask(index)}>Remove</button>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="home-button"></div>
      </div>
    </div>
  );
}

export default TodoApp;