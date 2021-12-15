class Rest{
    validateAccount(account){
        return account in localStorage?true:false
    }


    accountCreate(){
        let name=data_name.value;
        let email=data_email.value;
        let phone=data_phone.value;
        let password=data_password.value;
        let account={
            name,
            email,
            phone,
            password
        }
        if(this.validateAccount(email)){
            alert("Already Exist")
        }
        else{

            localStorage.setItem(email,JSON.stringify(account))
            alert("Account Created:please click login option to login")


        }


    }



    authenticate(email,password){
        if(this.validateAccount(email)){
       let user=JSON.parse(localStorage.getItem(email))
	   
	   
        if(user.password==password){
			
        return 1;
		
   }
else{
    return 0;
}
        }
        else{
            return -1;
        }
    }

    login(){
        let username=data_username.value;
        let password=data_password.value;
        let user=this.authenticate(username,password)
        console.log(user);
        if(user==1){
           
            let my_name=JSON.parse(localStorage.getItem(name));
		sessionStorage.setItem("user",username);
		console.log(user);
            alert("U Loggedin Successfully")
            window.location.href="home.html"
        }
        else{
            alert("The email address you entered isn't connected to an account. check your account and log in.")
        }
    }



   logout(){
       if("user"in sessionStorage){
           sessionStorage.removeItem("user")
           window.location.href="login.html"
       }
       else{
           alert("Invalid  u must login first")
       }
    }



getUser(){
    let user=sessionStorage.getItem("user")
    if(user)
    {
    let div=document.getElementById('Welcome');;
    div.innerHTML=`<h1>Welcome to <b> ${user}</b> our GREEN LEAF Restaurant   </h1>`
    document.querySelector("body").append(div)
    }

else
{
    let div=document.getElementById('Welcome');;
     div.innerHTML=`<h1>Welcome To GREEN LEAF RESTAURANT</h1>`
     document.querySelector("body").append(div)
}
}
}
var rest=new Rest();
