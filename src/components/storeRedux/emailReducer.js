// import { createSlice } from "@reduxjs/toolkit"


// const initialAuthState={
//     mails:[]
// }

// const mailSlice=createSlice({
//     name:'mail',
//     initialState:initialAuthState,
//     reducers:{
//         mailSliceAction(state){
//          state.mails=action.payload
//         }
//     }
// })

// export const mailAction=mailSlice.actions;
// export default mailSlice.reducer

import { createSlice } from "@reduxjs/toolkit"


const initialEmailState={
    mails:[],
}

const mailSlice=createSlice({
    name:'mail',
    initialState:initialEmailState,
    reducers:{
        updateInbox(state,action){
            state.mails=action.payload
        }
    }
});

export const mailSliceAction=mailSlice.actions;
export default mailSlice.reducer
 