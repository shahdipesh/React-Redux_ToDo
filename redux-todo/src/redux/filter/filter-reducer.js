const initialState = {
  filter:'active'
}

var filterReducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case `DISPLAY_COMPLETED`:
        
        return { ...state, filter: 'complete' }
    case `DISPLAY_ACTIVE`:
         return { ...state, filter: 'active' }    

    default:
        return state
    }
}

export default filterReducer;
