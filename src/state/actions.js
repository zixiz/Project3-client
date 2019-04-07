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
            debugger;
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
        debugger;
       }

    //    if(!this.state.name || !this.state.email || !this.state.username ||  !this.state.pass || !this.state.repeat)

    };
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
            data: data.msg
        });
       }
       
        


    };
}