import React, {useEffect, useState} from "react";
import Input_Field from "../components/Input_Field";
import {Custom_Button} from "../components/Custom_Button";
import {database} from "../config/firebase-config";
import {child, onValue, push, ref, set, update} from "firebase/database";

export const Messages = () => {
  const [user_input, setUser_input] = useState("");
  const [user_input2, setUser_input2] = useState("");

  const [messages_data, setMessages_data] = useState([]);
  const [messages_data2, setMessages_data2] = useState([]);

  const change_handle = (e) => {
    setUser_input(e.target.value);
  };
  const change_handle_user2 = (e) => {
    setUser_input2(e.target.value);
  };

  const submit_handle = () => {
    const new_message_key = push(child(ref(database), "messages")).key;
    set(ref(database, `messages/${new_message_key}`), {
      type: 'user_1',
      text: user_input,
      key: new_message_key,
    }).then((res) => {
      console.log("Message sent");
    });
  };
  const submit_handle_user2 = () => {
    const new_message_key2 = push(child(ref(database), "messages")).key;
    set(ref(database, `messages/${new_message_key2}`), {
      type: 'user_2',
      text: user_input2,
      key: new_message_key2,
    }).then((res) => {
      console.log("Message sent");
    });
  };

  const update_handle = () => {
    set(ref(database, `messages/-Nqrowxx2JBpZhah-b8y`), {
      text: "updated text using set method",
    });
    // update(ref(db, 'messages'), updates);
  };

  useEffect(() => {
    const database_ref = ref(database, "messages/");
    onValue(database_ref, (snapshot) => {
      const data = snapshot.val();
      const convert_to_array = Object.values(data);
      setMessages_data(convert_to_array);

      console.log(data);
    });

    const database_ref2 = ref(database, "messages/");
    onValue(database_ref2, (snapshot) => {
      const data = snapshot.val();
      const convert_to_array = Object.values(data);
      setMessages_data2(convert_to_array);

      console.log(data);
    });
  }, []);

  return (
    <>
      <div className={'chat-parent'}>
        <div className="--dark-theme" id="chat">
          <h2>User # 1</h2>
          <div className="chat__conversation-board">
            {messages_data.map((msg) => {
              return (
                <div className={`chat__conversation-board__message-container ${msg.type === 'user_1' ? '': 'reversed'}`} >
                  <div className="chat__conversation-board__message__person">
                    <div className="chat__conversation-board__message__person__avatar">
                      {msg.type === 'user_1'?
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Monika Figi"/>
                        :(
                          <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="Dennis Mikle"/>
                        )
                      }
                    </div>
                    <span className="chat__conversation-board__message__person__nickname">Monika Figi</span>
                  </div>
                  <div className="chat__conversation-board__message__context">
                    <div className="chat__conversation-board__message__bubble"><span>{msg.text}</span></div>
                  </div>
                  <div className="chat__conversation-board__message__options">
                    <button
                      className="btn-icon chat__conversation-board__message__option-button option-item more-button">
                      <svg className="feather feather-more-horizontal sc-dnqmqq jxshSx"
                           xmlns="http://www.w3.org/2000/svg"
                           width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="chat__conversation-panel">
            <div className="chat__conversation-panel__container">
              <button className="chat__conversation-panel__button panel-item btn-icon add-file-button">
                <svg className="feather feather-plus sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24"
                     height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <button className="chat__conversation-panel__button panel-item btn-icon emoji-button">
                <svg className="feather feather-smile sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24"
                     height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </button>
              <input className="chat__conversation-panel__input panel-item" placeholder="Type a message..."
                     onChange={change_handle}/>
              <button className="chat__conversation-panel__button panel-item btn-icon send-message-button"
                      onClick={submit_handle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     aria-hidden="true" data-reactid="1036">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="--dark-theme" id="chat">
          <h2>User # 2</h2>
          <div className="chat__conversation-board">
            {messages_data.map((msg) => {
              return (
                <div className={`chat__conversation-board__message-container ${msg.type === 'user_2' ? '': 'reversed'}`} >
                  <div className="chat__conversation-board__message__person">
                    <div className="chat__conversation-board__message__person__avatar">
                      {msg.type === 'user_1'?
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Monika Figi"/>
                        :(
                          <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="Dennis Mikle"/>
                        )
                      }
                    </div>
                    <span className="chat__conversation-board__message__person__nickname">Monika Figi</span>
                  </div>
                  <div className="chat__conversation-board__message__context">
                    <div className="chat__conversation-board__message__bubble"><span>{msg.text}</span></div>
                  </div>
                  <div className="chat__conversation-board__message__options">
                    <button
                      className="btn-icon chat__conversation-board__message__option-button option-item more-button">
                      <svg className="feather feather-more-horizontal sc-dnqmqq jxshSx"
                           xmlns="http://www.w3.org/2000/svg"
                           width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="chat__conversation-panel">
            <div className="chat__conversation-panel__container">
              <button className="chat__conversation-panel__button panel-item btn-icon add-file-button">
                <svg className="feather feather-plus sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24"
                     height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <button className="chat__conversation-panel__button panel-item btn-icon emoji-button">
                <svg className="feather feather-smile sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24"
                     height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </button>
              <input className="chat__conversation-panel__input panel-item" placeholder="Type a message..."
                     onChange={change_handle_user2}/>
              <button className="chat__conversation-panel__button panel-item btn-icon send-message-button"
                      onClick={submit_handle_user2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     aria-hidden="true" data-reactid="1036">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
