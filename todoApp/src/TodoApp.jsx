import React, {useState} from "react";
import Input from "./Input";


const TodoApp = () => {
    const [input, setInput] = useState({});
    const [allTasks, setAllTasks] = useState([]);

    const myValueFunc = (val, key) => {
      const obj = {...input};
      obj[key] = val;
      setInput(obj);
    }

    const addTask = () => {
      console.log('input', Object.keys(input).length);

      if (Object.keys(input).length) {
        setAllTasks([...allTasks, input]);
        setInput({});
      }
    }


    const removeTask = (index) => {
      const updatedTasks = [...allTasks];
      updatedTasks.splice(index, 1);
      setAllTasks(updatedTasks);
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
                <Input type={'text'} id={'list'} placeholder={'Create a Task'} onChangeHandle={myValueFunc}/>
                <Input type={'text'} id={'details'} placeholder={'Task Details'} onChangeHandle={myValueFunc}/>
                <button type="button" onClick={addTask}>
                  Add Task <i className="fa-solid fa-arrow-right"></i>

                </button>
              </div>
              <div className={'all-task'}>
                {Array.isArray(allTasks) &&
                allTasks.map((currentItem, index) => (
                  <div className={'task-item'} key={index}>
                    <p><span > {currentItem.list} <span> {currentItem.details} </span> </span>
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
;

export default TodoApp;