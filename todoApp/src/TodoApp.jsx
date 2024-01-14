import React, {useState} from "react";
import Input from "./Input";


const TodoApp = () => {
  const [input, setInput] = useState({});
  const [allTasks, setAllTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const myValueFunc = (val, key) => {
    const obj = {...input};
    obj[key] = val;
    setInput(obj);
  }

  const addTask = () => {
    if (Object.keys(input).length) {
      if (editIndex !== null) {
        // Update existing task
        const updatedTasks = [...allTasks];
        updatedTasks[editIndex] = input;
        setAllTasks(updatedTasks);
        setInput({});
        setEditIndex(null);
      } else {
        // Add new task
        setAllTasks([...allTasks, input]);
        setInput({});
      }
    }
  }

  const removeTask = (index) => {
    const updatedTasks = [...allTasks];
    updatedTasks.splice(index, 1);
    setAllTasks(updatedTasks);
    setEditIndex(null);
  }

  const editTask = (index) => {
    setEditIndex(index);
    setInput(allTasks[index]);
  }

  return (
    <>
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
                {editIndex !== null ? 'Update Task' : 'Add Task'} <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className={'all-task'}>
              {Array.isArray(allTasks) &&
              allTasks.map((currentItem, index) => (
                <div className={'task-item'} key={index}>
                  <p><span> {currentItem.list} <span> {currentItem.details} </span> </span>
                    <button onClick={() => editTask(index)}>Edit</button>
                    <button onClick={() => removeTask(index)}>Remove</button>
                  </p>
                </div>
              ))}
            </div>

          </div>
          <div class="home-button"></div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;