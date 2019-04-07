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
        // case 'MOVIES_LOADED':
        //     newState = Object.assign({}, state, {
        //         movies: action.data
        //     });
        //     return newState;
            
        //     case 'ERROR':
        //     newState = Object.assign({}, state, {
        //         msg: "ERROR",
                
        //     });

        //     case 'FINISH_DOWNLOADING':

        //     newState = Object.assign({}, state, {
        //         msg: "done..."
        //     });
        //     return newState;

            // case 'TITLE_CHANGE':
            // newState = Object.assign({}, state);
            
            // for (let i = 0; i < newState.movies.length; i++) {

            //     if (newState.movies[i].imdbID == action.data.imdbID) {

            //         newState.movies[i].Title = action.data.newValue;
            //     }
            // }
            // newState.date = Date.now();
            // return newState;

        default:
            return state;
    }
};
export default myReducer;