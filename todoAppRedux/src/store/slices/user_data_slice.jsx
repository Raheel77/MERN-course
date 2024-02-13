import { createSlice } from "@reduxjs/toolkit";


const initial_state = [

]

const user_data_slice = createSlice({
    name:'user-data',
    initialState:initial_state,
    reducers:{
        addUser : (state,action) => {
            state.push(action.payload)
        },
        updateUser : (state,action) => {
            const {index,list,details} = action.payload;
            state[index].list = list;
            state[index].details = details
        },
        deleteUser : (state,action) => {
          const indexToDelete = action.payload;
          state.splice(indexToDelete, 1);

        }
    }

})

export const {addUser,updateUser,deleteUser} = user_data_slice.actions;
export default user_data_slice.reducer