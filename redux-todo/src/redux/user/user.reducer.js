const initialState = {
   userObj:null
}

var userReducer =(state = initialState, { type, payload }) => {
    switch (type) {

    case  `LOGIN`:
        return { ...state,
             userObj:payload }

        case  `SIGNOUT`:
        return { ...state,
             userObj:null }

    default:
        return state
    }
}
export default userReducer
