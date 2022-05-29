import{configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice ({
    name: 'auth',
    initialState: { isLoggedIn: 0 },
    reducers:{
        loginAdmin(state ){
             state.isLoggedIn = 1
        },
        logout(state){
             state.isLoggedIn = 0
        },
        loginMedecin(state ){
            state.isLoggedIn = 2
       },
        loginInfirmier(state ){
            state.isLoggedIn = 3
       },
        loginPatient(state ){
            state.isLoggedIn = 4
       },
    }
});



// const nameSlice = createSlice ({
//     name: 'username',
//     initialState: { myUsername: "" },
//     reducers:{
//         setUsername(state ){
//              state.isLoggedIn = 1
//         },
//         logout(state){
//              state.isLoggedIn = 0
//         },
//         loginMedecin(state ){
//             state.isLoggedIn = 2
//        },
//         loginInfirmier(state ){
//             state.isLoggedIn = 3
//        },
//         loginPatient(state ){
//             state.isLoggedIn = 4
//        },
//     }
// });


export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer
})