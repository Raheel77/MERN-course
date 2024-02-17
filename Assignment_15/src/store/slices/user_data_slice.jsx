import { createSlice } from "@reduxjs/toolkit";


const initial_state = {
    isLoggedIn:false,
    lodding :true,
    loginDetails :[]
}


const user_data_slice = createSlice({
    name:'user-data',
    initialState:initial_state,
    reducers:{
        setUsers: (state, actions) =>{
            state.isLoggedIn = actions.payload;
            state.lodding=true

        },
        setUsersDetails: (state, actions) =>{
            state.loginDetails = actions.payload;

        }
    }

})


export  const {setUsers,setUsersDetails}  = user_data_slice.actions
export default user_data_slice.reducer