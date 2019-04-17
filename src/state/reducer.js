const initialState = {


};
 
const myReducer = (state = initialState, action) => {
    let newState = {};
    debugger;
    switch (action.type) {
         case 'INCORRECTSECOND_PASS':
         newState = Object.assign({}, state, {
                msg: "The password is incorrect"
                });
                return newState;
        
        case 'ALL_INPUT_MANDATORY':
        newState = Object.assign({}, state, {
            msg: "All inputs are mandatory"
            });
            return newState;

        case 'LOGIN_ERROR':
        newState = Object.assign({}, state, {
            msg: "Username and password are mandetory"
            });
            return newState;

        case 'REGISTERED':
        newState = Object.assign({}, state, {
            msg: action.data
            });
            return newState;

        case 'LOGIN_STATUS':
        newState = Object.assign({}, state, {
            role: action.data.role,
            clientName: action.data.name,
            id: action.data.id,
            userName:action.data.username
            });
            return newState;

        case 'CHECK_SESSION':
        newState = Object.assign({}, state, {
            id: action.data.id,
            role: action.data.role,
            clientName: action.data.name,
            userName:action.data.username
            });
            return newState;
        case 'SESSION_FAILED':
        newState = Object.assign({}, state, {
            role: "",
            clientName: ""
            });
            return newState;
        
        case 'LOGOUT':
        newState = Object.assign({}, state, {
            status:action.data.status
            });
            return newState;
        
        case 'UserData':
        newState = Object.assign({}, state, {
            clientName:action.data.name,
            userName:action.data.username
            });
            return newState;

        default:
            return state;
    }
};
export default myReducer;