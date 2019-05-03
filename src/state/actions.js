export const RegisterAction = (input) => {
   
    return async function (dispatch) {
       
       let newObjToRegister = input;

       if(newObjToRegister.name === ""||newObjToRegister.username===""||newObjToRegister.pass===""||newObjToRegister.repeat===""){
           console.log("all mendatory")
           dispatch({
            type: "ALL_INPUT_MANDATORY",
            data: null
        });
           
       }else if(newObjToRegister.pass !== newObjToRegister.repeat){
            console.log("The password is incorrect")
            dispatch({
                type: "INCORRECTSECOND_PASS",
                data: null
            });

       }else{
        
        let res = await fetch('/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObjToRegister)
        });

        let data = await res.json();
        dispatch({
            type: "REGISTERED",
            data: data.msg
        });
       }
    };
}

export const CheckSession = () =>{
    return async function (dispatch){
        let response = await fetch('/checksession');
        let data = await response.json();
        if(data.success === true){
            dispatch({
                type: "CHECK_SESSION",
                data: data
            });
        }else{
            dispatch({
                type: "SESSION_FAILED",
                data: null
            });
        }
    }
}


export const DataUser = () =>{
    return async function (dispatch){
        let response = await fetch('/user');
        let data = await response.json();
        debugger;
            dispatch({
                type: "UserData",
                data: data
            });
    }
}

export const Logout = () =>{
    return async function (dispatch){
        let response = await fetch('/logout');
        let data = await response.json();
            dispatch({
                type: "LOGOUT",
                data: data
            });
    }
}

export const LoginAction = (input) => {
   
    return async function (dispatch) {
       
       let newObjToLogin = input;
         let res = await fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObjToLogin)
        });

        let data = await res.json();
        dispatch({
            type: "LOGIN_STATUS",
            data: data
        });
       }
    };


export const AddFollow = (vacationId) => {

    return async (dispatch) => {

        let res = await fetch(`/addfollow?vacationId=${vacationId}`);

        let data = await res.json();

        dispatch({
            type: "ADD_FOLLOW",
            data: data
        });

    };

}

export const RemoveFollow = (vacationId) => {

    return async (dispatch) => {

        let res = await fetch(`/removefollow?vacationId=${vacationId}`);

        let data = await res.json();

        dispatch({
            type: "REMOVE_FOLLOW",
            data: data
        });

    };

}

export const UploadVacation = (vacationObj) => {

    return async (dispatch) => {
        console.log(vacationObj)
        let res = await fetch(`/addvactions`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vacationObj)
        });
        let data = await res.json();
        dispatch({
            type: "UPLOADED_VACATION",
            data: data
        });
    };

}

export const DataAdmin = () => {

    return async function (dispatch){
        let response = await fetch('/admindata');
        let data = await response.json();
            dispatch({
                type: "ADMIN_DATA",
                data: data
            });
    }

}

export const DeleteVacation = (vacationId) => {

    return async (dispatch) => {

        let res = await fetch(`/deletevacation?vacationId=${vacationId}`);

        let data = await res.json();

        dispatch({
            type: "DELETED_VACATION",
            data: data
        });

    };

}

export const UpdateVacation = (form) => {

    return async (dispatch) => {

        let res = await fetch(`/admindata`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
          });
        let data = await res.json();

        dispatch({
            type: "UPDATED_VACATION",
            data: data
        });

    };

}

