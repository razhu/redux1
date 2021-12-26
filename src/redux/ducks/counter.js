const INCREMENT = 'increment';
const DECREMENT = 'decrement';
//action
export const increment = () => ({
    type: INCREMENT
})
//action
export const decrement = () => ({
    type: DECREMENT
})
//state
const initialState = {
    count: 0
}
// reducers
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: 
            return { ...state, count: state.count + 1};
        case DECREMENT: 
            return { ...state, count: state.count - 1};
        default: 
            return state;                        
    }
}