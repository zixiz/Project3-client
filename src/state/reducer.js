const initialState = {
    vacationOnFollow:[],
    vacationsUnFollow:[],
    adminvacations:[]
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
            userName:action.data.username,
            msg:action.data.msg
            });
            return newState;

        case 'CHECK_SESSION':
        newState = Object.assign({}, state, {
            id: action.data.id,
            role: action.data.role,
            clientName: action.data.name,
            userName:action.data.username
            });
            debugger;
            return newState;
            
        case 'SESSION_FAILED':
        newState = Object.assign({}, state, {
            role: "",
            clientName: "",
            });
            return newState;
        
        case 'LOGOUT':
        newState = Object.assign({}, state, {
            role:action.data.role,
            id:action.data.id,
            clientName:action.data.clientName,
            userName:action.data.userName,
            vacationOnFollow:[],
            vacationsUnFollow:[],
            adminvacations:[]

            });
            return newState;
        
        case 'UserData':
        newState = Object.assign({}, state, {
            id:action.data.id,
            role:action.data.role ,
            clientName:action.data.clientName,
            userName:action.data.userName,
            vacationOnFollow:action.data.vacationsOnFollow,
            vacationsUnFollow:action.data.vacationsUnFollow
            });
            return newState;
        
        case 'ADD_FOLLOW':
        newState = Object.assign({}, state, {
            id:action.data.id,
            role:action.data.role ,
            clientName:action.data.clientName ,
            userName:action.data.userName,
            vacationOnFollow:action.data.vacationsOnFollow,
            vacationsUnFollow:action.data.vacationsUnFollow
            });
            return newState;

        case 'REMOVE_FOLLOW':
        newState = Object.assign({}, state, {
            id:action.data.id,
            role:action.data.role ,
            clientName:action.data.clientName ,
            userName:action.data.userName,
            vacationOnFollow:action.data.vacationsOnFollow,
            vacationsUnFollow:action.data.vacationsUnFollow
            });
            return newState;

        case 'ADMIN_DATA':
        newState = Object.assign({}, state, {
            id:action.data.id,
            role:action.data.role ,
            clientName:action.data.clientName ,
            userName:action.data.username,
            adminvacations:action.data.adminvacations
            });
            return newState;

        case 'UPLOADED_VACATION':
        newState = Object.assign({}, state, {
            adminvacations:action.data.adminvacations
            });
            return newState;

        case 'DELETED_VACATION':
        newState = Object.assign({}, state, {
            adminvacations:action.data.adminvacations
            });
            return newState;

        case 'UPDATED_VACATION':
        newState = Object.assign({}, state, {
            adminvacations:action.data.adminvacations
            });
            return newState;

        default:
            return state;
    }
};
export default myReducer;