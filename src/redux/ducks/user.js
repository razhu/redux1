export const GET_USER = 'GET_USER';
export const SET_USER= 'SET_USER';
//action
export const getUser = () => ({
    type: GET_USER
})
//action
export const setUser = (user) => ({
    type: SET_USER,
    user
})
//state
const initialState = {
    user: undefined
}
// reducers
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            const { user } = action;
            return { ...state, user};
        default: 
            return state;                        
    }
}