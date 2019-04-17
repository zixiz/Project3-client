export const RegisterAction = (input) => {
   
    return async function (dispatch) {
       
       let newObjToRegister = input;

       if(newObjToRegister.name == ""||newObjToRegister.username==""||newObjToRegister.pass==""||newObjToRegister.repeat==""){
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
        
        let res = await fetch('http://localhost:3000/register', {
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
        let response = await fetch('http://localhost:3000/checksession');
        let data = await response.json();
        if(data.success == true){
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
        let response = await fetch('http://localhost:3000/user');
        let data = await response.json();
            dispatch({
                type: "USER_DATA",
                data: data
            });
    }
}

export const Logout = () =>{
    return async function (dispatch){
        let response = await fetch('http://localhost:3000/logout');
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
       console.log(newObjToLogin);
       if(newObjToLogin.username =="" || newObjToLogin.pass==""){
        dispatch({
            type: "LOGIN_ERROR",
            data: null
        });
       }else{
        let res = await fetch('http://localhost:3000/login', {
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
}